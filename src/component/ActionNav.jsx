import React from "react";

const ActionNav = () => {
  const links = [
    "For designers",
    "Hire talent",
    "Inspiration",
    "Advertising",
    "Blog",
    "About",
    "Careers",
    "Support",
  ];

  return (
    <div className="flex gap-3 items-center">
      {links.map((item, index) => (
        <p
          key={index}
          className="cursor-pointer text-foreground transition-colors"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default ActionNav;
