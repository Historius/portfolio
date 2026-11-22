"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  navLinkActive,
  navLinkBase,
  navLinkInactive,
} from "@/lib/nav-styles";

export default function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`}
    >
      {label}
    </Link>
  );
}
