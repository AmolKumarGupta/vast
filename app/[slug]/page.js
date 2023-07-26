import matter from 'gray-matter';
import fs from 'node:fs'
import path from 'node:path'
import rehypeHighlight from 'rehype-highlight/lib';
import rehypeStringify from 'rehype-stringify/lib';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export async function generateStaticParams() {
    return [
        {slug: 'sample'}
    ]
}

async function getPage(fileName) {
    let raw = fs.readFileSync(path.join(process.cwd(), 'blog', `${fileName}.md`), {
        encoding: 'utf8'
    });

    const {data, content} = matter(raw);

    const html = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(rehypeHighlight)
        .process(content);

    return {
        data,
        content: String(html)
    };
}

export default async function Demo({ params }) {
    const {data, content} = await getPage(params.slug)

    return <>
        <div>{ data.title }</div>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
    </>
}