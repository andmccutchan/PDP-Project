import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-end">
      <NavigationMenu className="w-full" viewport={false}>
        <NavigationMenuLink asChild>
          <Link to="/">Home</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link to="/dashboard">Dashboard</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link to="/gallery">Gallery</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link to="/upload">Upload</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            className="bg-slate-700 px-4 py-1 rounded text-stone-200"
            to="/login"
          >
            Login
          </Link>
        </NavigationMenuLink>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
