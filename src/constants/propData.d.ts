declare interface CardProps {
	id: string;
	title: string;
	date: string;
	description: string;
	image: string;
	link: string;
	link2?: string;
	link3?: string;
	subsection: {[
		{
			title: string,
			description: string,
			date: string,
			image: string,
			link: string,
		}
	
	]};
}

declare interface SubsectionProps {
	title: string;
	description: string;
	date: string;
	image: string;
	link: string;
}
