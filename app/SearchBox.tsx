'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

function SearchBox() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault(); // to prevent the default refresh behaviour
    if (!input) return;

    router.push(`/search?term=${input}`);

  };

  return (
    <form className='max-w-6xl mx-auto flex justify-between items-center px-5' onSubmit={handleSearch}>
      <input
        className='w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400'
        onChange={(e) => setInput(e.target.value)}
        placeholder='Search Keywords...'
        type='text'
        value={input}
      />
      <button 
        className='text-orange-400 disabled:text-gray-400'
        disabled={!input}
        type='submit'
      >Search</button>
    </form>
  );
}

export default SearchBox;
