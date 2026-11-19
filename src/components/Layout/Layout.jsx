import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

<main className="pt-24 md:pt-0">
  {children}
</main>
    </div>
  );
}

export default Layout;