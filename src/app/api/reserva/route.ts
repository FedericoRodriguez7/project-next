import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { userId, conferenciaId } = await request.json();
    console.log('Datos recibidos en la API:', { userId, conferenciaId });

    // Verificar si la conferencia está disponible para reservar
    const conferencia = await prisma.conferencia.findUnique({
      where: { id: conferenciaId },
    });

    if (!conferencia) {
      return NextResponse.json({ ok: false, message: 'Conferencia no encontrada' }, { status: 404 });
    }

    if (conferencia.entradas <= 0) {
      return NextResponse.json({ ok: false, message: 'No hay entradas disponibles' }, { status: 400 });
    }

    // Verificar si el usuario ya reservó esta conferencia
    const reservaExistente = await prisma.reserva.findFirst({
      where: {
        userId,
        conferenciaId,
      },
    });

    if (reservaExistente) {
      return NextResponse.json({ ok: false, message: 'Ya has reservado esta conferencia' }, { status: 400 });
    }

    // Crear la reserva
    await prisma.reserva.create({
      data: {
        userId,
        conferenciaId,
      },
    });

    // Disminuir el número de entradas disponibles
    await prisma.conferencia.update({
      where: { id: conferenciaId },
      data: {
        entradas: {
          decrement: 1,
        },
      },
    });

    return NextResponse.json({ ok: true, message: 'Conferencia reservada exitosamente' });
  } catch (error) {
    console.error('Error al reservar la conferencia:', error);
    return NextResponse.json({ ok: false, message: 'No se pudo reservar la conferencia' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
