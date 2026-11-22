const contacts = [
  { label: "GitHub", href: "https://github.com/Historius", external: true },
  { label: "Telegram", href: "https://t.me/SerGrey2033", external: true },
  { label: "Email", href: "mailto:stets.2033@gmail.com", external: false },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/serhii-stets-068400268/",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Built with Next.js · Deployed on Vercel
        </p>
        <ul className="flex flex-wrap gap-2">
          {contacts.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.href}
                {...(contact.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="inline-block rounded-full border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
