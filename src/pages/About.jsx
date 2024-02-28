import react from "react"
import bg from "../assets/bg.jpeg"
const About = () =>{
	return(
		<section  className={`h-full flex flex-col  items-center bg-no-repeat px-5 py-10  w-full justify-start`}>
		<div className="flex flex-col">
		 <h1 className="xs:text-6xl text-red-500 font-semibold uppercase text-center w-full  pb-10">about us</h1>
		 <p className="break-words text-black  max-xs:text-sm md:w-[700px] text-base sanchez  p-2  text-center">
		 Welcome to Jewels, where every piece tells a story of elegance, sophistication, and timeless beauty. Nestled in the heart of craftsmanship, we curate a mesmerizing collection of jewelry that captures the essence of your unique style. From dazzling diamonds to lustrous pearls, each creation is meticulously crafted to adorn your journey with unparalleled grace. Join us as we embark on a voyage through the world of exquisite craftsmanship and unparalleled luxury. Discover the allure of Jewels – where every piece is a masterpiece waiting to be cherished.
		 </p>
		</div>
		 <div className="flex flex-col  items-center text-center mt-5">
		 <h2 className="heading-about-us"> 
		 our mission
		 </h2>
		 <p className="para-about-us max-xs:w-full  xs:w-[60%]">Beyond the creation of exquisite jewelry, we strive to foster meaningful connections, ignite moments of joy and wonder, and empower our clients to express themselves boldly and authentically. We believe that true beauty lies not only in the brilliance of a diamond or the luster of a pearl but in the stories we tell and the memories we create.
		 </p>
		 <h2 className="heading-about-us">Our Commitment</h2>
		 <p className="para-about-us max-xs:w-full  xs:w-[60%]">
		 	As we continue to evolve and grow, our commitment to excellence remains unwavering. We invite you to join us on this extraordinary journey—to experience the unparalleled craftsmanship, timeless elegance, and enduring allure of Radiant Jewels.
		 </p>
		 </div>
		</section>
		)
}
export default About;
