import Link from "next/link";

export default function NotFound() {
  return (
    <main className="animate-fade-up py-16 text-center">
      <p className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-7xl font-bold text-transparent">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-2 text-muted">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        Go back home
      </Link>
    </main>
  );
}
