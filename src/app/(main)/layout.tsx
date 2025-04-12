import Navbar from "@/components/Navbar/Navbar";
import "./main.css";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="main">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="page">{children}</div>
      </div>
    </main>
  );
}
