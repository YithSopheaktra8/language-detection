"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";
import {TrigramTuple, franc, francAll} from 'franc'

export default function Home() {
  const [data, setData] = useState<TrigramTuple[] | null>(null);
  const [input, setInput] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const result = francAll(input,{minLength: 3,only: ['khm','eng']});
    setData(result);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className="mb-4 p-2 border border-gray-300 rounded text-black"
          placeholder="Enter text here..."
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
      {data && data.map((item, index) => (
        <div key={index} className="mt-4">
          <p>Language: {item[0]}</p>
          <p>Score: {item[1]}</p>
        </div>
      ))}
    </main>
  );
}