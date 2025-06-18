import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
        <NavigationMenuLink>
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
