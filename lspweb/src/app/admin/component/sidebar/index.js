"use client";

import { MenuItem, MenuList } from "@mui/material";
import sidebarStyle from "./sidebarstyle.module.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PersonPinIcon from "@mui/icons-material/PersonPin";

export default function Sidebar() {
  return (
    <>
      <div className={`${sidebarStyle.boxMenu}`}>
        <div className={`${sidebarStyle.boxlogo}`}>
          <img src="https://www.crayon.co/hubfs/Horizontal_4C_WHTWordmark-1.svg" />
        </div>
        <div className={`${sidebarStyle.boxListMenu}`}>
          <MenuList sx={{ fontSize: "20px", letterSpacing: "3px" }}>
            <div className={`${sidebarStyle.boxlist}`}>
              <MenuItem>
                <PersonPinIcon sx={{ marginRight: "5px" }} />
                Asesi
              </MenuItem>
            </div>
            <div className={`${sidebarStyle.boxlist}`}>
              <MenuItem>
                <PersonPinIcon sx={{ marginRight: "5px" }} />
                Skema Sertifikasi
              </MenuItem>
            </div>
            <div className={`${sidebarStyle.boxlist}`}>
              <MenuItem>
                <PersonPinIcon sx={{ marginRight: "5px" }} />
                Unit Kompetensi
              </MenuItem>
            </div>
            <div className={`${sidebarStyle.boxlist}`}>
              <MenuItem>
                <PersonPinIcon sx={{ marginRight: "5px" }} />
                Asesi
              </MenuItem>
            </div>
          </MenuList>
        </div>
      </div>
    </>
  );
}
