import { StaticImageData } from 'next/image';
import Image from 'next/image';
import * as React from 'react';
import Link from 'next/link';

interface IHomeimgProps {
    gambar: StaticImageData
}

const Homeimg: React.FunctionComponent<IHomeimgProps> = (props) => {
  return (
    <Link className='gambarHome' href={'/'}>
        <Image className='imgHome' src={props.gambar} alt='unknown' />
    </Link>
  );
};

export default Homeimg;
