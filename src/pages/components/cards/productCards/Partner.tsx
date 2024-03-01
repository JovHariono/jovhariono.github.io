import { StaticImageData } from 'next/image';
import Image from 'next/image';
import * as React from 'react';

interface IPartnerProps {
  judul: string;
  gambar: StaticImageData
}

const Partner: React.FunctionComponent<IPartnerProps> = (props) => {
  return (
    <div className='containerPartner'>
      <Image className='imagePartner' src={ props.gambar } alt='Sounds of Downtown - sod' />
    </div>
  );
};

export default Partner;
