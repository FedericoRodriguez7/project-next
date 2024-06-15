// app/api/reserva-conferencia/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { userId, conferenciaId } = await request.json();

    // Verificar si la conferencia está disponible para reservar
    const conferencia = await prisma.conferencia.findUnique({
      where: { id: conferenciaId },
    });

    if (!conferencia) {
      return NextResponse.json({ ok: false, message: 'Conferencia no encontrada' }, { status: 404 });
    }

    // Verificar si la conferencia ya está reservada
    if (conferencia.reservado) {
      return NextResponse.json({ ok: false, message: 'Esta conferencia ya ha sido reservada' }, { status: 400 });
    }

    // Marcar la conferencia como reservada
    await prisma.conferencia.update({
      where: { id: conferenciaId },
      data: {
        reservado: true,
      },
    });

    // No es necesario asociar la conferencia reservada al usuario, según tu requerimiento

    return NextResponse.json({ ok: true, message: 'Conferencia reservada exitosamente' });
  } catch (error) {
    console.error('Error al reservar la conferencia:', error);
    return NextResponse.json({ ok: false, message: 'No se pudo reservar la conferencia' }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Asegúrate de cerrar la conexión con Prisma al finalizar
  }
}
