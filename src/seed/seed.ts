import bcryptjs from "bcryptjs";

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
}

interface SeedProgramadores {
  name: string;
  foto: string;
  tecnologia: "Frontend" | "Backend";
}

interface SeedFotosConferencia {
  name: string;
  foto: string;
}

interface SeedData {
  users: SeedUser[];
  programadores: SeedProgramadores[];
  fotosConferencia: SeedFotosConferencia[];
}

export const initialData: SeedData = {
  users: [
    {
      email: "tafedericoemanuel@gmail.com",
      name: "Federico Rodriguez",
      password: bcryptjs.hashSync("123456"),
      role: "admin",
    },
    {
      email: "federicoemanuel2020@hotmail.com",
      name: "Emanuel Carpio",
      password: bcryptjs.hashSync("123456"),
      role: "user",
    },
  ],

  programadores: [
    {
      name: "Joel Miller",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIfFhUryl-lI48rpQL1E_uqphY94NdvXAwQ&s",
      tecnologia: "Frontend",
    },
    {
      name: "Josefina Flores",
      foto: "https://docs.material-tailwind.com/img/team-3.jpg",
      tecnologia: "Frontend",
    },
    {
      name: "John DOE",
      foto: "https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4=",
      tecnologia: "Backend",
    },
    {
      name: "Enrique Jey",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&s",
      tecnologia: "Backend",
    },
    {
      name: "Jouline Grand",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCdPHgK4ZaypnoGaHe5wXYaBIsQEmLTZ5hg&s",
      tecnologia: "Backend",
    },
    {
      name: "Jackie Love",
      foto: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      tecnologia: "Frontend",
    },
  ],

  fotosConferencia: [
    {
      name: "atril1",
      foto: "https://malba.s3.sa-east-1.amazonaws.com/wp-content/uploads/2023/03/MG_0012-1200x800.jpg",
    },
    {
      name: "malba",
      foto: "https://malba.s3.sa-east-1.amazonaws.com/wp-content/uploads/2022/09/MG_0146-1200x800.jpg",
    },
    {
      name: "dos",
      foto: "https://malba.s3.sa-east-1.amazonaws.com/wp-content/uploads/2019/03/inauguraci%C3%B3n-19-750x497.jpeg",
    },
    {
      name: "jovenes",
      foto: "https://i.blogs.es/d0eb5a/programadores-consejos/450_1000.jpg",
    },
    {
      name: "gran",
      foto: "https://shocklogic.com/wp-content/uploads/2020/11/34_ArtConference.jpg",
    },
    {
      name: "malba2",
      foto: "https://malba.s3.sa-east-1.amazonaws.com/wp-content/uploads/2022/09/MG_0125-1200x800.jpg",
    },
    {
      name: "mini",
      foto: "https://edteam-media.s3.amazonaws.com/web/modules/conferences/conference.webp",
    },
    {
      name: "mini",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GOHfWk7ldIZ1TjnQKCNBOD1wsCkNVmcEKQ&s",
    },
    {
      name: "mini",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTO77_JFyLs4trt7iIozm41EUsNipKrD-ghw&s",
    },
    {
      name: "mini",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMhbVRIzkiaX-zxvpj6vbKpDrEs8qOe0WUQ&s",
    },
    {
      name: "mini",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXqORcD-eF579A8Cugfd8FMvnP8IBxChOfA&s",
    },
    {
      name: "mini",
      foto: "https://static7.depositphotos.com/1000998/745/i/450/depositphotos_7451136-stock-photo-on-conference.jpg",
    },
  ],
};
