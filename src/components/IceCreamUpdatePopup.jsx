// components/admin/IceCreamUpdatePopup.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getIceCreamById, updateIceCream } from "../data/iceCreamAPI";

const IceCreamUpdatePopup = ({ id, onClose, onSuccess }) => {
  const staticCategories = ["Cone", "Cup", "Stick", "Family Pack", "Special"];
  const [categories, setCategories] = useState(staticCategories);
  const [dragImage, setDragImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Load ice cream details by ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getIceCreamById(id);
        Object.keys(data).forEach((key) => setValue(key, data[key]));
      } catch (error) {
        toast.error("Failed to load ice cream");
      }
    };
    fetchData();
  }, [id, setValue]);

  // Handle update form submit
  const onSubmit = async (formData) => {
    try {
      await updateIceCream(id, formData);
      toast.success("Ice Cream updated!");
      onSuccess(); 
      onClose();  
    } catch (error) {
      toast.error("Update failed");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-40 bg-black/50 flex items-center justify-center">
      <div className="bg-milk text-dark-brown w-[90%] lg:w-[40vw] p-5 lg:p-[2vw] rounded shadow-lg overflow-y-auto lg:h-[90vh]">
        <div className="flex justify-between items-center mb-4 lg:mb-[1.4vw]">
          <h2 className="text-xl lg:text-[1.7vw] text-primary font-bold">Update Ice Cream</h2>
          <button onClick={onClose} className="text-red-500 font-bold">X</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-[1.2vw]">
          {/* Name */}
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            className="w-full p-2 lg:p-[.5vw] border-primary/50 outline-primary border rounded text-base lg:text-[1vw]"
          />
          {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

          {/* Price */}
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Price"
            className="w-full p-2 lg:p-[.5vw] border-primary/50 outline-primary border rounded text-base lg:text-[1vw]"
          />
          {errors.price && <p className="text-red-500 text-sm">Price is required</p>}

          {/* Image URL */}
          <input
            type="text"
            {...register("image")}
            placeholder="Image URL"
            className="w-full p-2 lg:p-[.5vw] border-primary/50 outline-primary border rounded text-base lg:text-[1vw]"
          />

          {/* Category */}
          <select
            {...register("category", { required: true })}
            className="w-full p-2 lg:p-[.5vw] border-primary/50 outline-primary border rounded text-base lg:text-[1vw]"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-sm">Category is required</p>}

          {/* Description */}
          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full p-2 lg:p-[.5vw] border-primary/50 outline-primary border rounded text-base lg:text-[1vw]"
            rows={3}
          />

          {/* Stock */}
          <input
            type="number"
            {...register("stock")}
            placeholder="Stock"
            className="w-full p-2 lg:p-[.5vw] border-primary/50 outline-primary border rounded text-base lg:text-[1vw]"
          />

          {/* isAvailable */}
          <label className="flex items-center gap-2 lg:gap-[.5vw] text-base lg:text-[1vw]">
            <input type="checkbox" {...register("isAvailable")} className="lg:h-[1vw] lg:w-[1vw]" />
            Available
          </label>

          {/* Submit */}
          <div className="flex justify-end">
            <button type="submit" className="bg-primary text-sm lg:px-[1.2vw] lg:py-[.5vw] lg:text-[1.2vw] text-milk px-4 py-2 rounded hover:bg-opacity-90 cursor-pointer">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IceCreamUpdatePopup;
