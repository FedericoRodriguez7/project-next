import Image from 'next/image';
import Link from 'next/link';


export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">

      <div className="text-center px-5 mx-5">
        <h2 className=' antialiased text-9xl'>Hooola</h2>
        <p className="font-semibold text-xl">Disculpe! Pagina en desarrollo</p>
        <p className="font-light">
          <span>Puedes regresar al </span>
          <Link
            href='/'
            className="font-normal hover:underline transition-all"
          >
            inicio
          </Link>
        </p>
      </div>



      <div className="px-5 mx-5">
        <Image
          src="/img/constructor.jpg"
          alt="Starman"
          className="p-5 sm:p-0"
          width={ 550 }
          height={ 550 }
        />

      </div>


    </div>
  );
};