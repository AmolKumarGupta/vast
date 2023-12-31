import fs from 'node:fs';
import path from 'node:path';
import matter from "gray-matter";
import { blogDir } from '@config/blog';

export function getMetaRecursively() {
    const countPage = 10;
    
    let dir = fs.readdirSync(path.join(process.cwd(), blogDir), {
        encoding: 'utf8'
    });

    let metas = [];
    
    dir.filter((file) => file.endsWith('.md'))
        .forEach((file, index) => {
            if (index > countPage) {
                return;
            }

            let rawFile = fs.readFileSync(path.join(process.cwd(), blogDir, file), {
                encoding: 'utf8'
            });

            let {data} = matter(rawFile);
            metas.push({ slug: file.replace('.md', ''), ...data });
        });

    return metas;
}