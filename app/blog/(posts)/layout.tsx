export default function BlogPostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col gap-8 py-16 z-10 relative px-4">
        {children}
      </div>
    </div>
  );
}
