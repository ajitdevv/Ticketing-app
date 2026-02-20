import React from "react";
import { ChevronDown } from "lucide-react";

const DropdownToggle = ({ label, isOpen, onToggle, className = "" }) => {
  return (
    <div
      onClick={onToggle}
      className={`flex gap-1 items-center group cursor-pointer ${className}`}
    >
      <span className="text-foreground group-hover:text-muted">
        {label}
      </span>

      <span
        className={`mt-1 transition-transform duration-300 group-hover:text-muted ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <ChevronDown size={15} />
      </span>
    </div>
  );
};

export default DropdownToggle;