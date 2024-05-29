import Image from "next/image";
import React from "react";
import { ImageGrid } from "./ImageGrid";
import { cn } from "@/lib/utils";
import { MdEmail } from "react-icons/md";
import Heading from "../ui/heading";

const MyDetails = () => {
	return (
		<div className=" w-full flex items-center justify-center h-screen pb-10 bg-[#FF7D29] rounded-t-full ">
			<div className="flex flex-col md:flex-row my-5 max-w-full md:max-w-6xl items-center justify-center self-center space-y-10 pb-20">
				<div className="w-full md:w-1/2 h-full hidden md:flex">
					<ImageGrid />
				</div>
				<div className="w-full md:w-1/2 h-full flex items-center justify-center md:hidden">
					<Image
						src={"/images/profile.jpg"}
						height={300}
						width={300}
						className={cn("object-cover size-auto rounded-xl")}
						alt="thumbnail"
					/>
				</div>
				<div className="textContainer w-full md:w-1/3 px-10 h-full flex-col gap-10 space-y-6 pb-10">
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
					<Heading title="lets connect"/>
					<div className="content flex items-center gap-3">
						<MdEmail size={30} />
						<p className="">sagnikm1999@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyDetails;
