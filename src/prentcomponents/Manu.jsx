import React, { useState } from "react";
import DropdownToggle from "../component/ArrowSet";
import {
  Trophy,
  HelpCircle,
  FileText,
  FilePlus,
  Briefcase,
  Users,
  Tag,
  Sparkles,
  TrendingUp,
  Newspaper,
  ArrowRightIcon,
  BookOpen,
  BookmarkCheckIcon,
  LucideLayoutList,
  BadgeHelp,
  Instagram,
  Youtube,
  Linkedin,
  Github,
} from "lucide-react";
const Manu = ({ open }) => {
  let [hide1, sethide1] = useState(false);
  let [hide2, sethide2] = useState(false);
  let [hide3, sethide3] = useState(false);
  let [hide4, sethide4] = useState(false);
  const h1name = [
    { id: 1, name: "Product Design" },
    { id: 2, name: "Web Design" },
    { id: 3, name: "Animation" },
    { id: 4, name: "Branding" },
    { id: 5, name: "Illustration" },
    { id: 6, name: "Mobile" },
    { id: 7, name: "Typography" },
    { id: 8, name: "Print" },
  ];
  return (
    <div
      className={`${open ? "w-[93%] w- max-h-[calc(100vh-76px)]  absolute top-19 bg-foreground/80 z-98" : "w-0 h-0 top-19 absolute hidden"} transition-all duration-500`}
    >
      <div className="max-h-[calc(100vh-76px)] overflow-y-auto  py-7 bg-background flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <DropdownToggle
            label="Explore"
            isOpen={hide1}
            onToggle={() => sethide1(!hide1)}
            className="text-xl font-bold"
          />
          {hide1 ? (
            <div className="flex flex-col gap-7">
              <div className="text-[16px] text-foreground font-semibold flex flex-col gap-7 ">
                <div className="flex gap-2 items-center">
                  <TrendingUp size={20} />
                  <h1>Popular</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <Sparkles size={20} />
                  <h1>New and Noteworthy</h1>
                </div>
              </div>
              <hr className="border border-muted" />
              <div className="flex flex-col gap-7">
                {h1name.map((item) => {
                  return (
                    <div key={item.id}>
                      <h1 className="text-muted hover:text-foreground text-sm">
                        {item.name}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-5">
          <DropdownToggle
            label="Hire Talent"
            isOpen={hide2}
            onToggle={() => sethide2(!hide2)}
            className="text-xl font-bold"
          />
          {hide2 ? (
            <div className="flex flex-col gap-7 text-[15px] text-foreground font-semibold">
              <div className="flex gap-2 items-center">
                <div className="relative w-6 h-6 -mt-8">
                  <FileText className="w-6 h-6" />
                  <Sparkles className="w-3 h-3 absolute top-0 right-0" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1>Start Project Brief</h1>
                  <h2 className="text-muted text-sm">
                    Get recommendations and proposals
                  </h2>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Users className="-mt-8" size={20} />
                <div className="flex flex-col gap-2">
                  <h1>Browse Profiles</h1>
                  <h2 className="text-muted text-sm">
                    Find and message talent directly
                  </h2>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Tag className="-mt-8" size={20} />
                <div className="flex flex-col gap-2">
                  <h1>Explore Services</h1>
                  <h2 className="text-muted text-sm">
                    Hire quickly with pre-packaged services
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex gap-1 items-center">
                  <h1 className="font-bold">Post a Full-Time Job</h1>
                  <ArrowRightIcon size={20} />
                </div>
                <hr className="border border-muted" />
                <div className="flex gap-2 items-center text-xs text-muted ">
                  <BookOpen size={20} />
                  <h1>Learn more about how hiring works on Dribbble →</h1>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-5">
          <DropdownToggle
            label="Get Hired"
            isOpen={hide3}
            onToggle={() => sethide3(!hide3)}
            className="text-xl font-bold"
          />
          {hide3 ? (
            <div className="flex flex-col gap-7 text-[15px] text-foreground font-semibold">
              <div className="flex gap-2 items-center">
                <FileText size={20} className="-mt-8" />
                <div className="flex flex-col gap-2">
                  <h1>Browse Project Briefs</h1>
                  <h2 className="text-muted text-sm">
                    Send proposals to clients
                  </h2>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <BookmarkCheckIcon className="-mt-8" size={20} />
                <div className="flex flex-col gap-2">
                  <h1>Add a Service</h1>
                  <h2 className="text-muted text-sm">
                    Let clients purchase your services
                  </h2>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Briefcase className="-mt-8" size={20} />
                <div className="flex flex-col gap-2">
                  <h1>Apply to Full-Time Jobs</h1>
                  <h2 className="text-muted text-sm">View open design roles</h2>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-5">
                  {" "}
                  <div className="flex gap-1 items-center">
                    <h1 className="font-bold">Upgrade to Pro </h1>
                    <ArrowRightIcon size={20} />
                  </div>
                  <div className="flex gap-1 items-center">
                    <h1 className="font-bold">Advertise with Us </h1>
                    <ArrowRightIcon size={20} />
                  </div>
                </div>
                <hr className="border border-muted" />
                <div className="flex gap-2 items-center text-xs text-muted ">
                  <BookOpen size={20} />
                  <h1>Learn more about getting hired on Dribbble →</h1>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-5">
          <DropdownToggle
            label="Community"
            isOpen={hide4}
            onToggle={() => sethide4(!hide4)}
            className="text-xl font-bold"
          />
          {hide4 ? (
            <div className="flex flex-col gap-7 text-[15px] text-foreground font-semibold">
              <div className="flex gap-2 items-center">
                <LucideLayoutList size={20} className="-mt-8" />
                <div className="flex flex-col gap-2">
                  <h1>Blog</h1>
                  <h2 className="text-muted text-sm">
                    Blog Design inspiration, stories, and tips
                  </h2>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Trophy className="-mt-8" size={20} />
                <div className="flex flex-col gap-2">
                  <h1>Playoffs</h1>
                  <h2 className="text-muted text-sm">
                    Join creative challenges and show your skills
                  </h2>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <BadgeHelp className="-mt-8" size={20} />
                <div className="flex flex-col gap-2">
                  <h1>Help Center</h1>
                  <h2 className="text-muted text-sm">
                    Get quick answers and learn how to use Dribbble
                  </h2>
                </div>
              </div>
                <hr className="border border-muted" />
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-5">
                  
                  <div className="flex gap-5 items-center text-muted">
                    <h1 className="">Follow Us</h1>
                    <Instagram size={20} />
                    <Youtube size={20} />
                    <Linkedin size={20} />
                    <Github size={20} />
                    </div>
              </div>
            </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className=" pb-7">
            <h1 className="font-bold text-xl hover:text-muted text-red-600 transition-colors duration-300">Start Project Brife</h1>
        </div>
      </div>
      <div className="bg-black/30 h-50"></div>
    </div>
  );
};

export default Manu;
