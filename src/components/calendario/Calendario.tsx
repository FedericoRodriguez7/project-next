'use client'

import { useState, useEffect } from 'react';
import { getCalendario } from '@/actions/getCalendario';
import { Conferencia } from '@prisma/client';
import { CheckIcon } from '@heroicons/react/20/solid';
import Swal from 'sweetalert2';

const includedFeatures = [
  'Acceso a todos los repositorios',
  'Charlas exclusivas',
  'Entrada prioritaria',
  'Regalos oficiales',
];

const CalendarioComponent = () => {
  const [conferencias, setConferencias] = useState<Conferencia[]>([]);

  useEffect(() => {
    async function fetchConferencias() {
      try {
        const { fotos } = await getCalendario({ page: 1 });
        setConferencias(fotos);
      } catch (error) {
        console.error('Error al obtener las conferencias:', error);
      }
    }

    fetchConferencias();
  }, []);

  const handleReservaClick = async (id: number) => {
    const conferenciaSeleccionada = conferencias.find(conferencia => conferencia.id === id);
    if (!conferenciaSeleccionada) return;

    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres reservar la conferencia "${conferenciaSeleccionada.titulo}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, reservar!',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch('/api/reserva', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ conferenciaId: id }),
        });
        
        const data = await response.json();

        if (data.ok) {
          Swal.fire('Reservado!', 'Tu conferencia ha sido reservada exitosamente.', 'success');
          const conferenciasActualizadas = conferencias.map(conferencia => {
            if (conferencia.id === id) {
              return { ...conferencia, reservado: true }; // Marcar como reservado localmente
            }
            return conferencia;
          });
          setConferencias(conferenciasActualizadas);
        } else {
          Swal.fire('Error', data.message, 'error');
        }
      }
    });
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Calendario de fechas disponibles</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Reserva tu entrada antes de que se acaben. Posibilidad de seguir agregando más fechas.
          </p>
        </div>
        {conferencias.map((conferencia) => (
          <div key={conferencia.id} className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">{conferencia.titulo}</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">{conferencia.texto}</p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">¿Qué incluye?</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-6 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Fecha de la conferencia</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">{new Date(conferencia.fecha).toLocaleDateString()}</span>
                  </p>
                  <button
                    className={`mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${conferencia.reservado ? 'cursor-default bg-gray-400' : ''}`}
                    onClick={() => handleReservaClick(conferencia.id)}
                    disabled={conferencia.reservado}
                  >
                    {conferencia.reservado ? 'Ya reservaste!' : 'RESERVAR'}
                  </button>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    *Para cancelar, contacta al soporte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarioComponent;
