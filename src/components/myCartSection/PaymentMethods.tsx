import React from "react";
import Link from "next/link";
import { MdPhone } from "react-icons/md";

const PaymentMethods: React.FC = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap justify-center items-center gap-4 w-100 pt-2"></div>
      <Link href="tel:4039936742">
        <p className="btn-primary px-2 sm:px-8 py-4 bg-primary mt-4 text-center font-semibold text-white flex items-center justify-center gap-1 sm:gap-2">
          CALL{" "}
          <span className="flex items-center">
            <MdPhone className="w-5 h-5 mr-1" />
            4039936742
          </span>{" "}
          TO ORDER
        </p>
      </Link>
    </div>
  );
};

export default PaymentMethods;
