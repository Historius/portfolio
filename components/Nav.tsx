import { Suspense } from "react";
import Link from "next/link";
import NavLink from "@/components/NavLink";

const links = [
  { href: "/", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <nav className="flex gap-4">
      {links.map((link) => (
        <Suspense
          key={link.href}
          fallback={<Link href={link.href}>{link.label}</Link>}
        >
          <NavLink href={link.href} label={link.label} />
        </Suspense>
      ))}
    </nav>
  );
}
