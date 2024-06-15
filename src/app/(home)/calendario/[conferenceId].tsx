// pages/reservar/[conferenceId].tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Reservar() {
  const router = useRouter();
  const { conferenceId } = router.query;
  const userId = '12345'; // Obtener de la sesión o del contexto de la aplicación

  useEffect(() => {
    if (conferenceId) {
      confirmarReserva(userId, Number(conferenceId));
    }
  }, [conferenceId]);

  const confirmarReserva = async (userId: string, conferenceId: number) => {
    try {
      const response = await fetch('/api/reserva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, conferenceId }),
      });

      const result = await response.json();
      if (result.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Reservado',
          text: 'Tu reserva ha sido confirmada.',
        }).then(() => {
          router.push('/'); // Redirigir a la página principal o a donde desees
        });
      } else {
        throw new Error(result.message || 'Error al confirmar la reserva');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error. Inténtalo de nuevo.',
      }).then(() => {
        router.push('/'); // Redirigir a la página principal o a donde desees
      });
    }
  };

  return <div>Procesando tu reserva...</div>;
}
