import Image from "next/image";
import React from "react";
import { ImageGrid } from "./ImageGrid";

const MyDetails = () => {
	return (
		<div className=" w-full flex items-center justify-center h-screen pb-10 bg-[#FFDA78] rounded-t-full">
			<div className="flex flex-col md:flex-row my-5 max-w-full md:max-w-6xl items-center justify-center">
				<div className="w-full md:w-1/2 h-full">
					<ImageGrid/>
				</div>
				<div className="textContainer w-full md:w-1/3 px-10 h-full flex-col gap-10 space-y-6">
					<h1 className="title text-3xl md:text-6xl font-bold capitalize">
						About Me
					</h1>
					
					<div className="content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Temporibus, consectetur. Rerum saepe cupiditate
						architecto facilis harum neque beatae aliquam distinctio
						nesciunt maxime recusandae nihil, porro expedita
						dignissimos enim labore, nisi, laborum libero? Quo,
						eius?
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default MyDetails;
