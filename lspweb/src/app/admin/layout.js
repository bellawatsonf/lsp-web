import "./../globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  console.log(children, "child");
  return (
    <div>
      <p>layout admin</p>
      {children}
    </div>
  );
}
