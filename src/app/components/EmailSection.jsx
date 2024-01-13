"use client"
import { useState } from "react";

import GithubIcon from "../../../public/github.png";
import LinkedinIcon from "../../../public/linkedin.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };
  
      const response = await fetch(endpoint, options);
      const resData = await response.json();
  
      if (response.status === 200) {
        console.log("Mensaje enviado.");
        setEmailSubmitted(true);
      }
    };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      
      <div className=" border border-spacing-7 p-5 rounded-lg">
        <h5 className="text-xl font-bold text-white my-2">
          Contáctame!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada está siempre
          abierta y disponible. Si tienes alguna pregunta o simplemente quieres saluda te espero!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/DionyJC"}>
            <Image
              src={GithubIcon}
              width={40}
              height={40}
              alt="GitHub"
              className="hover:scale-95 transition-all duration-300"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/dionisio-caro/"}>
            <Image
              src={LinkedinIcon}
              width={40}
              height={40}
              alt="Linkedin"
              className="hover:scale-95 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Tu Correo
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="tucorreo@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Asunto
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Escribe el asunto"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Deja tu mensaje aquí!!"
            />
          </div>
          <button
            type="submit"
            className="bg-[#ED7D31] hover:bg-orange-600 text-white font-bold py-2.5 px-5 rounded-lg w-full"
          >
            Enviar Mensaje
          </button>
          {
            emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                    Correo enviado con éxito
                </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
