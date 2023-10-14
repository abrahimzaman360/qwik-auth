import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useAuthSession, useAuthSignout } from "~/routes/plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  const signOut = useAuthSignout();

  if (!session.value) {
    return <>You're not logged in!</>;
  }
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div class="mb-4">
          <Image
            src={session.value.user?.image}
            class="rounded-full"
            width={100}
            height={100}
            alt="A lovely bath"
          />
        </div>
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
          You're already signed in!
        </h1>
        <p>{session.value.user?.email}</p>
        <button
          class="mt-4 rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick$={() => signOut.submit({ callbackUrl: "/login" })}
        >
          Sign Out
        </button>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Profile",
  meta: [
    {
      name: "description",
      content:
        "Profile Page - Zeros n Ones's Creator `Ibrahim Zaman <AbrahimZaman3@gmail.com>`",
    },
  ],
};
