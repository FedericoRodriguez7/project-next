"use server";

import prisma from "@/lib/prisma";

import { Conferencia } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  conferencia?: Conferencia;
}

export const getCalendario = async ({
  page = 1,
  take = 12,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const fotos = await prisma.conferencia.findMany({
        take:take,
        skip: (page - 1) * take,
    });

    return {
        fotos: fotos.map((foto) => ({
            ...foto,
            titulo: foto.titulo,
            texto: foto.texto,
            fecha: foto.fecha
        }))
    }
    
  } catch (error) {
    throw new Error("No se pudo cargar las conferencia");
    
  }
}

