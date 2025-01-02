import "./globals.css";
import Navbar from "./components/ui/Navbar";
// import { auth } from "./auth";

export const metadata = {
  title: "Portfolio V3",
  description: "My Portfolio",
  keywords: "yengflix, movie streaming, free watch, free streaming",
  referrer: "origin"
};

export default async function RootLayout({ children }) {
  // const session = await auth();
  // console.log(session)

  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <body className="bg-[var(--background)] relative grid grid-cols-[auto,1fr]">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}