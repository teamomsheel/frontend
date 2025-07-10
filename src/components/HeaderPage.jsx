
import { Carousel, Typography } from "@material-tailwind/react";
import { images } from "../assets/assests";
import { motion } from "framer-motion";
const HeaderPage = () => {
  return (
    <motion.div
     initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}>
      <Carousel 
        className=" h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] w-full" 
        transition={{ duration: 0.5 }} 
        autoplay 
        loop
      >
        {/* Slide 1 */}
        <div className="relative h-full w-full">
          <img
            src={images.omsheelImg}
            alt="omsheel"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 grid place-items-center bg-black/15">
            <div className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/5 text-center px-4">
              <Typography 
                className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" 
                variant="h1" 
                color="white"
              >
                omsheel Group
              </Typography>
              <Typography 
                variant="lead" 
                 
                className="mb-8 sm:mb-10 md:mb-12 opacity-80  sm:text-base md:text-lg lg:text-xl leading-relaxed text-blue-950 font-semibold"
              >
                Omsheel is a group of companies with diverse interests in food processing, logistics, infrastructure, and exports. We are passionate about preserving traditional methods while also embracing innovation to provide the best products and services to our customers. Our commitment to purity and quality is reflected in every bite.
              </Typography>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-full w-full">
          <img
            src={images.spicesImg}
            alt="spices"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 grid place-items-center  bg-black/35 ">
            <div className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/5 text-center px-4">
              <Typography 
                className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" 
                variant="h1" 
                color="white"
              >
                Dadi
              </Typography>
              <Typography 
                variant="lead" 
                color="white" 
                className="mb-8 sm:mb-10 md:mb-12 opacity-80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
              >
                Dadi Food Products Private Limited, a flagship initiative of the Omsheel Group, is dedicated to preserving the rich legacy of traditional Indian food while embracing the innovations of modern food technology. We specialize in sourcing high-quality raw materials, processing them with a blend of age-old culinary wisdom and advanced techniques, and packaging them to ensure maximum freshness, flavor, and shelf-life. Our diverse range of food products reflects a commitment to purity, authenticity, and quality. At Dadi Food Products Private Limited, we don't just produce food — we deliver trust, tradition, and taste to every household.
              </Typography>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-full w-full">
          <img
            src={images.FarmingImg}
            alt="farming"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 grid place-items-center  bg-black/35">
            <div className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/5 text-center px-4">
              <Typography 
                className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" 
                variant="h1" 
                color="white"
              >
                Farming
              </Typography>
              <Typography 
                variant="lead" 
                color="white" 
                className="mb-8 sm:mb-10 md:mb-12 opacity-80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
              >
              We are committed to transforming agriculture through sustainable and innovative practices. By integrating traditional farming wisdom with modern technologies like precision agriculture, organic methods, and climate-resilient techniques, we aim to boost productivity while protecting the environment. Our work involves closely engaging with farmers to improve crop yields, promote soil health, and encourage eco-friendly cultivation. We offer training, access to quality inputs, and support in adopting advanced farming methods. In addition, we help farmers connect with markets to ensure fair pricing and consistent demand. Our initiatives are designed to strengthen rural economies, empower farming communities, and build a more resilient and efficient food supply system. Through this holistic approach, we strive to make agriculture more rewarding, inclusive, and future-ready.
              </Typography>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative h-full w-full">
          <img
            src={images.weddingImg}
            alt="wedding"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 grid place-items-center  bg-black/35 ">
            <div className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/5 text-center px-4">
              <Typography 
                className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" 
                variant="h1" 
                color="white"
              >
                omsheel Group
              </Typography>
              <Typography 
                variant="lead" 
                color="white" 
                className="mb-8 sm:mb-10 md:mb-12 opacity-80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
              >
              We offer unique hospitality experiences centered around nature, specializing in organizing events and functions that create lasting memories. Whether it's a wedding, corporate retreat, or cultural gathering, our venues are thoughtfully designed to blend with the natural environment, offering a serene and picturesque setting. Guests can enjoy open-air celebrations surrounded by greenery, fresh air, and scenic landscapes. Every event is customized with attention to detail, from traditional decor and local cuisine to eco-friendly practices. Our goal is to provide a peaceful, immersive atmosphere where people can connect, celebrate, and unwind in harmony with nature.
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
        
    </motion.div>
  );
};

export default HeaderPage;