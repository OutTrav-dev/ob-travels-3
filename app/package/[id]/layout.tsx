export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 md:px-8 relative">{children}</main>
    </>
  );
}
