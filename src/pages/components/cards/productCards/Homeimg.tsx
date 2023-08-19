import { StaticImageData } from 'next/image';
import Image from 'next/image';
import * as React from 'react';
import Link from 'next/link';

interface IHomeimgProps {
    link: string;
    gambar: StaticImageData;
}

const Homeimg: React.FunctionComponent<IHomeimgProps> = (props) => {
  return (
    <Link className='gambarHome' href={props.link ?? ''}>
        <Image className='imgHome' src={props.gambar} alt='Sounds of Downtown - sod' />
    </Link>
  );
};

export default Homeimg;
