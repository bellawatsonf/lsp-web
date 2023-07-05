"use client";

import HeaderDashboard from "../component/header";
import Sidebar from "../component/sidebar";
import styleDashboard from "./styleDashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <div className={`${styleDashboard.boxContent}`}>
        <Sidebar />
        <HeaderDashboard />
      </div>
    </>
  );
}
