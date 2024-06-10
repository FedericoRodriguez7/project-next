import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Acceso a todos los repositorios',
  'Charlas exlusivas',
  'Entrada prioritaria',
  'Regalos oficiales',
  
]

const fechas = [
    {
        id: 1,
        titulo: "Sala Frontend y Backend",
        texto: "En la sala de conferencia de Frontend y Backend, se explorarán las últimas tecnologías y mejores prácticas en el desarrollo web, incluyendo la integración entre interfaces de usuario interactivas y servidores eficientes. Además, se ofrecerán demostraciones en vivo y sesiones de preguntas y respuestas con expertos del sector.",
        fecha: '12/5',
        
    },
    {
        id: 2,
        titulo: "Sala Backend",
        texto: "En la sala de conferencia de Backend, se discutirán las mejores prácticas y tecnologías actuales para el desarrollo de servidores robustos y escalables, así como la gestión de bases de datos y APIs. Habrá presentaciones sobre arquitectura de software y optimización del rendimiento del servidor.",
        fecha: '13/5',
    },
    {
        id: 3,
        titulo: "Sala Frontend",
        texto: "En la sala de conferencia de Frontend, se abordarán las tendencias más recientes en diseño y desarrollo de interfaces de usuario, incluyendo el uso de frameworks modernos y técnicas avanzadas de CSS. También se realizarán demostraciones prácticas y se discutirán estrategias para mejorar la experiencia del usuario.",
        fecha: '14/5',
    },
]

export default function CalendarioComponent() {
    return (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Calendario de fechas disponibles</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Reserva tu entrada antes de que se acaben. Posibilidad de seguir agregando mas fehcas.
              </p>
            </div>
            {fechas.map((foto) => (
              <div key={foto.id} className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">{foto.titulo}</h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">{foto.texto}</p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Que incluye?</h4>
                    <div className="h-px flex-auto bg-gray-100" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                  >
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-6 flex-none text-indigo-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">Para el dia</p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">{foto.fecha}</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">2024</span>
                      </p>
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        RESERVA
                      </a>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        *Para cancelar hablar con soporte.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}