"use client";

import { Button} from "@/components/ui/button";
import LoginForm from "./login-Form";
import { useState } from "react";


const Header = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <div>
      <LoginForm isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-500 dark:from-blue-900"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-600 to-sky-500 dark:to-indigo-900"></div>
        </div>

        <div className="relative pt-36 px-4 sm:px-6 lg:px-8">
          <div className="lg:w-2/3 mx-auto text-center">
            <h1 className="text-gray-900 dark:text-white font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
              Residuos <br />CUCEI
            </h1>
            <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Registra, administra, clasifica y aprende sobre 
              residuos  y temas relacionados a la sustentabilidad
              en la plataforma de residuos <b>CUCEI</b>
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <div className="flex flex-col gap-y-4">
                <Button
                  className="text-white font-bold bg-black dark:text-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200"
                  variant="flat"
                  radius="lg"
                  onClick={() => setLoginOpen(true)}
                >
                  Inicia sesión ahora!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;