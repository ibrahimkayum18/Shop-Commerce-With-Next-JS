import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import clothes from "@/assets/Clothes.jpg"
import top from '@/assets/top_left.jpg'
import bottom from '@/assets/bottom.jpg'
import { getAllProducts } from "@/utils/getAllProducts";

const Product = () => {
  const products = getAllProducts()
  console.log(products);
  return (
    <div className="my-10 lg:my-20">
      <Typography variant="h4" className="text-center pb-16">
        See The Clothes
      </Typography>
      <div className="lg:grid grid-cols-1 lg:grid-cols-2">
        <Grid item xs={6} className="relative">
          <Image src={clothes} className="w-[50%] mx-auto h-[100%]" alt="clothes" />
          <Image src={top} className="w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 absolute p-3 bg-white shadow-lg rounded-lg -top-10 left-10 md:-top-16 md:left-16 lg:-top-20 lg:left-20" alt="clothes" />
          <Image src={bottom} className="w-28 h-26 md:w-40 md:h-40 lg:w-52 lg:h-52 absolute p-3 bg-white shadow-lg rounded-lg -bottom-8 right-10 md:-bottom-16 md:right-16 lg:-bottom-20 lg:right-16" alt="clothes" />
        </Grid>
        <div className="mt-10 md:mt-28 lg:mt-0">
          <h1>Cards</h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
