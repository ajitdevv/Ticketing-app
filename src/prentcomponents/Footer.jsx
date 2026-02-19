import React from "react";

const Footer = () => {
  const leftLinks = ["Terms", "Privacy", "Cookies"];
  const rightLinks = [
    "Jobs",
    "Designers",
    "Freelancers",
    "Tags",
    "Places",
    "Resources",
  ];

  return (
    <div className="w-full pt-22 p-11">
      <div className="flex justify-between items-center text-muted text-sm">
        <div className="flex items-center gap-6">
          <p>© 2026 Dribbble</p>
          {leftLinks.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer hover:text-foreground transition"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {rightLinks.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer hover:text-foreground transition"
            >
              {item}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Footer;
