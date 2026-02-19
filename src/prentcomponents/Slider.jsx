import React from "react";

const Slider = () => {
  const data = [
    {
      id: 1,
      image:
        "https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=400x300&vertical=center",
      title: "Illustration",
    },
    {
      id: 2,
      image:
        "https://cdn.dribbble.com/userupload/43116735/file/original-7e9933176612c3078d3c47f53926f3fc.jpg?format=webp&resize=400x300&vertical=center",
      title: "Print",
    },
    {
      id: 3,
      image:
        "https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=400x300&vertical=center",
      title: "Product Design",
    },
    {
      id: 4,
      image:
        "https://cdn.dribbble.com/userupload/45110813/file/a14323e6644d4485ee89f540dd058df4.jpg?crop=0x0-1600x1200&format=webp&resize=400x300&vertical=center",
      title: "Typography",
    },
    {
      id: 5,
      image:
        "https://cdn.dribbble.com/userupload/16328392/file/original-89f6591f2e6436c0c05aa6addc02ff89.png?format=webp&resize=400x300&vertical=center",
      title: "Animation",
    },
    {
      id: 6,
      image:
        "https://cdn.dribbble.com/userupload/44414028/file/390e010d2d59cba8e03a85bb5d7eb0b9.jpg?format=webp&resize=400x300&vertical=center",
      title: "Branding",
    },
    {
      id: 7,
      image:
        "https://cdn.dribbble.com/userupload/45854573/file/70a6cbc104791ba4ae64fcf8ef4d13d5.png?format=webp&resize=400x300&vertical=center",
      title: "Mobile",
    },
    {
      id: 7,
      image:
        "https://cdn.dribbble.com/userupload/44841174/file/still-8858a51dce4472159585b86092e4acae.png?format=webp&resize=400x300&vertical=center",
      title: "Web designe",
    },
  ];

  return (
    <div className="w-full overflow-hidden mt-40 py-10 bg-background">
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
            
    .slider-track:hover {
      animation-play-state: paused;
    }
        `}
      </style>

      <div
        className="flex whitespace-nowrap slider-track"
        style={{
          animation: "scrollLeft 25s linear infinite",
        }}
      >
        {[...data, ...data].map((item, index) => (
          <div
            key={index}
            className="mx-6 flex flex-col items-center min-w-62.5"
          >
            <div className="w-62.5 h-42.5 rounded-xl overflow-hidden bg-gray-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
