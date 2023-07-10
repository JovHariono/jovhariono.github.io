import { StaticImageData } from "next/image";

export interface BrandType {
  image: StaticImageData;
  judul: string;
  imagePopup: StaticImageData[];
  judulPopUp: string;
  deskripsiPopUp: string;
}
