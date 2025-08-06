import React from 'react'

const PublishData = ({
    authors,
    date
}: {
    authors: { name: string; url?: string }[];
    date: string;
}) => {
  return (
    <div className='flex items-center gap-3 text-sm py-2'>
      {authors.map((author, idx) => (
        <span key={author.name} className='font-semibold text-gray-300'>
          {author.url ? <a href={author.url}>{author.name}</a> : author.name}
            {idx < authors.length - 1 && ', '}
        </span>
      ))}
      <span className='text-gray-600 font-light'>{new Date(date).toLocaleDateString()}</span>
    </div>
  )
}

export default PublishData