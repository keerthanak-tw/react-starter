import React from "react";

// import { ProductsContext } from "../context/products-context";
import { useStore } from "../hooks-store/store";
import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  const [store] = useStore();
  // const productList = useContext(ProductsContext).products;
  return (
    <ul className="products-list">
      {store.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
