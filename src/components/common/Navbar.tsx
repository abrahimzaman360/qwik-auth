import { component$ } from "@builder.io/qwik";
import { useAuthSession } from "~/routes/plugin@auth";
import { Image } from "@unpic/qwik";

export default component$(() => {
  const session = useAuthSession();

  return (
    <>
      <nav class="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div class="max-w-screen-[3xl] mx-auto flex flex-wrap items-center justify-between p-4">
          <a href="/" class="flex items-center text-xl font-bold">
            Zeros n Ones
          </a>
          <div
            class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul class="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
              <li>
                {session.value ? (
                  <div class="flex flex-row items-center justify-between gap-2">
                    <p class="font-light">Hi, {session.value.user?.name}</p>
                    <a href="/profile">
                      <Image
                        class="rounded-full"
                        src={session.value.user?.image}
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : (
                  <>
                    <a href="/login">Login</a>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
});
