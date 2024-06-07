'use client'

import Image from 'next/image';
import Link from 'next/link';

import { Programador } from '@/interfaces/programador.interface';
import { useState } from 'react';

interface Props {
    programador: Programador
}

export const InvitadosGridItems = ( { programador }: Props ) => {
   

    return (
        <div>
            <div>
                <Image
                src={programador.foto}
                alt={programador.name}
                className="w-full object-cover rounded"
                width={ 500 }
                height={ 500 }

                
                >


                </Image>
            </div>
        </div>
    )



}