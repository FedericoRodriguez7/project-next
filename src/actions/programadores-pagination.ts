"use server";

import prisma from "@/lib/prisma";
import { Tecnologias } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  tecnologia?: Tecnologias;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  tecnologia,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 1. Obtener los productos
    const programs = await prisma.programadores.findMany({
      take: take,
      skip: (page - 1) * take,
      
      //! Por género
      where: {
        tecnologia: tecnologia,
      },
    });

    // 2. Obtener el total de páginas
    // todo:
    const totalCount = await prisma.programadores.count({
      where: {
        tecnologia: tecnologia,
      },
    });
    
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      programs: programs.map((programador) => ({
        ...programador,
        images: programador.foto,
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};
