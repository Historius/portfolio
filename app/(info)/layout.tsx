export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-800 p-2">
      <h1>Info Section</h1>
      <p>Info group</p>
      {children}
    </div>
  );
}
