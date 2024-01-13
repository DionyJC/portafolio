import Link from "next/link";
import Image from "next/image";




const ProjectCard = () => {
  return (
    <div className=" md:flex flex-wrap justify-center items-center">
      <Link href={"https://next-menu-mocha.vercel.app/"}>
        <Image
          src={"/1.png"}
          width={400}
          height={400}
          alt="Imagen"
          className=" my-3 rounded-md md:mx-4 hover:scale-95 transition-all duration-300"
        />
      </Link>
      <Link href={"https://control-gastos-red.vercel.app/"}>
        <Image
          src={"/2.png"}
          width={400}
          height={400}
          alt="Imagen"
          className=" my-3 rounded-md md:mx-4 hover:scale-95 transition-all duration-300"
        />
      </Link>
      <Link href={"https://mern-crud-frontend-sigma.vercel.app/"}>
        <Image
          src={"/3.png"}
          width={400}
          height={400}
          alt="Imagen"
          className=" my-3 rounded-md md:mx-4 hover:scale-95 transition-all duration-300"
        />
      </Link>
 
    
    </div>
  );
};

export default ProjectCard;
