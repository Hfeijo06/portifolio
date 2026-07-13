import type { MouseEvent } from "react";

export const smoothScrollTo = (
  e: MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  document
    .querySelector(href)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};
