"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const pageWrapper = document.getElementById("page-wrapper");
    pageWrapper?.classList.add("fade-out");

    await sleep(300); // allow fade-out to complete before route change
    router.push(href);
  };

  return (
    <Link
      onClick={handleTransition}
      href={href}
      {...props}
      className="hover:text-primary dark:hover:text-primaryhover transition"
    >
      {children}
    </Link>
  );
};
