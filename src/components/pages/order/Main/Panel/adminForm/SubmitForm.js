import styled from "styled-components";
import PrimaryButton from "./../../../../../reusable-ui/PrimaryButton";

import { theme } from "./../../../../../../theme/index";
import Message from "./Message";

function SubmitForm({ className, label, formSubmitted }) {
  return (
    <SubmitFormStyled className="submit">
      <PrimaryButton
        className={`add-product-menu ${className}`}
        label={"Ajouter un nouveau produit au menu"}
      />
      <Message formSubmitted={formSubmitted} />
      {/* {formSubmitted ? (
        <div className=" success">
          <span className="icon-success ">
            <MdCheckCircleOutline />
          </span>
          <span className="text-success"> Ajouté avec succès !</span>
        </div>
      ) : (
        ""
      )} */}
    </SubmitFormStyled>
  );
}

export default SubmitForm;
const SubmitFormStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  .add-product-menu {
    margin-top: 0px;
    padding: 10px;
    background-color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    font-weight: ${theme.fonts.weights.semiBold};

    :hover {
      color: ${theme.colors.success};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.success};
      transition: all 200ms ease-out;
    }

    :active {
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};
    }
  }

  /* .success {
    position: absolute;
    width: 100%;
    left: 105%;
    display: flex;
    align-items: center;

    .icon-success {
      display: flex;
      align-items: center;
      color: ${theme.colors.success};
    }

    .text-success {
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.success};
    } */
`;
