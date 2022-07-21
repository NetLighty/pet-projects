export interface IDakimakura {
  imgSrc: string;
  price: number;
  name: string;
  title: string;
  gender: "boy" | "girl";
  colors: string[];
  material: string;
  isPopular: "Yes" | "No";
}
