import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Gallery from "./pages/Gallery";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

function App() {
  return (
    <>
      <div className="flex justify-end">
        <NavigationMenu className="w-full" viewport={false}>
          <NavigationMenuLink>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <Link to="/dashboard">Dashboard</Link>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <Link to="/gallery">Gallery</Link>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <Link to="/upload">Upload</Link>
          </NavigationMenuLink>
        </NavigationMenu>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
