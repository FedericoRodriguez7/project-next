import { VideoCameraIcon, AcademicCapIcon, FingerPrintIcon, CakeIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Pregunta!',
    description:
      '¡No hay límites en nuestras sesiones de preguntas! Desde consejos de expertos hasta debates candentes, ¡pregunta todo lo que desees! Nuestros oradores están aquí para responder y enriquecer tu experiencia.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Certificado de participación',
    description:
      'Obten tu certificado por asistir a las charlas programadas',
    icon: AcademicCapIcon,
  },
  {
    name: 'Buffet de comida',
    description:
      'Servicio de comida gratuita para todos nuestros invitados',
    icon: CakeIcon,
  },
  {
    name: 'Charlas grabadas',
    description:
      'No te preocupes, nosotros grabamos las charlas por si te perdiste algo',
    icon: VideoCameraIcon,
  },
]

export default function HomePage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Lanzamiento mundial</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Todo lo que tenes que saber
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Descubre un mundo de posibilidades en nuestra conferencia. Desde aprender las últimas técnicas de desarrollo hasta conectar con profesionales de todo el mundo. ¡Explora, aprende y colabora para impulsar tu carrera hacia nuevas alturas!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}