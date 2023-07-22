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

    const content = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(rehypeHighlight)
        .process(raw);

    return String(content);
}

export default async function Demo({ params }) {
    const content = await getPage(params.slug)

    return <>
        <div>Demo</div>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
    </>
}