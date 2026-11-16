/**
 * Helper to build SQL queries with filtering, searching, sorting, and pagination.
 */
function buildListQuery(tableName, queryParams, options = {}) {
  const {
    allowedFilters = [],
    searchFields = [],
    defaultSort = 'id',
    defaultOrder = 'ASC'
  } = options;

  const conditions = [];
  const params = {};

  // Exact / standard column filters
  for (const filter of allowedFilters) {
    if (queryParams[filter] !== undefined) {
      let val = queryParams[filter];
      // Convert 'true'/'false' to 1/0 for boolean fields like completed
      if (filter === 'completed') {
        val = (val === 'true' || val === '1' || val === true) ? 1 : 0;
      }
      conditions.push(`${filter} = @filter_${filter}`);
      params[`filter_${filter}`] = val;
    }
  }

  // Full-text search across specified fields (?q=...)
  if (queryParams.q && searchFields.length > 0) {
    const searchTerms = searchFields.map(f => `${f} LIKE @searchQuery`).join(' OR ');
    conditions.push(`(${searchTerms})`);
    params.searchQuery = `%${queryParams.q}%`;
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  // Sorting (_sort=name&_order=desc)
  const sortCol = (queryParams._sort || queryParams.sort || defaultSort);
  const sortOrder = ((queryParams._order || queryParams.order || defaultOrder).toUpperCase() === 'DESC') ? 'DESC' : 'ASC';

  // Sanitize sort column to prevent SQL injection
  const safeSortCol = /^[a-zA-Z0-9_]+$/.test(sortCol) ? sortCol : defaultSort;

  // Pagination (_limit=10&_page=1 or limit=10&page=1)
  const limit = parseInt(queryParams._limit || queryParams.limit, 10);
  const page = parseInt(queryParams._page || queryParams.page, 10) || 1;

  let limitClause = '';
  if (!isNaN(limit) && limit > 0) {
    const offset = (page - 1) * limit;
    limitClause = `LIMIT ${limit} OFFSET ${offset}`;
  }

  const sql = `SELECT * FROM ${tableName} ${whereClause} ORDER BY ${safeSortCol} ${sortOrder} ${limitClause}`;
  const countSql = `SELECT COUNT(*) as total FROM ${tableName} ${whereClause}`;

  return {
    sql,
    countSql,
    params
  };
}

module.exports = {
  buildListQuery
};
