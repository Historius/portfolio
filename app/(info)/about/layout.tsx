export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return (
    <div className="border p-4">
      <h1>About Section</h1>
      {children}
    </div>
  );
}
