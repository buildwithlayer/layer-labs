"use client";

import React from "react";
import CalendarEmbed from "../_components/CalendarEmbed";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full items-center px-4">
      <div className="w-full max-w-[--content-width] flex flex-col items-start gap-16 py-16 z-10 relative px-4 md:px-0">
        {/* Header */}
        <div className="flex flex-col gap-6 w-full">
          <h1 className="font-medium text-6xl">Who are we</h1>
          
          {/* Company History */}
          <div className="prose max-w-none">
            <p className="text-xl">
              Layer Labs actually started as a company called PumpIt in 2019. It's a long
              story about how we got here.
            </p>
            <p className="text-lg text-gray-600">
              TODO COMPLETE THIS
            </p>
          </div>
        </div>
        
        {/* Meeting Booker */}
        <div className="w-full mt-12">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Chat With us meeting booker</h2>
            <CalendarEmbed 
              title="Schedule a meeting with our team" 
              description="We'd love to hear about your project and how we can help."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

