export default function CreateUser({ onCreate }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const user = {
      name: formData.get("name").trim(),
      username: formData.get("username").trim(),
      email: formData.get("email").trim(),
      avatar: "http://localhost:5000/avatars/random",
      address: {
        street: formData.get("street").trim(),
        suite: formData.get("suite").trim(),
        city: formData.get("city").trim(),
        zipcode: formData.get("zipcode").trim(),
      },
      phone: formData.get("phone").trim(),
      website: formData.get("website").trim(),
      company: {
        name: formData.get("company").trim(),
      },
    };

    onCreate?.(user);
    event.currentTarget.reset();
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

  const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";

  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Create user</h2>
        <p className="mt-1 text-sm text-slate-500">
          Enter the user’s contact and profile details.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full name
            </label>
            <input
              id="name"
              name="name"
              required
              className={inputClass}
              placeholder="Leanne Graham"
            />
          </div>

          <div>
            <label htmlFor="username" className={labelClass}>
              Username
            </label>
            <input
              id="username"
              name="username"
              required
              className={inputClass}
              placeholder="Bret"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClass}
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className={inputClass}
              placeholder="1-770-736-8031"
            />
          </div>

          <div>
            <label htmlFor="website" className={labelClass}>
              Website
            </label>
            <input
              id="website"
              name="website"
              className={inputClass}
              placeholder="example.com"
            />
          </div>
        </div>

        <fieldset className="space-y-4">
          <legend className="mb-3 text-sm font-semibold text-slate-900">
            Address
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="street" className={labelClass}>
                Street
              </label>
              <input
                id="street"
                name="street"
                className={inputClass}
                placeholder="Kulas Light"
              />
            </div>
            <div>
              <label htmlFor="suite" className={labelClass}>
                Suite
              </label>
              <input
                id="suite"
                name="suite"
                className={inputClass}
                placeholder="Apt. 556"
              />
            </div>
            <div>
              <label htmlFor="city" className={labelClass}>
                City
              </label>
              <input
                id="city"
                name="city"
                className={inputClass}
                placeholder="Gwenborough"
              />
            </div>
            <div>
              <label htmlFor="zipcode" className={labelClass}>
                ZIP code
              </label>
              <input
                id="zipcode"
                name="zipcode"
                className={inputClass}
                placeholder="92998-3874"
              />
            </div>
          </div>
        </fieldset>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            className={inputClass}
            placeholder="Romaguera-Crona"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Create user
        </button>
      </form>
    </section>
  );
}
