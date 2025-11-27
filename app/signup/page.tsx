import { signupAction } from "../server-actions/auth/auth";

async function page() {
  return (
    <div>
      <form className="p-4" action={signupAction}>
        <h2>SIGNUP</h2>
        <div>
          <input
            type="text"
            name="email"
            className="border p-2 rounded"
            placeholder="email"
          />
        </div>
        <div className="mt-2">
          <input
            type="password"
            name="password"
            className="border p-2 rounded"
            placeholder="password"
          />
        </div>
        <div className="mt-2">
          <button type="submit" className="border p-2 rounded cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;
