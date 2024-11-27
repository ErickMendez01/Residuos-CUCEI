import StartButton from "@/components/ui/StartButton";
import Card from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <h1>Check Task</h1>
        </div>
        <h2>
          Planifica tu día y proyectos profesionales <br /> con "Check Task",
          nuestra plataforma Open-Source <br /> de organización de tareas.
        </h2>
        <StartButton />
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <Card
          iconSrc="/imgs/icons/calendar-dates-svgrepo-com.svg"
          title="Gestión de Tareas"
          content={
            <ul>
              <li>Ordena y prioriza el trabajo de manera eficiente.</li>
              <li>Arrastra y suelta fácilmente los elementos.</li>
              <li>Crea múltiples listas de tareas.</li>
            </ul>
          }
        />
        <Card
          iconSrc="/imgs/icons/calendar-dates-svgrepo-com.svg"
          title="Fechas y Recordatorios"
          content={
            <ul>
              <li>Establece fechas de entrega.</li>
              <li>Configura recordatorios y notificaciones.</li>
            </ul>
          }
        />
        <Card
          iconSrc="/imgs/icons/organization-svgrepo-com.svg"
          title="Organización y Prioridad"
          content={
            <ul>
              <li>Muestra una lista general de tareas por hacer.</li>
              <li>
                Visualiza tareas importantes según etiquetas y fechas límite.
              </li>
              <li>
                Asigna colores a cada etiqueta para una fácil identificación.
              </li>
            </ul>
          }
        />
        <Card
          iconSrc="/imgs/icons/share-svgrepo-com.svg"
          title="Colaboración"
          content={
            <ul>
              <li>Comparte tareas y listas con otros usuarios.</li>
              <li>
                Asigna tareas a diferentes usuarios en listas compartidas.
              </li>
              <li>
                Próximamente: Crea grupos de trabajo y asigna tareas dentro del
                grupo.
              </li>
            </ul>
          }
        />
        <Card
          iconSrc="/imgs/icons/search-sort-svgrepo-com.svg"
          title="Búsqueda y Filtros:"
          content={
            <ul>
              <li>Realiza búsquedas rápidas y eficientes de tareas.</li>
              <li>
                Filtra tareas por criterios como fecha, prioridad y etiquetas.
              </li>
            </ul>
          }
        />
        <Card
          iconSrc="/imgs/icons/customize-svgrepo-com.svg"
          title="Edición y Personalización"
          content={
            <ul>
              <li>Edita o elimina tareas según sea necesario.</li>
              <li>Personaliza etiquetas para seguimiento de prioridades.</li>
            </ul>
          }
        />
        <Card
          iconSrc="/imgs/icons/description-svgrepo-com.svg"
          title="Descripción Ampliada"
          content={
            <ul>
              <li>
                Agrega descripciones detalladas con información relevante y
                documentos adjuntos.
              </li>
            </ul>
          }
        />
        <Card
          iconSrc="/imgs/icons/integrations-svgrepo-com.svg"
          title="Integraciones"
          content={
            <ul>
              <li>Sincronización con aplicaciones de calendario.</li>
              <li>
                Integración con servicios de terceros como correos electrónicos.
              </li>
            </ul>
          }
        />
      </div>
    </div>
  );
}
