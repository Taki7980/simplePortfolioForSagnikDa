import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
const Hero = () => {
	return (
		<div className="md:h-[80vh] h-[100vh] bg-[#003285] flex flex-col items-center justify-center self-center gap-10 md:pb-20 pb-0 px-10 md:px-0">
			<Image
				className="size-36 rounded-full"
				height={80}
				width={100}
				src={"/images/profile.jpg"}
				alt="profile image"
			/>
			<div className=" flex flex-col items-center justify-center gap-3 space-y-4 max-w-5xl text-center">
				<h1 className={`text-3xl md:text-7xl text-white font-bold`}>
					Sagnik Majumdar
				</h1>
				<p className="text-white font-extralight">
					Lionel Andrés Leo Messi is an Argentine professional
					footballer who plays as a forward for and captains both
					Major League Soccer club Inter Miami and the Argentina
					national team.
				</p>
				<div className="socallinks pb-10">
					<Link
						href={"https://www.linkedin.com/in/sagnik-majumder11/"}
					>
						<FaLinkedin size={35} className="text-white bg-black" />
					</Link>
					
				</div>
			</div>
		</div>
	);
};

export default Hero;
