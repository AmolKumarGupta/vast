import Image from 'next/image'

export default function Home() {
	return (
		<section className="text-gray-600 body-font dark:bg-gray-900">
			<div className="container mx-auto flex px-5 pb-24 pt-20 items-center justify-center flex-col">
				<Image
					src="/favicon.ico"
					width={50}
					height={50}
					alt="hero"
					unoptimized={true}
					className="lg:w-1/6 md:w-2/6 sm:w-2/6 w-3/6 mb-10 object-cover object-center rounded"
				/>
				<div className="text-center lg:w-2/3 w-full">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">Microdosing synth tattooed vexillologist</h1>
					<p className="mb-8 leading-relaxed dark:text-gray-300">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
					<div className="flex justify-center">
						<button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded sm:text-lg text-base">Lets Started</button>
						<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded sm:text-lg text-base">Portfolio</button>
					</div>
				</div>
			</div>
		</section>
	)
}
