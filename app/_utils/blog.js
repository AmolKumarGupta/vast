import fs from 'node:fs';
import path from 'node:path';
import matter from "gray-matter";

export function getMetaRecursively() {
    let dir = fs.readdirSync(path.join(process.cwd(), 'blog'), {
        encoding: 'utf8'
    });

    let metas = [];
    
    dir.filter((file) => file.endsWith('.md'))
        .forEach((file, index) => {
            if (index >= 9) {
                return;
            }

            let rawFile = fs.readFileSync(path.join(process.cwd(), 'blog', file), {
                encoding: 'utf8'
            });

            let {data} = matter(rawFile);
            metas.push({ slug: file.replace('.md', ''), ...data });
        });

    return metas;
}