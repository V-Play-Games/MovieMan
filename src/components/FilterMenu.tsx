import React, {useState} from "react";

interface FilterMenuProps {
  years: string[];
  categories: string[];
  selectedYears: string[];
  selectedCategories: string[];
  setSelectedYears: (years: string[]) => void;
  setSelectedCategories: (categories: string[]) => void;
  onFetchMovie: () => void;
}

export const FilterMenu: React.FC<FilterMenuProps> =
  ({
     years,
     categories,
     selectedYears,
     selectedCategories,
     setSelectedYears,
     setSelectedCategories,
     onFetchMovie,
   }) => {
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);

    return (
      <div className="absolute top-0 right-0 z-1 max-w-2xl flex pr-4 pt-4">
        <button
          className="absolute top-4 right-4 text-3xl p-2 z-2 material-symbols-outlined rounded hover:bg-gray-200 dark:hover:bg-gray-700/30 focus:outline-none animate-all duration-300"
          onClick={() => setFilterMenuOpen(v => !v)}
        >
          {filterMenuOpen ? "close" : "menu"}
        </button>
        {filterMenuOpen && (
          <div
            className="inset-0 top-0 right-0 dark:bg-gray-800 bg-opacity-90 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-1 p-4 max-w-2xl flex flex-col space-y-4 transition-transform duration-300"
          >
            <div>
              <label className="block font-bold mb-1">Years</label>
              <select
                multiple
                value={selectedYears}
                onChange={e => {
                  const options = Array.from(e.target.selectedOptions, o => o.value);
                  setSelectedYears(options);
                }}
                className="border rounded p-1 min-w-[100px] w-full"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-bold mb-1">Categories</label>
              <select
                multiple
                value={selectedCategories}
                onChange={e => {
                  const options = Array.from(e.target.selectedOptions, o => o.value);
                  setSelectedCategories(options);
                }}
                className="border rounded p-1 min-w-[120px] w-full"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-row justify-between space-x-2">
              <button
                onClick={() => {
                  onFetchMovie();
                  setFilterMenuOpen(false);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded flex-1"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
