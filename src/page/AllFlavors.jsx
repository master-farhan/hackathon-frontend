import React, { useEffect, useState } from "react";
import { getIceCreams } from "../data/iceCreamAPI";
import IceCreamCard from "../components/IceCreamCard";

const AllFlavors = () => {
  const [icecreams, setIcecreams] = useState([]);
  useEffect(() => {
    getIceCreams().then((res) => setIcecreams(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-milk text-[#523122] font-antonio">
      {/* Fixed Search Bar */}
      <div className="fixed top-0 left-0 z-10 bg-milk w-full px-5 pt-20 pb-5 lg:py-[5.5vh]">
        <input
          type="text"
          placeholder="Search for a flavor..."
          className="w-full max-w-md mx-auto block px-4 py-2 lg:px-[1.3vw] lg:py-[.5vw] lg:text-[1.2vw] lg:min-w-[40vw] rounded-full border border-primary/30 outline-primary text-dark-brown"
        />
      </div>

      {/* Add top padding so content doesn't go under fixed search bar */}
      <section className="pt-[20vh]">
        {/* category */}
        {/* <div className="w-full h-[30vh] flex justify-between px-[4vw] gap-[1vw] overflow-auto scroll-auto">
          category here 
        </div> */}

        {/* card */}
        <div className="mx-auto px-5 lg:px-[4vw] py-10 lg:py-[3vw] grid gap-6 lg:gap-[2vw] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {icecreams.length > 0 ? (
            icecreams.map((item) => <IceCreamCard key={item._id} {...item} />)
          ) : (
            <p className="col-span-full text-center lg:text-[1.5vw] text-dark-brown/50 flex-center h-[20vh]">
              Loading flavors...
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllFlavors;
