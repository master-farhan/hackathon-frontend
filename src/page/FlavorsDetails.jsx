import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getIceCreamById } from "../data/iceCreamAPI";

const FlavorsDetails = () => {
  const { id } = useParams();

  const [flavor, setFlavor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getIceCreamById(id)
      .then((res) => {
        setFlavor(res.data);
        setLoading(false);
      })
      .catch(() => {
        setFlavor(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500 font-antonio lg:text-[1.2vw]">
        Loading flavor...
      </div>
    );
  }

  if (!flavor) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500 font-antonio lg:text-[1.2vw]">
        Flavor not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-milk px-5 lg:px-[4vw] lg:py-[20vh] py-[12vh] text-[#523122] font-antonio">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-[3vw]">
        <img
          src={flavor.image}
          alt={flavor.name}
          className="w-full md:w-[30vw] aspect-square object-contain"
        />
        <div className="md:w-[65vw] w-full md:p-[5vw]">
          <h1 className="text-4xl lg:text-[2.6vw] font-bold mb-4 lg:mb-[1vw]">
            {flavor.name}
          </h1>
          <div className="flex justify-between md:justify-start gap-[3vw] items-center">
            <p className="text-xl lg:text-[2vw] text-primary font-semibold mb-6 lg:mb-[2vw]">
              ₹ {flavor.price}
            </p>
            <p className="h-6 w-25 lg:w-[7vw] flex-center lg:h-[2vw] text-xs lg:text-[.9vw] rounded-full bg-dark-brown/10 text-primary mb-6 lg:mb-[2.2vw]">
              Stock: {flavor.stock}
            </p>
          </div>
          <p className="text-lg lg:text-[1.4vw] lg:mb-[1vw] mb-4">
            {flavor.description}
          </p>

          {flavor.stock ? (
            <Link
              to={"/order"}
              className="h-8 w-25 lg:w-[7vw] flex-center lg:h-[2.5vw] text-xs lg:text-[.9vw] hover:text-sm lg:hover:text-[1vw] transition-all duration-300 rounded-full bg-primary text-milk hover:bg-primary/90"
            >
              Order Now
            </Link>
          ) : (
            <span className="h-8 w-25 lg:w-[7vw] flex-center lg:h-[2.5vw] text-xs lg:text-[.9vw] bg-dark-brown/10 rounded-full">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlavorsDetails;
