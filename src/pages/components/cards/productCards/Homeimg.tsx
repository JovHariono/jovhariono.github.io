import { StaticImageData } from 'next/image';
import Image from 'next/image';
import * as React from 'react';
import Link from 'next/link';

interface IHomeimgProps {
    url: string;
    gambar: StaticImageData;
}

const Homeimg: React.FunctionComponent<IHomeimgProps> = (props) => {
  return (
    <Link className='gambarHome' href={ props.url }>
        <Image className='imgHome' src={props.gambar} alt='unknown' />
    </Link>
  );
};

export default Homeimg;
