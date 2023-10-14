import { component$ } from "@builder.io/qwik";
import { useAuthSession, useAuthSignin } from "../plugin@auth";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const signIn = useAuthSignin();
  const session = useAuthSession();

  if (session.value) {
    return (
      <>
        You're already logged in!
        <br />
        Go to
        <a href="/profile" class="underline underline-offset-1">
          Profile
        </a>
      </>
    );
  }
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
            <h1 class="mt-4 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <div class="space-y-4 p-4 md:space-y-3">
              <button
                class="w-full rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick$={() =>
                  signIn.submit({
                    providerId: "github",
                    options: { callbackUrl: "/profile" },
                  })
                }
              >
                Sign in with Github
              </button>
              <button
                class="w-full rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick$={() =>
                  signIn.submit({
                    providerId: "google",
                    options: { callbackUrl: "/profile" },
                  })
                }
              >
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Login",
  meta: [
    {
      name: "description",
      content:
        "Login Page - Zeros n Ones's Creator `Ibrahim Zaman <AbrahimZaman3@gmail.com>`",
    },
  ],
};
