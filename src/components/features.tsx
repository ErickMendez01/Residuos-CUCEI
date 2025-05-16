"use client";
import { Card } from "@/components/ui/card";
import { FaUserMd } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiShieldCheckLine } from "react-icons/ri";

const Features = () => {
  return (
    <div id="funcionalidades" className="px-6 lg:px-20 py-4 ">
      <div className="max-w-4xl mx-auto">
        <div className="md:w-2/3 lg:w-1/2 mx-auto text-center">
          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Funcionalidades de Residuos CUCEI
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Plataforma diseñada para la evaluación y clasificación de residuos peligrosos, con el objetivo 
            de facilitar la gestión y el manejo adecuado de estos materiales. A través de un árbol de decisión
            inteligente, la plataforma permite a los usuarios ingresar datos específicos sobre los residuos, 
            generando una clasificación automatizada y brindando alertas reactivas basadas en los resultados obtenidos. 
            Esta herramienta es especialmente útil para universidades que buscan cumplir con normativas 
            ambientales y garantizar la seguridad en el manejo de residuos peligrosos.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaUserMd className="w-12 h-12 text-gray-800 dark:text-white mx-auto" />,
              title: "Administración de Residuos",
              description: "Ingresa los datos indicados en el formulario y realiza una gestión de manera rápida y sencilla de múltiples registros.",
            },
            {
              icon: <GiArtificialIntelligence className="w-12 h-12 text-gray-800 dark:text-white mx-auto" />,
              title: "Clasificación Automática",
              description: "Evalúa y clasifica automáticamente a los residuos utilizando un árbol de decisión inteligente.",
            },
            {
              icon: <AiOutlineBarChart className="w-12 h-12 text-gray-800 dark:text-white mx-auto" />,
              title: "Alertas Reactivas",
              description: "Genera alertas reactivas con el resultado de la evaluación.",
            },
            {
              icon: <RiShieldCheckLine className="w-12 h-12 text-gray-800 dark:text-white mx-auto" />,
              title: "Recomendación Sustentabilidad",
              description: "Revisa nuestras recomendaciones sobre artículos y cursos relacionados con reciclaje y sustentabilidad.",
            },
          ].map(({ icon, title, description }, i) => (
            <Card
              key={i}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl transition hover:shadow-2xl dark:shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:scale-[1.02]"
            >
              <div className="space-y-4 ">
                <div className="group-hover:text-primary">
                {icon}
                </div>
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white text-center group-hover:text-primary transition">
                  {title}
                </h5>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
