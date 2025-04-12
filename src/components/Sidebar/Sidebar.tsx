"use client";
import { JSX, useState } from "react";
import "./sidebar.css";
import { TbLayoutSidebarFilled } from "react-icons/tb";
import { IoCloudUploadOutline, IoHomeOutline } from "react-icons/io5";
import { GoClock, GoPerson } from "react-icons/go";
import { BsBookmarkStar } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logout from "../Logout/Logout";

interface INavigations {
  path: string;
  name: string;
  icon: JSX.Element;
}

const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);
  const pathName = usePathname();
  const [navigations] = useState<INavigations[]>([
    {
      path: "/apartments/short-term",
      name: "Short Term",
      icon: <GoClock size={22} />,
    },
    {
      path: "/apartments/long-term",
      name: "Long Term",
      icon: <IoHomeOutline size={21} />,
    },
    {
      path: "/bookmarks",
      name: "Bookmarks",
      icon: <BsBookmarkStar size={22} />,
    },
    {
      path: "/upload-new",
      name: "Upload",
      icon: <IoCloudUploadOutline size={22} />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <GoPerson size={22} />,
    },
  ]);
  return (
    <aside className={`${isSidebarActive ? "active" : "inactive"} sidebar`}>
      <div className="sidebar-header dotted">
        <div className="logo">
          <img
            src="/icons/logo.svg"
            alt="Logo"
            width={isSidebarActive ? 150 : 35}
            height={45}
          />
        </div>
        <div className="sidebar-controller">
          <div
            className="sidebar-controller-icon sidebar-square"
            onClick={() => setIsSidebarActive((prev) => !prev)}
          >
            <TbLayoutSidebarFilled color="#2b2b2b" size={21} />
          </div>
        </div>
      </div>
      <div className="sidebar-menu navigation">
        <ul className="navigation-list dotted">
          {navigations.map((navigation, i) => {
            return (
              <Link
                replace
                href={`${navigation.path}`}
                key={i}
                className={`navigation-link ${
                  navigation.path.startsWith(pathName) ? "active" : ""
                }`}
              >
                <li className="navigation-item">
                  <div className="menu-icon sidebar-square">
                    {navigation.icon}
                  </div>
                  <span className="navigation-item-name">
                    {navigation.name}
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-footer">
        <Logout />
      </div>
    </aside>
  );
};

export default Sidebar;
