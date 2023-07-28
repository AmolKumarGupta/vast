import { useMemo } from "react";
import BlogPost from "../_components/BlogPost";
import { getMetaRecursively } from "../_utils/blog";



export default function Blogs() {
	
	const blogList = getMetaRecursively().map((blog) => <BlogPost key={blog.slug} {...blog}/>)

	return (
		<main className='container mx-auto mt-6 px-3 max-w-4xl'>
			<h1 className="px-5 text-5xl">Blogs</h1>

			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					<div className="-my-8 divide-y-2 divide-gray-100">
						{blogList}
					</div>
				</div>
			</section>
		
		</main>
	)
}