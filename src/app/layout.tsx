import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// Navigation bar creation. This will be displayed on every page.

function TopNavBar(){
  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl border-b font-semibold">
      <div>Gallery</div>

      <div>Sign In</div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
      <body>
        <TopNavBar/>
        {children}
      </body>
    </html>
  );
}
