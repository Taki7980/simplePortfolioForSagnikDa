import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
	children,
	classN,
}: {
	children: React.ReactNode;
	classN?: string;
}) => {
	return (
		<div
			className={cn(
				"max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4",
				classN
			)}
		>
			{children}
		</div>
	);
};

export default Container;
