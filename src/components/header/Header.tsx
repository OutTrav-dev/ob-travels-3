"use client";
import React from "react";

type HeaderProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  searchValue?: string;
  showSearch?: boolean;
  onSearchChange?: (value: string) => void;
};

const Header = ({
  title,
  subtitle,
  backgroundImage,
  searchValue,
  showSearch,
  onSearchChange,
}: HeaderProps) => {
  const [localSearch, setLocalSearch] = React.useState(searchValue ?? "");

  React.useEffect(() => {
    setLocalSearch(searchValue ?? "");
  }, [searchValue]);

  const submitSearch = () => {
    onSearchChange?.(localSearch.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  // If user clears input (empty string), trigger search immediately without button/enter
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setLocalSearch(next);
    if (next.trim() === "") {
      onSearchChange?.("");
    }
  };

  return (
    <section
      className="relative w-full h-[50vh] bg-cover bg-center bg-[#0c4423]"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white capitalize drop-shadow ">
          {title}
        </h1>
        {subtitle && (
          <h6 className="mt-3 text-sm md:text-lg text-white/90 text-center max-w-2xl">
            {subtitle}
          </h6>
        )}
        {showSearch && (
          <div className="mt-5 w-4/5 max-w-xl">
            <label htmlFor="destination-search" className="sr-only">
              Search destinations or packages
            </label>
            {/* <div
              className="
              flex items-center rounded-full px-3 py-2 md:px-4 md:py-2.5
              bg-white/25 backdrop-blur-md
              border border-white/70 ring-1 ring-white/50
              shadow-[0_8px_24px_rgba(0,0,0,0.25)] h-10
            "
            >
              <input
                id="destination-search"
                type="text"
                className="
                flex-1 bg-transparent text-sm md:text-base
                text-white placeholder:text-white/80 placeholder:font-light focus:outline-none
              "
                placeholder={`Search ${title.toLowerCase()}...`}
                value={localSearch}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <button
                type="button"
                onClick={submitSearch}
                aria-label="Search"
                className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full ml-2"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.3-4.3m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.2-1.8z"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
