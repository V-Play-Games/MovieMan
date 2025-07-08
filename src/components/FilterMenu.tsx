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

export const FilterMenu: React.FC<FilterMenuProps> = ({
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
    <div className="absolute top-0 right-0 z-1 w-full flex justify-end pr-4 pt-4">
      <button
        className="text-3xl p-2 z-2 material-symbols-outlined rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
        onClick={() => setFilterMenuOpen(v => !v)}
      >
        {filterMenuOpen ? "close" : "menu"}
      </button>
      {filterMenuOpen && (
        <div
          className="fixed inset-0 bg-white dark:bg-gray-800 bg-opacity-90 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-10 p-4 min-w-[250px] flex flex-col space-y-4 transition-transform duration-300"
          style={{right: 0, top: 0}}
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
            <button
              onClick={() => setFilterMenuOpen(false)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded flex-1"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
