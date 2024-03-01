import { StaticImageData } from "next/image";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";

interface IBrandProps {
  gambar: StaticImageData;
  judul: string;
}

const Brand: React.FunctionComponent<IBrandProps> = (props) => {

  return (
    <div className="containerBrand">
      <Image className="imgBrand" src={props.gambar} alt="Sounds of Downtown - sod" />
      <h2 className="judulBrand"> {props.judul} </h2>
      <div className="seperatorBrand"></div>
    </div>
  );
};

export default Brand;
