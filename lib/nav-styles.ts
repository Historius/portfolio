// Общие классы ссылок меню. Обычный файл (не "use client"),
// чтобы и серверный Nav, и клиентский NavLink получили настоящие строки.
export const navLinkBase =
  "rounded-full px-3 py-1.5 text-sm transition-colors";
export const navLinkActive = "bg-foreground/10 font-medium text-foreground";
export const navLinkInactive = "text-muted hover:text-foreground";
