import CustomButton from "../CustomButton";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36 max-h-[920px]">
        <h1 className="hero__title">Feel the Freedom, Start Your Journey!</h1>
        <p className="hero__subtitle text-gray-200">
          Ready for an unforgettable journey with golden standard service?
          Elevate your car rental experience with our Premium Options. Enjoy a
          perfect blend of comfort, safety, and luxury, making every moment
          special. Choose our Golden Standard for an exceptional trip.
        </p>

        <CustomButton title="Discover Cars" designs="mt-10" />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          whileInView={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
          src="./../../../public/hero.png"
          alt=""
          width={700}
          className="img-fluid object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
