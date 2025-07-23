import React, { useEffect, useState } from "react";
import { getIceCreams } from "../../data/iceCreamAPI";
import IceCreamUpdatePopup from "../../components/IceCreamUpdatePopup";

const UpdateIceCream = () => {
  const [iceCreams, setIceCreams] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const fetchAll = async () => {
    try {
      const { data } = await getIceCreams();
      setIceCreams(data);
    } catch (err) {
      console.log("Failed to load ice creams");
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="">
      <h2 className="text-2xl text-dark-brown lg:text-[1.7vw] font-bold mb-[5vh]">All Ice Creams</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-[7vw]">
        {iceCreams.map((ice, index) => (
          <div
            key={ice._id}
            className="bg-milk text-dark-brown flex items-center gap-[.5vh]"
          >
            <div className="w-2/6 h-full"><p className="bg-primary flex-center text-milk h-full w-12 lg:w-[3.3vw] rounded-l-full text-xl lg:text-[1.5vw]">{index + 1}</p></div>
            <img
              src={ice.image}
              alt={ice.name}
              className="w-15 h-15 lg:w-[5vw] lg:h-[5vw] object-contain rounded"
            />
            <div className="flex flex-col items-end gap-2 lg:gap-[.5vw] w-full">
              <h3 className="text-lg lg:text-[1.3vw] font-semibold whitespace-nowrap">
                {ice.name}
              </h3>
              <p className="text-sm lg:text-[1vw] text-gray-600">${ice.price}</p>
              <button
                onClick={() => setSelectedId(ice._id)}
                className="h-7 w-23 lg:w-[6vw] flex-center lg:h-[2vw] text-xs lg:text-[.9vw] hover:text-sm lg:hover:text-[1vw] transition-all duration-300 rounded-full bg-primary text-white hover:bg-primary/90 cursor-pointer"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Popup */}
      {selectedId && (
        <IceCreamUpdatePopup
          id={selectedId}
          onClose={() => setSelectedId(null)}
          onSuccess={fetchAll}
        />
      )}
    </div>
  );
};

export default UpdateIceCream;
