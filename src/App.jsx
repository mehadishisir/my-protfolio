import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import GrainOverlay from "./components/GrainOverlay";
import PageLoader from "./components/PageLoader";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <GrainOverlay />
      <ScrollProgress />
      <div className="min-h-screen bg-paper font-body">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <BackToTop />
    </BrowserRouter>
  );
}
