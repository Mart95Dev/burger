import { useContext } from "react";
import HintMessage from "./../menu/HintMessage";
import PanelContext from "../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {
  //this.state.

  const {
    productSelected,
    setproductSelected,
    handleEdit,
    // titleEditRef, //@FIXME
    hasAlreadyBeenClicked,
  } = useContext(PanelContext);

  //comportement
  const handleChange = async (e) => {
    const { name, value } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value };
    await setproductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  };

  return (
    <>
      {hasAlreadyBeenClicked ? (
        <Form
          product={productSelected}
          onChange={handleChange}
          // ref={titleEditRef}
        >
          <EditInfoMessage />
        </Form>
      ) : (
        <HintMessage />
      )}
    </>
  );
}
