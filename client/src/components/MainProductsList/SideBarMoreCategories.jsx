import React, { useState } from "react";
import CustomCheckBox from "../CustomCheckBox";

const initialFilters = {
  "Price range": [
    { id: 1, title: "$0 - $100", selected: false },
    { id: 2, title: "$100 - $500", selected: false },
    { id: 3, title: "$500 - $1000", selected: false },
  ],
  Condition: [
    { id: 1, title: "New", selected: false },
    { id: 2, title: "Used", selected: false },
    { id: 3, title: "Refurbished", selected: false },
  ],
  Ratings: [
    { id: 1, title: "4 stars & up", selected: false },
    { id: 2, title: "3 stars & up", selected: false },
  ],
  Manufacturer: [
    { id: 1, title: "Samsung", selected: false },
    { id: 2, title: "Apple", selected: false },
    { id: 3, title: "Huawei", selected: false },
  ],
};

const SideBarMoreCategories = () => {
  const [filters, setFilters] = useState(initialFilters);
  const [openSections, setOpenSections] = useState({});

  const handleToggle = (section, id) => {
    setFilters((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    }));
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="space-y-2 pr-2 text-sm text-gray-700">
      {Object.entries(filters).map(([section, items]) => (
        <div key={section} className="border-t border-[#DEE2E7] pb-2 pt-2">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection(section)}
          >
            <h3 className="font-semibold text-[16px] text-[#1C1C1C] capitalize">
              {section}
            </h3>
            <img
              src={
                openSections[section]
                  ? "/assets/angleTop.png"
                  : "/assets/angleDown.png"
              }
              alt=""
              className="w-[12px] h-[8px]"
            />
          </div>

          {openSections[section] && (
            <div className="space-y-2 mt-4">
              {items.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center space-x-3 text-sm"
                >
                  <input
                    type="checkbox"
                    className="accent-blue-600 w-4 h-4"
                    checked={item.checked}
                    onChange={() => handleToggle(section, item.id)}
                  />
                  <span className="text-[16px] text-[#1C1C1C]">
                    {item.title}
                  </span>
                </label>
              ))}
              <div className="text-blue-600 text-[16px] mt-2 cursor-pointer">
                See all
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBarMoreCategories;
