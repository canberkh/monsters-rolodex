import React, { useEffect, useState } from "react";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search monsters.."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
