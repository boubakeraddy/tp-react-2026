import { useState } from "react";
import CreateUser from "./CreateUser";
import ListUsers from "./ListUsers";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadUsers() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/users");
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  const handleCreate = (newUser) => {
    // add user to the list of users using API
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        return response.json();
      })
      .then((createdUser) => {
        setUsers((prevUsers) => [...prevUsers, createdUser]);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleDelete = (userId) => {
    // delete user from the list of users using API
    fetch(`http://localhost:5000/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <main className="mx-auto max-w-7xl space-y-8">
        <header>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Manage users
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Create users and manage your user list.
          </p>
        </header>

        <CreateUser onCreate={handleCreate} />

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-slate-900">User list</h2>

            <button
              type="button"
              onClick={loadUsers}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Loading…" : "Load users"}
            </button>
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <ListUsers users={users} onDelete={handleDelete} />
        </section>
      </main>
    </div>
  );
}
