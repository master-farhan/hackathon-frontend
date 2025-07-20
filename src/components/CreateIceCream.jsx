import React, { useState } from "react";
// import { addIceCream } from "../data/api";

const CreateIceCream = () => {
  const [formData, setFormData] = useState({
    name: "",
    flavor: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addIceCream(formData);
      alert("✅ Ice Cream Added!");
      setFormData({ name: "", flavor: "", price: "", image: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add ice cream");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-1/2 w-[90vw] mx-auto mt-[25vh] bg-mid-brown p-5 lg:p-[1.5vw] rounded space-y-4 lg:space-y-[1.3vw]"
    >
      <h2 className="text-2xl lg:text-[2vw] font-bold text-center">Add Ice Cream</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Name"
        onChange={handleChange}
        className="w-full p-2 lg:p-[.7vw] lg:text-[1.2vw] border rounded"
        required
      />
      <input
        type="text"
        name="flavor"
        value={formData.flavor}
        placeholder="Flavor"
        onChange={handleChange}
        className="w-full p-2 lg:p-[.7vw] lg:text-[1.2vw] border rounded"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        placeholder="Price"
        onChange={handleChange}
        className="w-full p-2 lg:p-[.7vw] lg:text-[1.2vw] border rounded"
        required
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        placeholder="Image URL"
        onChange={handleChange}
        className="w-full p-2 lg:p-[.7vw] lg:text-[1.2vw] border rounded"
        required
      />

      <button
        type="submit"
        className="w-full bg-milk text-dark-brown py-2 px-4 rounded hover:bg-milk/90 transition"
      >
        ➕ Add Ice Cream
      </button>
    </form>
  );
};

export default CreateIceCream;
