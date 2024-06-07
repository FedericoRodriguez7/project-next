

import React from 'react';

export interface Program {
  id: string;
  name: string;
  foto: string;
  tecnologia: string;
  images: string;
}
interface Props {
  programs: Program[];
}

export const InvitadosGrid = ( { programs }: Props ) => {

  return (
    <ul>
      {programs.map(program => (
        <li key={program.id}>
          <h2>{program.name}</h2>
          <img src={program.foto} alt={`${program.name}'s foto`} width={100} />
          <p>Technology: {program.tecnologia}</p>
          <img src={program.images} alt={`${program.name}'s images`} width={100} />
        </li>
      ))}
    </ul>
  );
}



    
