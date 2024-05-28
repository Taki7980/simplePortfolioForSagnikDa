import React from "react";
import Heading from "../ui/heading";
import Card from "../ui/card";
import ProjectData from "@/data/data";

const Projects = () => {
	return (
		<div className="md:max-w-6xl max-w-full h-full mx-auto mt-[-80px] pt-10 bg-white rounded-lg pb-20">
			<Heading title={"My Work"} center subtitle="the works that i have done" />
			<div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-4 justify-center md:max-w-6xl max-w-full">
				
				{ProjectData.map((item, index) => (
					<Card key={index} title={item.title} date={item.date} description={item.description} image={item.image} link={item.link} subsection={item.subsection} id={item.id} />
				))}
			</div>
		</div>
	);
};

export default Projects;
