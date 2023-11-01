import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Cart = ({ cartItems, onClearCart }) => {
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    return totalPrice;
  };

  return (
    <>
      <Line>
        <Search type="text" />
        <button className="btn">
          <div className="inner"></div>
          <span className="span">Button</span>
        </button>
        <Lupa />
      </Line>
      <CartContainer>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Products>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <img src={item.src} alt={item.alt} />
                <InfoProduct>
                  <p>{item.name}</p>
                  <p>Price: {item.totalPrice}c</p>
                  <p>Quantity: {item.quantity}</p>
                </InfoProduct>
                <Added>ADDED</Added>
              </CartItem>
            ))}
          </Products>
        )}
      </CartContainer>
      <CartTotal>Total Price: {calculateTotalPrice()}c</CartTotal>
      <ClearBtn onClick={onClearCart}>Clear Cart</ClearBtn>
    </>
  );
};
export default Cart;

const CartContainer = styled.div`
  padding: 20px;
  border-radius: 5px;
`;

const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ClearBtn = styled.button`
  width: 100px;
  height: 30px;
  margin: 30px;
  border-radius: 5px;
  border: 0;
  &:hover {
    box-shadow: 0px 0px 10px 2px red;
    color: red;
    transition: 0.2s;
  }
`;

const Search = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 50px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #0d2d50;
  color: white;
  &:focus {
    border: 0;
  }
`;

const Lupa = styled(BsSearch)`
  margin-left: 20px;
`;

const Products = styled.div`
  display: flex;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  margin-bottom: 30px;
  background-color: #1a3653;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px 10px 20px;
  flex-wrap: wrap;
  width: 225px;
  border: 1px solid white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px white;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 0 0;
  }

  img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    border-radius: 5px;
  }

  p {
    margin: 0;
    font-size: 20px;
  }
`;

const Added = styled.button`
  background-color: #153557;
  box-shadow: 0px 0px 10px 1px #27598e;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 25px;
  width: 100%;
  height: 35px;
  border: 0;
  transition: 0.2s;
  &:hover {
    box-shadow: 0px 0px 0px 0px #27598e;
  }
`;

const CartTotal = styled.p`
  font-weight: bold;
  margin-left: 20px;
`;
