
import MyDetails from "@/components/shared/MyDetails";
import Projects from "@/components/shared/Projects";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center space-y-56 md:space-y-20">
			<Projects/>
			<MyDetails/>
		</div>
	);
}
