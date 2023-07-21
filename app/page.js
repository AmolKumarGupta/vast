import Image from 'next/image'
import fs from 'node:fs';
import path from 'node:path';

function getBlog() {
  const files = fs.readdirSync(path.join(process.cwd(), 'blog'));
  return files.filter(file => file.endsWith('.mdx'));
}

export default function Home() {
  const files = getBlog();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Amol
      { files.map((file, idx) => <div key={idx}>{ file }</div>) }
    </main>
  )
}
