import matter from 'gray-matter';
import fs from 'node:fs'
import path from 'node:path'
import rehypeHighlight from 'rehype-highlight/lib';
import rehypeStringify from 'rehype-stringify/lib';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { blogDir } from '@config/blog';

export async function generateStaticParams() {
    let files = fs.readdirSync(path.join(process.cwd(), blogDir), {
        encoding: 'utf8'
    });

    return files
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
            return { slug: file.replace(".md", "") }
        });
}

async function getPage(fileName) {
    let rawFile = fs.readFileSync(path.join(process.cwd(), blogDir, `${fileName}.md`), {
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
        <div className='block-md container mx-auto px-3 max-w-4xl'>
            <h2 className='font-bold'>{ meta.title }</h2>
            <h6>Created at {meta.creation_date}</h6><br/>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
            <div className='my-8' ></div>
        </div>
    </>
}