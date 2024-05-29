declare interface CardProps {
	id: string;
	title: string;
	date: string;
	description: string;
	image: string;
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
