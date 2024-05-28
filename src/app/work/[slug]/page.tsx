import Heading from "@/components/ui/heading";
import SubCard from "@/components/ui/subCard";
import ProjectData from "@/data/data";

import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
	const init = ProjectData.find(
		(item) => item.id === params.slug
	);
	const details = ProjectData.find(
		(item) => item.id === params.slug
	)?.subsection;

	return (
		<div className="max-w-6xl h-full flex flex-col items-center justify-center mx-auto mt-[-80px] pt-10 bg-white rounded-lg pb-20">
			<Heading
				title={init?.title || "welcome"}
				center
			/>
			<div className=" grid grid-cols-1 md:grid-cols-3 pt-10 gap-4 justify-center max-w-6xl">
				{details?.map((item, index) => (
					<SubCard
						key={index}
						title={item.title}
						description={item.description}
						date={""}
						image={item.image}
						link={"/"}
					/>
				))}
			</div>
		</div>
	);
};

export default page;
