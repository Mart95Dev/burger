import { useContext } from "react";
import HintMessage from "./../menu/HintMessage";
import PanelContext from "../../../../../context/OrderContext";

export default function EditForm() {
  const { productSelected } = useContext(PanelContext);
  return (
    <div>
      <HintMessage />
      <span>{productSelected && productSelected.title}</span>
    </div>
  );
}
