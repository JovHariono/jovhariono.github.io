import { StaticImageData } from "next/image";

export interface BrandType {
  image: StaticImageData;
  judul: string;
  imagePopup: StaticImageData[];
  judulPopUp: string;
  deskripsiPopUp: string;
  instagram: string;
  twitter: string;
  tiktok: string;
  youtube: string;
}

export interface Paragon {
  id: Number;
  kata: string;
}
