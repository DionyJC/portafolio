"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className=" col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-5xl font-extrabold">
            <span className="text-[#ED7D31]">Hola</span>, soy <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Dionisio Caro",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Programador de software",
                1000,
                "Amante de la tecnología",
                1000,
               
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-[#ADB7BE] text-lg lg:text-2xl sm:text-lg mb-6 font-bold">
             Programando el futuro,{" "}
            <span className="text-[#ED7D31] font-bold">un código a la vez</span>
          </p>
        </div>

        <div className=" col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/perfil3.png"
              alt="Dionisio Caro"
              width={450}
              height={450}
              className="  absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
