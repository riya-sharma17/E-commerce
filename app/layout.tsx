// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Nunito } from "next/font/google";
// import "./globals.css";
// import { STRINGS } from "@/utils/string";
// import ReduxProvider from "@/store/ReduxProvider";
// import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const nunito = Nunito({
//   variable: "--font-nunito",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: STRINGS.APP_TITLE,
//   description: STRINGS.APP_DESCRIPTION,
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
//       >
//         <ReduxProvider>
//           <>
//             {children}
//             <Toaster />
//           </>
//         </ReduxProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import { STRINGS } from "@/utils/string";
import ReduxProvider from "@/store/ReduxProvider";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header"; // ✅ ADD THIS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: STRINGS.APP_TITLE,
  description: STRINGS.APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >
        <ReduxProvider>
          {/* HEADER — FULL WIDTH, NO PADDING */}
          <Header />

          {/* PAGE CONTENT — PADDED */}
          <main className="main-wrapper">
            {children}
          </main>

          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
