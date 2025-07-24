import React, { useEffect, useState } from "react";
import { getIceCreams } from "../data/iceCreamAPI";
import IceCreamCard from "../components/IceCreamCard";
import { CiSearch } from "react-icons/ci";

const AllFlavors = () => {
  const [icecreams, setIcecreams] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getIceCreams().then((res) => {
      setIcecreams(res.data);
      setFiltered(res.data);
    });
  }, []);

  // Live suggestion generator
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query === "") {
      setSuggestions([]);
      return;
    }

    const matched = icecreams.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    // Suggest only name & category (max 5 items)
    const suggestionSet = new Set();
    matched.forEach((item) => {
      if (item.name.toLowerCase().includes(query)) suggestionSet.add(item.name);
      if (item.category.toLowerCase().includes(query)) suggestionSet.add(item.category);
    });

    setSuggestions([...suggestionSet].slice(0, 5));
  }, [searchQuery, icecreams]);

  // Handle search
  const handleSearch = (query = searchQuery) => {
    const q = query.toLowerCase().trim();

    const matched = icecreams.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );

    setFiltered(matched);
    setSuggestions([]); // hide suggestions
  };

  // Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  // Click on suggestion
  const handleSuggestionClick = (text) => {
    setSearchQuery(text);
    handleSearch(text);
  };

  return (
    <div className="min-h-screen bg-milk text-[#523122] font-antonio">
      {/* Search Bar */}
      <div className="fixed top-0 left-0 z-10 bg-milk w-full px-5 pt-20 pb-5 lg:py-[5.5vh] col-center">
        <div className="py-2 lg:px-[1.3vw] lg:py-[.5vw] flex items-center w-full px-4  lg:w-[25vw] rounded-full border border-primary/30 outline-primary text-dark-brown justify-between">
          <input
            type="text"
            placeholder="Search by name or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border-none outline-0 w-full lg:text-[1.2vw] bg-transparent"
          />
          <CiSearch
            onClick={() => handleSearch()}
            className="lg:text-[1.2vw] cursor-pointer"
          />
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="flex flex-col gap-1 w-full px-4 py-2 lg:py-[.7vw] lg:px-[1.4vw] lg:w-[25vw] rounded-b-sm bg-milk lg:text-[1vw] text-mid-brown">
            {suggestions.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSuggestionClick(item)}
                className="cursor-pointer hover:text-dark-brown transition"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Section */}
      <section className="pt-[20vh] pb-[5vw]">
        <div className="mx-auto px-5 lg:px-[4vw] py-10 lg:py-[3vw] grid gap-6 lg:gap-[2vw] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {filtered.length > 0 ? (
            filtered.map((item) => <IceCreamCard key={item._id} {...item} />)
          ) : (
            <p className="col-span-full text-center lg:text-[1.5vw] text-dark-brown/50 flex-center h-[20vh]">
              {icecreams.length === 0 ? "Loading flavors..." : "No flavors found."}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllFlavors;
