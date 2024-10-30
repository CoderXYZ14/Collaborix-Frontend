import { useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";
import axios from "axios";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const accessToken = userData?.accessToken;
      if (!accessToken) {
        console.error("No access token found.");
        return;
      }

      await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        {},
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("logout success");
      dispatch(logout());
      localStorage.removeItem("userData");
      localStorage.removeItem("accessToken");

      toast.success("User logged out successfully !!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Error logging out. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
      console.error(
        "Logout failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onSelect={() => console.log("Profile clicked")}>
            Profile
          </MenubarItem>
          <Link to="/contribute-questions">
            <MenubarItem>Contribute</MenubarItem>
          </Link>
          <MenubarSeparator />
          <MenubarItem onSelect={() => console.log("Help clicked")}>
            Help
          </MenubarItem>
          <MenubarItem onSelect={handleLogout}>Sign Out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default UserMenu;
