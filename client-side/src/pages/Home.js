import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HomeComponent from "../components/HomePage";
export default function HomePage() {
  return (
    <>
      <main style={{ display: "flex" }}>
        <Sidebar />
        <div className="homepage-container">
          <Navbar />
          <HomeComponent />
        </div>
      </main>
    </>
  );
}
