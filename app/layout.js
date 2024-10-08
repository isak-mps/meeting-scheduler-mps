import { Inter,Outfit,Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/Navbar";

const inter = Outfit({ subsets: ["latin"] });

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "MPS-Scheduling-App",
  description: "Generated by MPS",
};

export function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <footer
          style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}
        >
          © 2024 MPS
        </footer>
      </body>
    </html>
  );
}