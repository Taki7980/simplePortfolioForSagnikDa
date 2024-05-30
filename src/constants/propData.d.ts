declare interface CardProps {
	id: string;
	title: string;
	description: string;
	image: string;
	date:string
	subsection: {[
		{
			title: string,
			link: string,
			image: string,
			description: string,
			date:string,
		}
	]};
}

declare interface SubsectionProps {
	title: string;
	link: string;
	image: string;
	description: string;
	date:string
}


