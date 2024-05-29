declare interface CardProps {
	id: string;
	title: string;
	description: string;
	image: string;
	subsection: {[
		{
			title: string,
			link: string,
		}
	
	]};
}

declare interface SubsectionProps {
	title: string;
	link: string;
}
