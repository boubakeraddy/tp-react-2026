export default function UserCard({ user, onDelete }) {
  return (
    <div className="flex min-w-0 flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <img
            src={user.avatar}
            alt=""
            className="h-14 w-14 shrink-0 rounded-full border border-slate-200 bg-slate-100 object-cover"
          />

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-slate-900">
              {user.name}
            </h3>
            <p className="truncate text-sm text-slate-500">@{user.username}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onDelete(user.id)}
          aria-label={`Delete ${user.name}`}
          className="shrink-0 rounded-md border border-red-200 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Delete
        </button>
      </div>

      <div className="grid gap-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
        <a
          href={`mailto:${user.email}`}
          className="truncate hover:text-indigo-700 hover:underline"
        >
          {user.email}
        </a>

        {user.phone && <p className="truncate">{user.phone}</p>}

        {user.address && (
          <p className="text-slate-500">
            {user.address.street}, {user.address.suite}, {user.address.city}{" "}
            {user.address.zipcode}
          </p>
        )}

        {user.website && (
          <a
            href={
              user.website.startsWith("http")
                ? user.website
                : `https://${user.website}`
            }
            target="_blank"
            rel="noreferrer"
            className="truncate text-indigo-700 hover:underline"
          >
            {user.website}
          </a>
        )}

        {user.company?.name && (
          <p className="truncate">
            <span className="text-slate-500">Company:</span> {user.company.name}
          </p>
        )}
      </div>
    </div>
  );
}
