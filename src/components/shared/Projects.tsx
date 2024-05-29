import React from "react";
import Heading from "../ui/heading";
import Card from "../ui/card";
import ProjectData from "@/data/data";

const Projects = () => {
	return (
		<div className="md:w-[72rem] w-full h-full mb-0 md:mb-32 mx-auto mt-[-60px] pt-10 bg-white rounded-t-3xl pb-3 md:pb-20">
			<Heading title={"My Work"} center subtitle="the works that i have done" />
			<div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-4 justify-center md:max-w-6xl px-10 max-w-full">
				
				{ProjectData.map((item, index) => (
					<Card key={index} title={item.title} date={item.date} description={item.description} image={item.image} subsection={item.subsection} id={item.id} />
				))}
			</div>
		</div>
	);
};

export default Projects;
