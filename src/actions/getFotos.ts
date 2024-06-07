"use server";

import prisma from "@/lib/prisma";

import { Tecnologias } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  tecnologia?: Tecnologias;
}

export const getFotosConferencia = async ({
  page = 1,
  take = 12,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const fotos = await prisma.fotosConferencia.findMany({
        take:take,
        skip: (page - 1) * take,
    });

    return {
        fotos: fotos.map((foto) => ({
            ...foto,
            Image: foto.foto
        }))
    }
    
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
    
  }
}

