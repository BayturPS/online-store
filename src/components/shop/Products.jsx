import React from "react";
import styled from "styled-components";
import { FaShoppingBasket } from "react-icons/fa";
import { ProductItem } from "./ProductItem";

export const Products = ({
  products,
  onAddProduct,
  removeProductHandler,
  cartItems,
  onRemove,
}) => {
  return (
    <ProductsContainer>
      <Title>Товары в магазине:</Title>
      <Description>
        <Product>Product</Product>
        <ProductName>Product Name</ProductName>
        <Price>Price</Price>
        <Quantity>Quantity</Quantity>
        <h3>Remove</h3>
      </Description>
      <div>
        {products.map((item) => (
          <ProductItem
            {...item}
            key={item.id}
            onAddProduct={onAddProduct}
            removeProductHandler={removeProductHandler}
            cartItems={cartItems}
            quantity={item.quantity}
            onRemove={onRemove}
          />
        ))}
      </div>
      <ShoppingCartIcon />
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ShoppingCartIcon = styled(FaShoppingBasket)`
  font-size: 36px;
`;

const Description = styled.div`
  display: flex;
`;

const Product = styled.h3`
  padding-left: 45px;
  margin-right: 85px;
`;

const ProductName = styled.h3`
  margin-right: 60px;
`;

const Quantity = styled.h3`
  margin-right: 78px;
`;

const Price = styled.h3`
  margin-right: 58px;
`;
