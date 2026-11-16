import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;