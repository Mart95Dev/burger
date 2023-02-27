import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera, MdEuro } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { GoMegaphone } from "react-icons/go";

const configTextInput = [
  {
    id: "title",
    name: "title",
    className: "text-inputs grid-input-first-row",
    Icon: <FaHamburger className="icon color-icon" />,
    placeholder: "Produit (ex: Super Burger)",
    value: "nameProduct",
  },
  {
    id: "image",
    name: "imageSource",
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
    name: "isAvailable",
    className: "text-inputs grid-stock",
    Icon: <BsBoxSeam className="icon color-icon" />,
    option_1: <option value="true">Stock</option>,
    option_2: <option value="false">Rupture</option>,
  },
  {
    name: "isAdvertised",
    className: "text-inputs grid-advertise",
    Icon: <GoMegaphone className="icon color-icon" />,
    option_1: <option value="false">Sans pub</option>,
    option_2: <option value="true">Avec pub</option>,
  },
];

export { configTextInput, configSelectInput };
