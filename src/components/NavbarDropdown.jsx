import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const NavbarDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-blue-600 transition font-medium">
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-72 bg-white shadow-xl rounded-xl border p-3 z-50">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg hover:bg-gray-100 transition"
            >
              <p className="font-semibold text-gray-800">
                {item.name}
              </p>
              {item.description && (
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;