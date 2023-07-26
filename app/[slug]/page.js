import matter from 'gray-matter';
import fs from 'node:fs'
import path from 'node:path'
import rehypeHighlight from 'rehype-highlight/lib';
import rehypeStringify from 'rehype-stringify/lib';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export async function generateStaticParams() {
    let files = fs.readdirSync(path.join(process.cwd(), 'blog'), {
        encoding: 'utf8'
    });

    return files
        .filter((file) => file.endsWith('.md'))
        .map((file) => { slug: file.replace(".md", "") });
}

async function getPage(fileName) {
    let rawFile = fs.readFileSync(path.join(process.cwd(), 'blog', `${fileName}.md`), {
        encoding: 'utf8'
    });

    const {data, content} = matter(rawFile);

    const html = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(rehypeHighlight)
        .process(content);

    return {
        meta: data,
        content: String(html)
    };
}

export default async function Demo({ params }) {
    const {meta, content} = await getPage(params.slug)

    return <>
        <div className='block-md container mx-auto max-w-4xl'>
            <div className='text-center text-3xl font-bold'>{ meta.title }</div>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    </>
}