"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import DispositiveDisplayContent from "./DispositiveDisplayContent";
import ComponentesDisplayContent from "./components-material/ComponentsDisplayContent";

export default function WastesDisplayContent() {
  const [currentTab, setCurrentTab] = useState("Dispositivos");
  const tabs = ["Dispositivos", "Componentes"];

  const renderTabContent = () => {
    switch (currentTab) {
      case "Dispositivos":
        return <DispositiveDisplayContent />;
        {
          /*case "Componentes":
        return <ComponentesDisplayContent /> */
        }
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto w-full pb-8 pt-2">
      <div className="grid max-h-[70vh] gap-4 overflow-auto pb-4">
        <div className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full space-x-2">
            {tabs.map((tab, index) => (
              <div  key={`${tab}-${index}`} className="px-2">
                <Button
                  className="bg-black text-white dark:bg-white dark:text-black font-bold border-black"
                  onClick={() => setCurrentTab(tab)}
                  type="button"
                >
                  {tab}
                </Button>
              </div>
            ))}
          </div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
