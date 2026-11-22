import { Suspense } from "react";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import { navLinkBase, navLinkInactive } from "@/lib/nav-styles";

const links = [
  { href: "/", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <nav aria-label="Main" className="flex items-center gap-1">
      {links.map((link) => (
        <Suspense
          key={link.href}
          fallback={
            <Link
              href={link.href}
              className={`${navLinkBase} ${navLinkInactive}`}
            >
              {link.label}
            </Link>
          }
        >
          <NavLink href={link.href} label={link.label} />
        </Suspense>
      ))}
    </nav>
  );
}
