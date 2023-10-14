/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Navbar from "~/components/common/Navbar";

export default component$(() => {
  return (
    <>
      <Navbar />
    </>
  );
});

export const head: DocumentHead = {
  title: "Zeros n Ones",
  meta: [
    {
      name: "description",
      content:
        "Zeros n Ones's Creator `Ibrahim Zaman <AbrahimZaman3@gmail.com>`",
    },
  ],
};
