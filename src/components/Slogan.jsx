import {motion} from "framer-motion";
const Slogan = ()=> {
 return(
<div className="mt-[50px]">
<motion.div
          whileInView={{ backgroundAttachment: "fixed" }}
          style={{ backgroundPosition: "30px" }}
          className="rounded-md min-h-[400px]  max-xs:bg-scroll max-xs:m-auto bg-[url('https://i.ibb.co/NxHbS4X/ad.png')] bg-no-repeat bg-contain  mt-[100px] relative min-w-[250px] sm:h-[600px] max-xs:w-[310px] max-xs:h-[400px]  xs:h-[500px] sm:w-[500px] xs:w-[400px] md:w-[600px] max-w-[600px] bg-gray-200"
        >
          <div className=" bg-gradient to-transparent min-h-full absolute top-0 left-0 w-full"></div>
          <h1 className="md:text-5xl xs:text-4xl max-xs:text-2xl  absolute md:top-[150px] top-10 belle text-white  left-10">
            "Your Style, Your Story”
          </h1>
          <p className="absolute bottom-0 md:bottom-[10px] text-white p-5 lato max-xs:text-sm h-fit w-full">
            - Express your unique journey with our customizable bracelets. Each
            piece is a canvas for your narrative, allowing you to showcase your
            individuality. Crafted with care, every bead reflects your passions
            and experiences. Wear your story proudly, making a statement
            wherever you go. With our bracelets, you don't just accessorize –
            you embody the essence of self-expression.
          </p>
        </motion.div>
</div>
)

}

export default Slogan