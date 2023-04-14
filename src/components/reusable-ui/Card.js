import styled from "styled-components";
import { theme } from "../../theme/index";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import PanelContext from "../context/OrderContext";
import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export default function Card({
  title,
  imageSource,
  leftDescription,
  className,
}) {
  //state
  const { isModeAdmin } = useContext(PanelContext);

  return (
    <CardStyled className={isModeAdmin ? className : ""}>
      <div className="image">
        {isModeAdmin ? <IoMdCloseCircle className="icon-close" /> : ""}
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  position: relative;
  background: ${theme.colors.white};
  width: 240px;
  height: 330px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.extraRound};

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    .icon-close {
      color: ${theme.colors.primary};
      height: 25px;
      width: 25px;
      cursor: pointer;
      position: absolute;
      top: 18px;
      right: 18px;
      animation: close 500ms ease-in-out 0s 1 normal;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @keyframes close {
    from {
      right: -20px;
      opacity: 0;
    }
    to {
      opacity: 1;
      /* right: 20px; */
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
          margin-top: 5px;
        }
      }
    }
  }
`;
