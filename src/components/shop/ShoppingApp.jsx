import React, { useReducer, useEffect } from "react";
import { Products } from "./Products";
import Cart from "./Cart";
import Klubnika from "../assets/images/klubnika.jpg";
import Orange from "../assets/images/orange.jpg";
import Kiwi from "../assets/images/KiwiFruit.webp";
import styled from "styled-components";

const initProducts = () => {
  const storedProducts = localStorage.getItem("product");
  return storedProducts
    ? JSON.parse(storedProducts)
    : {
        products: [
          {
            id: 1,
            name: "Strawberry",
            price: 10,
            src: Klubnika,
            alt: "strawberry",
            quantity: 0,
          },
          {
            id: 2,
            name: "Orange",
            price: 20,
            src: Orange,
            alt: "orange",
            quantity: 0,
          },
          {
            id: 3,
            name: "Kiwi",
            price: 30,
            src: Kiwi,
            alt: "kiwi",
            quantity: 0,
          },
        ],
        cart: [],
        totalQuantity: 0,
      };
};

function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const productToAdd = state.products.find((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
          return true;
        }
        return false;
      });
      if (productToAdd) {
        const itemInCart = state.cart.find((item) => {
          return item.id === productToAdd.id;
        });
        if (itemInCart) {
          itemInCart.quantity += 1;
          itemInCart.totalPrice = itemInCart.quantity * itemInCart.price;
        } else {
          state.cart.push({
            ...productToAdd,
            quantity: 1,
            totalPrice: productToAdd.price,
          });
        }
        state.totalQuantity += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      break;
    case "REMOVE_PRODUCT":
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 0) {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.price;
          }
          if (state.totalQuantity > 0) {
            state.totalQuantity -= 1;
          }
        }
        return item;
      });
      const updatedProduct = state.products.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 0) {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.price;
          }
          if (state.totalQuantity > 0) {
            state.totalQuantity -= 1;
          }
        }
        return item;
      });
      return {
        ...state,
        cart: updatedCart,
        products: updatedProduct,
      };
    case "CLEAR_CART":
      const clearProduct = state.products.map((item) => {
        return { ...item, quantity: 0 };
      });
      return {
        ...state,
        cart: [],
        products: clearProduct,
        totalQuantity: 0,
      };
    case "REMOVE_CART":
      const remove = state.cart.filter((item) => item.id !== action.payload);
      const zeroQuantity = state.products.map((item) =>
        item.id === action.payload ? { ...item, quantity: 0 } : { ...item }
      );
      return { ...state, cart: remove, products: zeroQuantity };

    default:
      return state;
  }
}

const ShoppingApp = () => {
  const [products, dispatch] = useReducer(productReducer, initProducts());

  const cartItems = [];

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(products));
  }, [products]);

  function addProductHandler(id) {
    dispatch({ type: "ADD_PRODUCT", payload: id });
  }

  function removeProductHandler(id) {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  }

  function clearCartHandler() {
    dispatch({ type: "CLEAR_CART" });
  }

  function removeCart(id) {
    dispatch({ type: "REMOVE_CART", payload: id });
  }

  console.log(products);

  return (
    <Shop>
      <Cart cartItems={products.cart} onClearCart={clearCartHandler} />
      <Products
        products={products.products}
        onAddProduct={addProductHandler}
        cartItems={cartItems}
        removeProductHandler={removeProductHandler}
        onRemove={removeCart}
      />
    </Shop>
  );
};
export default ShoppingApp;

const Shop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
