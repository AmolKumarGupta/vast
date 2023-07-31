import Image from 'next/image'
import { portfolio } from './config/profile'
import Footer from './_components/Footer'

export default function Home() {
	return (
		<>
			<section className="text-gray-600 body-font dark:bg-gray-900">
				<div className="container mx-auto flex px-5 pb-24 pt-20 items-center justify-center flex-col">
					<Image
						src="/vast.png"
						width={50}
						height={50}
						alt="hero"
						unoptimized={true}
						priority={false}
						className="lg:w-1/6 md:w-2/6 sm:w-2/6 w-3/6 mb-10 object-cover object-center rounded"
					/>
					<div className="text-center lg:w-2/3 w-full">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">Simple And Programatic Blog</h1>
						<p className="mb-8 leading-relaxed dark:text-gray-300">
							A way to learn and keep things in one place in this vast world of code
						</p>
						<div className="flex justify-center">
							<a href="/blogs" className="cursor-pointer inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded sm:text-lg text-base">Lets Started</a>
							<a href={portfolio} className="cursor-pointer ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded sm:text-lg text-base">Portfolio</a>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}
