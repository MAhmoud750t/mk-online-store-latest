import Container from "@/components/Container";
import Wish from "@/components/Cart";
import Title from "@/components/Title";
import React from "react";
import Wishlist from "@/components/Wishlist";

const page = () => {
  return (
    <Container>
      <Title title="Your Wishlist" />
      <Wishlist/>
    </Container>
  );
};

export default page;
