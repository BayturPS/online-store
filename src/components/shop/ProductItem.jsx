import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid gray;
  background-color: aliceblue;
  margin: 30px;
  text-align: center;
  width: 680px;
  border-radius: 10px;

`;

const ProductNameStyled = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #112d49;
  width: 94px;
`;

const QuantityContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Buttons = styled.button`
  background-color: #112d49;
  border: 0;
  color: white;
  width: 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    box-shadow: 0px 0px 10px 1px #112d49;
  }
`;

const QuantityStyled = styled.p`
  color: #112d49;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  color: #112d49;
  width: 20px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const RemoveBtn = styled.div`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  padding-bottom: 5px;
  height: 30px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px 2px #e47468;
  }
`;

export const ProductItem = ({
  id,
  name,
  price,
  src,
  alt,
  onAddProduct,
  removeProductHandler,
  quantity,
  onRemove,
}) => {
  return (
    <ProductContainer key={id}>
      <ProductImage src={src} alt={alt} />
      <ProductNameStyled>{name}</ProductNameStyled>
      <ProductPrice>{price}</ProductPrice>
      <QuantityContainer>
        <Buttons onClick={() => removeProductHandler(id)}>-</Buttons>
        <QuantityStyled>{quantity}</QuantityStyled>
        <Buttons onClick={() => onAddProduct(id)}>+</Buttons>
      </QuantityContainer>
      <RemoveBtn onClick={() => onRemove(id)}>Remove</RemoveBtn>
    </ProductContainer>
  );
};
