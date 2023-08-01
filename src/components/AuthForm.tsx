import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
type SignInProps = {
  email: string;
  password: string;
};
type AuthFormProps = {
  typeOf: string;
  onSubmit: ({ email, password }: SignInProps) => void;
};

const AuthForm = ({ typeOf, onSubmit }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="flex flex-col justify-center flex-1 h-screen px-6 py-12 text-white bg-gray-800 lg:px-8">
      <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center ">
          {typeOf} to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-white bg-gray-700 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <p id="passwordError" className="mt-1 text-sm text-red-500">
              Please enter a valid email address.
            </p> */}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                placeholder="Enter you password"
                onChange={(e) => setPassword(e.target.value)}
                title="Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter."
                className="block w-full rounded-md pl-2 border-0 py-1.5 text-white bg-gray-700 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {/* <p className="mt-1 text-sm text-red-500">
              Please enter a valid email address.
            </p> */}
          </div>

          <div>
            <button
              //   onClick={onSubmit}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {typeOf}
            </button>
          </div>
        </form>

        <p className="mt-10 text-sm text-center text-gray-500">
          {typeOf === "Sign In" ? "Not" : "Already"} a member?{" "}
          <Link
            href={typeOf === "Sign In" ? "/auth/signup" : "/auth/signin"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {typeOf === "Sign In" ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
