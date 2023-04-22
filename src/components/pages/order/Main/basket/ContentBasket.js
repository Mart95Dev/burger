import styled from "styled-components";

function ContentBasket({ className }) {
  return (
    <ContentBasketStyled className={className}>
      <span>Votre commande est vide</span>
    </ContentBasketStyled>
  );
}

export default ContentBasket;

const ContentBasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 350px; */
  height: 100%;
  justify-content: center;
  overflow-y: scroll;
  z-index: 1;

  span {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 72px;

    color: #747b91;
  }
`;
