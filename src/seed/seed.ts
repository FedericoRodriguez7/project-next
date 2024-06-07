import bcryptjs from 'bcryptjs';

interface SeedUser {
    email: string;
    password: string;
    name: string;
    role: 'admin'|'user'
  }

  interface SeedProgramadores {
    name: string;
    foto: string;
    tecnologia: 'Frontend' | 'Backend' 
  }

  interface SeedData {
    users: SeedUser[];
    programadores: SeedProgramadores[];
  }



  export const initialData: SeedData = {

    users: [
      {
        email: 'tafedericoemanuel@gmail.com',
        name: 'Federico Rodriguez',
        password: bcryptjs.hashSync('123456'),
        role: 'admin'
      },
      {
        email: 'federicoemanuel2020@hotmail.com',
        name: 'Emanuel Carpio',
        password: bcryptjs.hashSync('123456'),
        role: 'user'
      },
  
  
    ],

    programadores: [
      {
        name: 'Joel Miller',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIfFhUryl-lI48rpQL1E_uqphY94NdvXAwQ&s',
        tecnologia: 'Frontend'
      },
      {
        name: 'Josefina Flores',
        foto: 'https://docs.material-tailwind.com/img/team-3.jpg',
        tecnologia: 'Frontend'
      },
      {
        name: 'John DOE',
        foto: 'https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4=',
        tecnologia: 'Backend'
      },
      {
        name: 'Enrique Jey',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&s',
        tecnologia: 'Backend'
      },
      {
        name: 'Jouline Grand',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCdPHgK4ZaypnoGaHe5wXYaBIsQEmLTZ5hg&s',
        tecnologia: 'Backend'
      },
      {
        name: 'Jackie Love',
        foto: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        tecnologia: 'Frontend'
      },
    ]
}