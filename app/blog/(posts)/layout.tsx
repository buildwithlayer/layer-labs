import { Metadata } from "next";
import CalendarEmbed from "../../_components/CalendarEmbed";

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
        
        {/* Calendar Embed Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <CalendarEmbed 
            title="Want to learn more about Layer Labs?" 
            description="Schedule a meeting with our team to discuss how we can help you build better software."
          />
        </div>
      </div>
    </div>
  );
}
