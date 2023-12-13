import React, { useState, useEffect } from 'react';
import { ProductType } from "../../type";

interface Item {
  products: ProductType[];
}

const SearchBar = ({ products: initialProducts }: Item) => {
  const [searchProduct, setsearchProduct] = useState(initialProducts);

  useEffect(() => {
    setsearchProduct(initialProducts);
  }, [initialProducts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredProducts = initialProducts.filter(product =>
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
