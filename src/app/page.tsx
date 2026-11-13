import FeaturedProduct from "./_components/FeaturedProduct/FeaturedProduct";

// import Image from "next/image";
import ShopByCategory from './_components/ShopByCategory/ShopByCategory';

export default function Home() {
  return (
    <div>
      <ShopByCategory/>
     <FeaturedProduct/> 
    </div>
  );
}
