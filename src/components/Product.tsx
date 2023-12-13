'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToFavorite } from '@/redux/proSlice';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import FormattedPrice from './FormattedPrice';
import { ProductType, StateProps } from '../../type';

interface Item {
  products: ProductType[];
}

const Product = ({ products }: Item) => {
  const { favoriteData } = useSelector((state: StateProps) => state.pro);

  const isFavorite = (productId: any) => {
    return favoriteData.some((favoriteItem) => favoriteItem._id === productId);
  };

  const dispatch = useDispatch();

  // Search for products
  const [searchProduct, setSearchProduct] = useState(products);

  useEffect(() => {
    setSearchProduct(products);
  }, [products]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchProduct(filteredProducts);
  };

  return (
    <div>
      <div className="flex justify-center bg-white text-black h-9 w-52">
        <input
          type="search"
          className="relative m-0 w-full min-w-0 rounded border border-rounded border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-designColor focus:text-neutral-700 focus:shadow-designColor focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          onChange={handleChange}
          placeholder="Search..."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        {searchProduct.map((item) => (
          <div
            key={item._id}
            className="relative rounded-3xl bg-white group border-[1px] border-zinc-200 hover:border-zinc-500 duration-300 hover:shadow-xl overflow-hidden"
          >
            <Link href={{ pathname: `/${item?._id}`, query: { _id: item?._id } }}>
              <Image
                src={item?.image}
                alt="Product image"
                width={500}
                height={500}
                className="w-full h-80 object-contain lg:object-cover group-hover:scale-105 duration-300"
              />
            </Link>
            <Heart
              fill={isFavorite(item._id) ? 'red' : 'black'}
              onClick={() => {
                dispatch(addToFavorite(item));
                if (isFavorite(item?._id)) {
                  toast.error(`${item.title} removed from favorites!`);
                } else {
                  toast.success(`${item.title} added to favorites!`);
                }
              }}
              className="absolute top-4 right-4 text-zinc-500 w-5 h-5 hover:text-black cursor-pointer duration-200"
            />
            <div className="p-4 bg-zinc-100 group-hover:bg-zinc-50 group-hover:shadow-xl duration-300">
              <p className="group-hover:text-designColor duration-300">{item?.title}</p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
              <div className="flex items-center justify-between text-sm mt-2">
                <button
                  onClick={() => {
                    dispatch(addToCart(item));
                    toast.success(`${item?.title} is added to Cart!`);
                  }}
                  className="uppercase font-semibold hover:text-designColor duration-300"
                >
                  Add to cart
                </button>
                <Link
                  className="uppercase font-semibold hover:text-designColor duration-300"
                  href={{ pathname: `/${item?._id}`, query: { _id: item?._id } }}
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        ))}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#000',
              color: '#fff',
            },
          }}
        />
      </div>
    </div>
  );
};

export default Product;