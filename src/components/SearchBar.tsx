import React, { useState, useEffect } from 'react';
import { ProductType } from "../../type";
<<<<<<< HEAD
=======
import products from "./Products";
>>>>>>> 96d62cea58e44f2ebce479a643b6f9b53891e7d3

interface Item {
  products: ProductType[];
}

<<<<<<< HEAD
const SearchBar = ({ products: initialProducts }: Item) => {
  const [searchProduct, setsearchProduct] = useState(initialProducts);

  useEffect(() => {
    setsearchProduct(initialProducts);
  }, [initialProducts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredProducts = initialProducts.filter(product =>
=======
const SearchBar = ({ products }: Item) => {
  const [searchProduct, setsearchProduct] = useState(products);

  useEffect(() => {
    setsearchProduct(products);
  }, []); // Add an empty dependency array to run the effect only once when the component mounts

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredProducts = products.filter(product =>
>>>>>>> 96d62cea58e44f2ebce479a643b6f9b53891e7d3
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
