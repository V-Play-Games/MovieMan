import React, {useState} from "react";

interface FilterMenuProps {
  years: string[];
  categories: string[];
  yearRange: { min: number; max: number };
  selectedCategories: string[];
  setYearRange: (range: { min: number; max: number }) => void;
  setSelectedCategories: (categories: string[]) => void;
  onFetchMovie: () => void;
}

export const FilterMenu: React.FC<FilterMenuProps> =
  ({
     years,
     categories,
     yearRange,
     selectedCategories,
     setYearRange,
     setSelectedCategories,
     onFetchMovie,
   }) => {
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);

    const minYear = years.length > 0 ? parseInt(years[0]) : 1900;
    const maxYear = years.length > 0 ? parseInt(years[years.length - 1]) : new Date().getFullYear();

    const handleSliderChange = (value: number, type: 'min' | 'max') => {
      if (type === 'min') {
        setYearRange({ min: Math.min(value, yearRange.max), max: yearRange.max });
      } else {
        setYearRange({ min: yearRange.min, max: Math.max(value, yearRange.min) });
      }
    };

    return (
      <>
        <button
          data-hamburger-button
          className="fixed top-4 left-4 text-3xl p-2 z-50 material-symbols-outlined rounded hover:bg-gray-700/30 focus:outline-none transition-all duration-300"
          onClick={() => setFilterMenuOpen(v => !v)}
          aria-label="Toggle filter menu"
        >
          {filterMenuOpen ? "close" : "menu"}
        </button>

        {filterMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={() => setFilterMenuOpen(false)}
          />
        )}

        <div
          className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
            filterMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6 pt-20">
            <h2 className="text-2xl font-bold mb-6 text-white">Filters</h2>

            <div className="flex-1 overflow-y-auto space-y-6">
              <div>
                <label className="block font-bold mb-4 text-white">Year Range</label>
                <div className="px-2">
                  <div className="relative h-2 bg-gray-600 rounded-full mb-8">
                    <div
                      className="absolute h-full bg-blue-500 rounded-full"
                      style={{
                        left: `${((yearRange.min - minYear) / (maxYear - minYear)) * 100}%`,
                        right: `${100 - ((yearRange.max - minYear) / (maxYear - minYear)) * 100}%`
                      }}
                    />

                    <input
                      type="range"
                      min={minYear}
                      max={maxYear}
                      value={yearRange.min}
                      onChange={(e) => handleSliderChange(parseInt(e.target.value), 'min')}
                      onMouseDown={() => setIsDragging('min')}
                      onMouseUp={() => setIsDragging(null)}
                      onTouchStart={() => setIsDragging('min')}
                      onTouchEnd={() => setIsDragging(null)}
                      className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-lg"
                      style={{ zIndex: isDragging === 'min' ? 5 : 3 }}
                    />

                    <input
                      type="range"
                      min={minYear}
                      max={maxYear}
                      value={yearRange.max}
                      onChange={(e) => handleSliderChange(parseInt(e.target.value), 'max')}
                      onMouseDown={() => setIsDragging('max')}
                      onMouseUp={() => setIsDragging(null)}
                      onTouchStart={() => setIsDragging('max')}
                      onTouchEnd={() => setIsDragging(null)}
                      className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-lg"
                      style={{ zIndex: isDragging === 'max' ? 5 : 4 }}
                    />
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div className="text-center">
                      <span className="text-gray-400">From</span>
                      <div className="text-white font-bold text-lg">{yearRange.min}</div>
                    </div>
                    <div className="text-gray-500">—</div>
                    <div className="text-center">
                      <span className="text-gray-400">To</span>
                      <div className="text-white font-bold text-lg">{yearRange.max}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block font-bold text-white">Categories</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedCategories(categories)}
                      className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors duration-200"
                    >
                      Select All
                    </button>
                    <button
                      onClick={() => setSelectedCategories([])}
                      className="text-xs bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded transition-colors duration-200"
                    >
                      Deselect All
                    </button>
                  </div>
                </div>
                <div className="border border-gray-600 rounded p-3 bg-gray-700 max-h-[300px] overflow-y-auto space-y-2">
                  {categories.map(cat => {
                    const isChecked = selectedCategories.includes(cat);
                    const displayName = cat.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

                    return (
                      <label
                        key={cat}
                        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-600 p-2 rounded transition-colors duration-150"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([...selectedCategories, cat]);
                            } else {
                              setSelectedCategories(selectedCategories.filter(c => c !== cat));
                            }
                          }}
                          className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-500 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
                        />
                        <span className="text-white text-sm">{displayName}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {((yearRange.min !== minYear || yearRange.max !== maxYear) || selectedCategories.length > 0) && (
                <div className="bg-gray-700/50 rounded p-3">
                  <p className="text-sm font-semibold text-gray-300 mb-2">Active Filters:</p>
                  {(yearRange.min !== minYear || yearRange.max !== maxYear) && (
                    <p className="text-xs text-gray-400">Years: {yearRange.min} - {yearRange.max}</p>
                  )}
                  {selectedCategories.length > 0 && (
                    <p className="text-xs text-gray-400">Categories: {selectedCategories.length}</p>
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-2 mt-6 pt-4 border-t border-gray-700">
              <button
                onClick={() => {
                  onFetchMovie();
                  setFilterMenuOpen(false);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded font-semibold transition-colors duration-200"
              >
                Apply & New Game
              </button>
              <button
                onClick={() => {
                  setYearRange({ min: minYear, max: maxYear });
                  setSelectedCategories([]);
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
