import { useState, useContext } from "react";
import PanelContext from "../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "./../../../../../../enums/product";
import Form from "./Form";
import Button from "./../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

export default function AddForm() {
  //this.state.
  const { handleAdd, newProduct, setNewProduct } = useContext(PanelContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //comportement
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displayMessageSuccess = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displayMessageSuccess();
  };

  return (
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
    >
      <>
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </>
    </Form>
  );
}
