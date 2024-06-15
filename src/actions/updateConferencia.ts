// src/actions/reservarConferencia.ts

export async function reservarConferencia(userId: string, conferenciaId: number) {
  console.log('Iniciando reserva de conferencia:', { userId, conferenciaId });
  
  const response = await fetch('/api/reserva', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, conferenciaId }),
  });

  const data = await response.json();
  console.log('Respuesta de la API:', data);
  return data;
}
