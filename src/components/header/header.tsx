import { type FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type HeaderProps = object;

/**
 * Header component.
 */
export const Header: FC<HeaderProps> = ({ ...props }) => {
  return (
    <header className="bg-white" {...props}>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <Button asChild>
          <Link href="/films">Films</Link>
        </Button>
      </nav>
    </header>
  );
};
