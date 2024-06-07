export const revalidate = 60;

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { getPaginatedProductsWithImages } from "@/actions/programadores-pagination";

interface Props {
  searchParams: {
    page?: string; 
  }
}



   
  export async function ProfileCard() {

    const page = 1;

    const { programs, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });

    console.log(programs);
    
    
    
    return (
      <>
  
<div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">INVITADOS PROFESIONALES</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {programs.map((program) => (
              <div key={program.id} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={program.images}
                    alt="foto"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="text-base  text-gray-900">{program.name}</p>
                <p className="text-base font-semibold text-gray-900">{program.tecnologia}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


        


      </>
    );
    
  }

  export async function getServerSideProps(context: { query: { page: string; }; }) {
    const page = context.query.page ? parseInt(context.query.page, 10) : 1;
    const data = await getPaginatedProductsWithImages({ page });
  
    return {
      props: {
        programs: data.programs,
        currentPage: data.currentPage,
        totalPages: data.totalPages,
      },
    };
  }