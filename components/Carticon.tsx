"use client";
import useStore from "@/store";
import { useAuth } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const Carticon = () => {
  const { items } = useStore();

  return (
    <div>
      <Link href={"/cart"} className="group relative">
        <ShoppingBag className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
        <span
          className="absolute -top-1 -right-1
          bg-shop_dark_green text-white h-3.5 w-3.5 rounded-full
          text-xs font-semibold flex items-center justify-center"
        >
          {items?.length ? items?.length : 0}
        </span>
      </Link>
    </div>
  );
};

export default Carticon;
