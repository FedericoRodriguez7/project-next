import prisma from '../lib/prisma';
import { initialData } from './seed';

async function main() {

    // 1. Borrar registros previos
    // await Promise.all( [
  

  
    await prisma.user.deleteMany();
 
    await prisma.programadores.deleteMany();

    await prisma.fotosConferencia.deleteMany()

    await prisma.conferencia.deleteMany();
   
    // ]);
    
    const { programadores, users, fotosConferencia, conferencia } = initialData;
  
  
    await prisma.user.createMany({
      data: users
    });

    await prisma.programadores.createMany({
        data: programadores
      });

      await prisma.fotosConferencia.createMany({
        data: fotosConferencia
      });
  
      await prisma.conferencia.createMany({
        data: conferencia
      });
  
  
    
 
  
  
  
  
  
  
    console.log( 'Seed ejecutado correctamente' );
  }
  
  
  
  
  
  
  
  
  
  ( () => {
  
    if ( process.env.NODE_ENV === 'production' ) return;
  
  
    main();
  } )();