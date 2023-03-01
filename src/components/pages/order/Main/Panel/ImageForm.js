import React from "react";
import { theme } from "./../../../../../theme/index";
import styled from "styled-components";

function ImageForm({ image, alt }) {
  return (
    <ImageFormStyled>
      {image ? (
        <img src={image} alt={alt} width="100%" height="100%" />
      ) : (
        <div className="no-image">Aucune image</div>
      )}
    </ImageFormStyled>
  );
}

export default ImageForm;

const ImageFormStyled = styled.div`
  border: 1px solid ${theme.colors.greyLight};
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: ${theme.borderRadius.round};
  line-height: 1.5px;

  .image {
    grid-area: image;
    margin: auto;
    display: flex;
    margin: auto;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
  }

  .no-image {
    display: inline-block;
    margin: auto;
    vertical-align: middle;
    line-height: normal;
    font-size: ${theme.fonts.size.SM};
  }
`;
