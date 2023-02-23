import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera, MdEuro } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { GoMegaphone } from "react-icons/go";

const configTextInput = [
  {
    id: "title-product",
    name: "title-product",
    className: "text-inputs grid-input-first-row",
    Icon: <FaHamburger className="icon color-icon" />,
    placeholder: "Produit (ex: Super Burger)",
    value: "nameProduct",
  },
  {
    id: "image",
    name: "imageSrc",
    className: "text-inputs grid-input-second-row",
    Icon: <MdPhotoCamera className="icon color-icon" />,
    placeholder: "Lien URL d'une image (ex: https//photo-frites.jpg)",
    value: "url",
  },
  {
    id: "price",
    name: "price",
    className: "text-inputs grid-price",
    Icon: <MdEuro className="icon color-icon" />,
    placeholder: "Prix",
    value: "price",
  },
];

const configSelectInput = [
  {
    id: "stock",
    name: "stock-select",
    className: "text-inputs grid-stock",
    Icon: <BsBoxSeam className="icon color-icon" />,
    option_1: <option value="true">Stock</option>,
    option_2: <option value="false">Rupture</option>,
  },
  {
    id: "pub",
    name: "pub-select",
    className: "text-inputs grid-pub",
    Icon: <GoMegaphone className="icon color-icon" />,
    option_1: <option value="true">Sans pub</option>,
    option_2: <option value="false">Avec pub</option>,
  },
];

export { configTextInput, configSelectInput };
