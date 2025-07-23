import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createIceCream } from "../../data/iceCreamAPI";
import { toast } from "react-toastify";

const categories = ["Cone", "Cup", "Stick", "Family Pack", "Special"];

const CreateIceCream = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const [selectedFile, setSelectedFile] = useState(null);
  const [dragImage, setDragImage] = useState(null);

  const onSubmit = async (data) => {
    // Priority: dragImage > selectedFile > image URL
    if (dragImage) {
      data.image = URL.createObjectURL(dragImage);
    } else if (selectedFile) {
      data.image = URL.createObjectURL(selectedFile);
    }

    if (!data.image) {
      toast.error(
        "Please provide an image using URL, file input, or drag & drop."
      );
      return;
    }

    try {
      await createIceCream(data);
      toast.success("Ice cream created successfully!");
      reset();
      setSelectedFile(null);
      setDragImage(null);
    } catch (err) {
      console.error("Create Error:", err);
      toast.error("Failed to create ice cream.");
    }
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setDragImage(file);
      setSelectedFile(null);
      setValue("image", ""); // clear URL
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setDragImage(null);
      setValue("image", ""); // clear URL
    }
  };

  return (
    <div className="h-full w-full bg-milk ml-auto text-dark-brown">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 lg:space-y-[2vw]"
      >
        <h2 className="text-2xl lg:text-[1.7vw] font-bold">Create Ice Cream</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className="w-full p-2 lg:p-[.5vw] border outline-primary border-primary/50 rounded text-base lg:text-[1.2vw]"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}

        {/* Description */}
        <textarea
          placeholder="Description"
          {...register("description")}
          className="w-full p-2 lg:p-[.5vw] border outline-primary border-primary/50 rounded text-base lg:text-[1.2vw]"
        />

        {/* Price */}
        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: true, min: 0 })}
          className="w-full p-2 lg:p-[.5vw] border outline-primary border-primary/50 rounded text-base lg:text-[1.2vw]"
        />
        {errors.price && <p className="text-red-500">Price is required</p>}

        {/* Category */}
        <select
          {...register("category", { required: true })}
          className="w-full p-2 lg:p-[.5vw] border outline-primary border-primary/50 rounded text-base lg:text-[1.2vw]"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500">Category is required</p>
        )}

        {/* Stock */}
        <input
          type="number"
          placeholder="Stock (default 10)"
          {...register("stock", { valueAsNumber: true })}
          className="w-full p-2 lg:p-[.5vw] border outline-primary border-primary/50 rounded text-base lg:text-[1.2vw]"
        />

        {/* Rating */}
        <input
          type="number"
          placeholder="Rating (0-5)"
          {...register("rating", {
            valueAsNumber: true,
            min: 0,
            max: 5,
          })}
          className="w-full p-2 lg:p-[.5vw] border outline-primary border-primary/50 rounded text-base lg:text-[1.2vw]"
        />

        {/* isAvailable */}
        <label className="flex items-center  text-base lg:text-[1.2vw] gap-2 lg:gap-[.5vw]">
          <input
            type="checkbox"
            {...register("isAvailable")}
            className="lg:h-[1vw] lg:w-[1vw]"
          />
          Is Available
        </label>

        {/* Image URL */}
        <input
          type="text"
          placeholder="Image URL"
          {...register("image")}
          onChange={() => {
            setDragImage(null);
            setSelectedFile(null);
          }}
          className="w-full p-2 lg:p-[.5vw] border outline-primary border-primary/50 rounded text-base lg:text-[1.2vw]"
        />

        {/* Drag + Choose File in One */}
        <div
          onDrop={handleImageDrop}
          onDragOver={(e) => e.preventDefault()}
          className="relative w-full p-5 text-base lg:text-[1.2vw] lg:p-[1.5vw] border-2 border-dashed border-primary/50 rounded text-center cursor-pointer bg-primary/20 text-dark-brown"
          onClick={() => document.getElementById("fileInput").click()}
        >
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          {dragImage ? (
            <p>Dropped: {dragImage.name}</p>
          ) : selectedFile ? (
            <p>Selected: {selectedFile.name}</p>
          ) : (
            <p>Click or Drag & Drop an image here</p>
          )}
        </div>
        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="bg-primary text-sm lg:px-[1.2vw] lg:py-[.5vw] lg:text-[1.2vw] text-milk px-4 py-2 rounded hover:bg-opacity-90 cursor-pointer"
          >
            Create Ice Cream
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateIceCream;
