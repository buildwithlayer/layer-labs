import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Layer Labs Blog",
    template: "%s | Layer Labs Blog",
  }
}

export default function BlogPostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="w-full max-w-[800px] flex flex-col py-16 z-10 relative px-4">
        {children}
      </div>
    </div>
  );
}
