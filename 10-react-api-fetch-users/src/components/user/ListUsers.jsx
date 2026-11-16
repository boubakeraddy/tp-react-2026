import UserCard from "./UserCard";

export default function ListUsers({ users = [], onDelete }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Users</h2>
          <p className="mt-1 text-sm text-slate-500">
            Manage and view your users
          </p>
        </div>

        <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
          {users.length} {users.length === 1 ? "user" : "users"}
        </span>
      </div>

      {users.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onDelete={onDelete} />
          ))}
        </ul>
      ) : (
        <p className="px-6 py-10 text-center text-sm text-slate-500">
          No users yet.
        </p>
      )}
    </section>
  );
}
