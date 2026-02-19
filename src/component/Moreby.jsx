import { Bookmark, Heart } from "lucide-react";
import React from "react";

const Moreby = () => {
  const more = [
    {
      id: "1",
      image:
        "https://cdn.dribbble.com/userupload/9097055/file/original-53aecb2a7460b2f6c4c70ebe4f5c3638.png?format=webp&resize=800x600&vertical=center",
      title: "Capacity - Live Chat Agent Manager ",
      heart: <Heart size={15} />,
      bookmark: <Bookmark size={15} />,
    },
    {
      id: "2",
      image:
        "https://cdn.dribbble.com/userupload/9096400/file/original-cdc9ee3ba52aaa9497f416997bfd19a2.png?format=webp&resize=800x600&vertical=center",
      title: "Capacity - Live Chat Agent Manager ",
      heart: <Heart size={15} />,
      bookmark: <Bookmark size={15} />,
    },
    {
      id: "3",
      image:
        "https://cdn.dribbble.com/userupload/9096456/file/original-6bb6a5a71708ab22e4c8284b000216e6.png?format=webp&resize=800x600&vertical=center",
      title: "User Availability Controls",
      heart: <Heart size={15} />,
      bookmark: <Bookmark size={15} />,
    },
    {
      id: "4",
      image:
        "https://cdn.dribbble.com/userupload/7991616/file/original-2da0fc3e516e4ac9a41b4e04af3b0b48.png?format=webp&resize=800x600&vertical=center",
      title: "Capacity - Live Chat Agent Manager ",
      heart: <Heart size={15} />,
      bookmark: <Bookmark size={15} />,
    },
  ];
  return (
    <div className="w-full flex justify-center mt-18">
      <div className="w-[80%] flex flex-col justify-center">
        <div className="flex justify-between">
          <h1 className="font-bold">More by Danny Amacher</h1>
          <a className="crouser-pointer hover:text-muted " href="">
            View profile
          </a>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {more.map((item, index) => {
            return (
              <div key={index} className="relative group">
                <div className="" >
                  <img src={item.image} alt="" className="rounded-2xl" />
                </div>
                <div className="absolute w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bottom-0 py-4  bg-muted/50 flex justify-around items-center font-bold">
                  <h1>{item.title}</h1>
                  <a href="" className="size-10 rounded-full bg-background flex justify-center items-center">{item.heart}</a>
                  <a href="" className="size-10 rounded-full bg-background flex justify-center items-center">{item.bookmark}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Moreby;
