import { type FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type HeaderProps = object;

/**
 * Header component.
 */
export const Header: FC<HeaderProps> = ({ ...props }) => {
  return (
    <header className="bg-primary" {...props}>
      <nav
        aria-label="Global"
        className="flex max-w-7xl gap-4 p-6"
      >
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>

        <Button asChild>
          <Link href="/films">Films</Link>
        </Button>

        <Button asChild>
          <Link href="/people">People</Link>
        </Button>

        <Button asChild>
          <Link href="/planets">Planets</Link>
        </Button>

        <Button asChild>
          <Link href="/species">Species</Link>
        </Button>

        <Button asChild>
          <Link href="/starships">Starships</Link>
        </Button>

        <Button asChild>
          <Link href="/vehicles">vehicles</Link>
        </Button>
      </nav>
    </header>
  );
};
