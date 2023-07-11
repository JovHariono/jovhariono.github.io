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
      {/* <h3 className='textPartner'> { props.judul } </h3> */}
      <Image className='imagePartner' src={ props.gambar } alt='unknown' />
    </div>
  );
};

export default Partner;
