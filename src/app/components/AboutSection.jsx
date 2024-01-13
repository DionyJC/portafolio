"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TatButton";


const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Java</li>
        <li>Mongodb</li>
      </ul>
    ),
  },
  {
    title: "Educación",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Tecnólogo en Análisis y Desarrollo de software .(2022 - 2023) SENA</li>
        <li>Técnico en Programación de Software Técnico SENA</li>
        <li>Diplomado en Programación de Software Universidad Tecnológica de Pereira</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/oficina.jpeg" width={400} height={400} alt="" className=" rounded-full"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-[#ED7D31]">Sobre Mí</h2>
          <p className="text-base lg:text-lg">
          Soy un apasionado programador y desarrollador de software en busca de
          oportunidades para desarrollar mis habilidades y enfrentar desafíos en
          el emocionante campo de la programación. Aunque soy relativamente
          nuevo en la industria, estoy comprometido con el aprendizaje constante
          y la mejora de mis habilidades. Mi entusiasmo y dedicación me impulsan
          a superar obstáculos y alcanzar mis metas profesionales. Estoy
          emocionado por las oportunidades que el mundo de la programación tiene
          para ofrecer y estoy listo para enfrentar los desafíos que se
          presenten en mi camino hacia una exitosa carrera en este campo.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
          
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
