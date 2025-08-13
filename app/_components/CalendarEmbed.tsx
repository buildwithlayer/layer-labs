import React from 'react';

interface CalendarEmbedProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function CalendarEmbed({
  title = "Meet with Us",
  description = "Schedule a meeting with our team to learn more about Layer Labs and how we can help you.",
  className = "",
}: CalendarEmbedProps) {
  return (
    <div className={`w-full border border-black/20 rounded-lg p-6 bg-white shadow-sm ${className}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      
      {/* Cal.com embed */}
      <div className="cal-embed">
        <iframe
          src="https://cal.com/team/layerlabs/meet"
          width="100%"
          height="600px"
          frameBorder="0"
          title="Schedule a meeting with Layer Labs"
          className="rounded-md shadow-sm"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
