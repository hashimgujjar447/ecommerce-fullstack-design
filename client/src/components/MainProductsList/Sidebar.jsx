import React, { useState } from "react";
import CustomCheckBox from "../CustomCheckBox";
import SideBarMoreCategories from "./SideBarMoreCategories";

const initialFilters = {
  categories: [
    { id: 1, title: "Mobile accessory", selected: false },
    { id: 2, title: "Electronics", selected: false },
    { id: 3, title: "Smartphones", selected: false },
    { id: 4, title: "Modern tech", selected: false },
  ],
  brands: [
    { id: 1, title: "Samsung", selected: true },
    { id: 2, title: "Apple", selected: true },
    { id: 3, title: "Huawei", selected: false },
    { id: 4, title: "Pocco", selected: true },
    { id: 5, title: "Lenovo", selected: false },
  ],
  features: [
    { id: 1, title: "Metallic", selected: true },
    { id: 2, title: "Plastic cover", selected: false },
    { id: 3, title: "8GB Ram", selected: false },
    { id: 4, title: "Super power", selected: false },
    { id: 5, title: "Large Memory", selected: false },
  ],
};

const Sidebar = () => {
  const [filters, setFilters] = useState(initialFilters);

  const handleToggle = (section, id) => {
    setFilters((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    }));
  };

  return (
    <div className="space-y-4 pr-2  text-sm text-gray-700">
      {Object.entries(filters).map(([section, items]) => (
        <div key={section} className="border-t-1 border-[#DEE2E7] pb-4 pt-2 ">
          <div className="flex items-center mb-5 justify-between">
            <h3 className="font-semibold capitalize text-[16px] text-[#1C1C1C] ">
              {section}
            </h3>
            <img
              src="/assets/angleTop.png"
              alt=""
              className="w-[12px] h-[8px]"
            />
          </div>
          {section !== "categories" && (
            <div className="space-y-2">
              {items.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center space-x-3 text-sm"
                >
                  <CustomCheckBox />

                  <span className="text-[16px] text-[#1C1C1C]">
                    {item.title}
                  </span>
                </label>
              ))}
            </div>
          )}

          {/* Still show item titles for "categories" */}
          {section === "categories" && (
            <ul className="space-y-2 ">
              {items.map((item) => (
                <li key={item.id} className="text-[16px] text-[#505050]">
                  {item.title}
                </li>
              ))}
            </ul>
          )}
          <div className="text-blue-600 text-[16px] mt-2 cursor-pointer">
            See all
          </div>
        </div>
      ))}
      <div>
        <SideBarMoreCategories />
      </div>
    </div>
  );
};

export default Sidebar;
