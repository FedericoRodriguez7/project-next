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

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]


   
  export async function ProfileCard() {

    const page = 1;

    const { programs, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });

    console.log(programs);
    
    
    
    return (
      <>
    {/*   <div>
        <h1>Programadores invitados</h1>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 ">
        <div className="rounded-md overflow-hidden fade-in">
          {programs.map(program => (
            <div  key={program.id}>

              <img src={program.images} alt={`${program.name}'s images`}  width={500} height={500} className="w-full object-cover rounded" />
              <h2>{program.name}</h2>
              <p>Technology: {program.tecnologia}</p>
            </div>
          ))}
        </div>
</div> */}

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