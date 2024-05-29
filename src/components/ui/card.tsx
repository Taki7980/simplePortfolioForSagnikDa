import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
	title,
	date,
	description,
	image,
	id,
	link,
	link2,
	link3,
	subsection,
}: CardProps) => {
	return (
		<div className="w-full h-full mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
			<div className="w-full md:h-1/2 h-full">
				<Image
					src={image}
					height={300}
					width={300}
					alt="hg"
					className="object-cover rounded-xl h-full w-full"
				/>
			</div>
			<div className="p-5 w-full md:h-full h-full">
				<div>
					<h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>
				</div>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{description}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{date}
				</p>
				<div className=" flex flex-col justify-center gap-5">
					{subsection.map((item, index) => (
						<Link
							key={index}
							href={item.link}
							className="inline-flex items-center px-3 py-2 text-[10px] md:text-sm font-medium text-center text-white bg-[#028391] rounded-lg hover:bg-[#003285] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							{item.title}
							<svg
								className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
