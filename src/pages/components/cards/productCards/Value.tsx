import { IconProp, icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

interface IValueProps {
    gambar: IconProp;
    judul: string;
    text: string;
}

const Value: React.FunctionComponent<IValueProps> = (props) => {
  return (
    <div className='containerValue'>
        <div className='faValue'> <FontAwesomeIcon icon={props.gambar} /> </div>
        <div className="seperator"></div>
        <h3 className='judulValue'> {props.judul} </h3>
        <div className='textValue'> {props.text} </div>
    </div>
  );
};

export default Value;
