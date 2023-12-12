import React, { useState, useEffect } from 'react';
import { ProductType } from "../../type";
import products from "./Products";

interface Item {
  products: ProductType[];
}

const SearchBar = ({ products }: Item) => {
  const [searchProduct, setsearchProduct] = useState(products);

  useEffect(() => {
    setsearchProduct(products);
  }, []); // Add an empty dependency array to run the effect only once when the component mounts

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setsearchProduct(filteredProducts);
  };

  console.log(searchProduct);

  return (
    <div>
      <input type="text" onChange={handleChange} />
      {/* You can map through the searchProduct array and display the results */}
      {searchProduct.map(product => (
        <div key={product._id}>{product.title}</div>
      ))}
    </div>
  );
};

export default SearchBar;
