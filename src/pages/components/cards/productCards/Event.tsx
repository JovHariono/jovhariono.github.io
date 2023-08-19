import { StaticImageData } from 'next/image';
import Image from 'next/image';
import * as React from 'react';

interface IEventProps {
    gambar: StaticImageData
}

const Event: React.FunctionComponent<IEventProps> = (props) => {
  return (
    <div className='containerEvent'>
        <Image className='imgEvent' src={props.gambar} alt='Sounds of Downtown - sod'/>
    </div>
  );
};

export default Event;
