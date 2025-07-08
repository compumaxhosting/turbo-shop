import React, { useState } from "react";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { Product } from "@/lib/productTypes";
import useCartStore from "@/store/useCartStore";
import NotificationPopup from "@/components/extras/NotificationPopup";
import QuantityManagement from "./QuantityManegement";
import Link from "next/link";

interface CartItemProps {
  cartItem: { product: Product; part: "left" | "right" };
  prices: {
    leftCurrent: string;
    leftOriginal: string;
    rightCurrent: string;
    rightOriginal: string;
  };
  sideLabel: string;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem, prices, sideLabel }) => {
  const { product } = cartItem;
  const { removeFromCart, getProductQuantity } = useCartStore();

  const [notification, setNotification] = useState({
    message: "",
    visible: false,
  });

  const isLeft = cartItem.part === "left";
  const partNumber = isLeft ? product.leftPartNumber : product.rightPartNumber;
  const currentPrice = isLeft ? prices.leftCurrent : prices.rightCurrent;
  const originalPrice = isLeft ? prices.leftOriginal : prices.rightOriginal;

  // ⚠️ Logic to override sideLabel if right part number is empty
  const label =
    isLeft &&
    (!product.rightPartNumber || product.rightPartNumber.trim() === "")
      ? "Part Number :"
      : sideLabel;

  const showNotification = () => {
    setNotification({
      message: `Are you sure you want to remove '${product.modelName}' from the cart?`,
      visible: true,
    });
  };

  const handleConfirmRemove = () => {
    removeFromCart(product, cartItem.part);
    setNotification({ message: "", visible: false });
  };

  const handleCancelRemove = () => {
    setNotification({ message: "", visible: false });
  };

  const quantity = getProductQuantity(product, cartItem.part);

  return (
    <>
      <div className="flex flex-col xl:flex-row items-center justify-between px-4 py-4 border-t border-gray-200 dark:border-stone-800">
        <div className="relative flex justify-center items-center w-28 xl:w-24 h-24">
          <Image
            src={
              Array.isArray(product.imgPath)
                ? product.imgPath[0]
                : product.imgPath || "/img-placeholder.svg"
            }
            alt={product.modelName}
            width={1000}
            height={800}
            style={{ objectFit: "cover" }}
            className="rounded"
          />
        </div>
        <div className="flex flex-col justify-center items-center xl:items-start w-full xl:w-8/12 xl:pl-4 mt-4 xl:mt-0">
          {product.brand ? (
            <Link
              href={`/${product.brand.toLowerCase()}-products/${product.id}`}
            >
              <h2 className="text-center xl:text-left text-lg font-semibold text-gray-800 dark:text-gray-200">
                <span className="text-xl text-primary block">
                  {product.brand}
                </span>
                {product.modelName}
              </h2>
            </Link>
          ) : (
            <h2 className="text-center xl:text-left text-lg font-semibold text-gray-800 dark:text-gray-200">
              <span className="text-xl text-primary block">
                {product.brand}
              </span>
              {product.modelName}
            </h2>
          )}

          <p className="text-sm text-gray-600 dark:text-gray-400">
            {partNumber ? `${label} ${partNumber}` : "Part Number : N/A"}
          </p>

          <div className="flex items-center justify-between gap-2 text-lg font-semibold">
            <p className="text-gray-600 dark:text-gray-400">
              {currentPrice || "N/A"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
              {originalPrice || "N/A"}
            </p>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row items-center xl:space-x-4 xl:w-auto mt-4 xl:mt-0 xs:gap-4 xl:gap-0">
          <QuantityManagement
            product={product}
            part={cartItem.part}
            quantity={quantity}
          />
          <button
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 mt-5 xs:mt-0"
            onClick={showNotification}
          >
            <FaTrashAlt />
          </button>
          {notification.visible && (
            <NotificationPopup
              message={notification.message}
              onClose={() => setNotification({ message: "", visible: false })}
              handleConfirmRemove={handleConfirmRemove}
              handleCancelRemove={handleCancelRemove}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CartItem;
