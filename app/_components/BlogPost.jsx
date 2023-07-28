
export default function BlogPost({
	slug,
	title,
	excerpt,
	creation_date,
	tags
}) {

	return (
		<div className="py-8 flex flex-wrap md:flex-nowrap">

			<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
				<span className="font-semibold title-font text-gray-700">CATEGORY</span>
				<span className="mt-1 text-gray-500 text-sm">{creation_date}</span>
			</div>
			<div className="flex-grow w-full">
				<a href={`/${slug}`}>
					<h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
				</a>
				<p className="leading-relaxed">{excerpt}</p>

				<div className="flex gap-2 text-sm text-blue-500">
					{tags ? tags.map(tag => <span>#{tag}</span>) : ''}
				</div>

				<a href={`/${slug}`} className="text-blue-700 inline-flex items-center mt-4">Read
					<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
						<path d="M5 12h14"></path>
						<path d="M12 5l7 7-7 7"></path>
					</svg>
				</a>
			</div>
		</div>
	)
}