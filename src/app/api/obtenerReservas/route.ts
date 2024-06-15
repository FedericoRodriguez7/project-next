import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json({ ok: false, message: 'Falta userId' }, { status: 400 });
    }

    const reservas = await prisma.reserva.findMany({
      where: { userId },
    });

    return NextResponse.json({ ok: true, reservas });
  } catch (error) {
    console.error('Error al obtener las reservas:', error);
    return NextResponse.json({ ok: false, message: 'No se pudieron obtener las reservas' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
