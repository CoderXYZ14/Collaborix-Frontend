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
import { User, PenSquare, HelpCircle, LogOut } from "lucide-react";
import useLogout from "@/custom-hooks/useLogout";

const UserMenu = () => {
  const handleLogout = useLogout();
  return (
    <Menubar className="border-0 bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-transparent data-[state=open]:bg-transparent hover:bg-transparent cursor-pointer">
          <Avatar className="w-9 h-9 ring-2 ring-violet-500/20 transition-all duration-300 hover:ring-violet-500/40">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="object-cover"
            />
            <AvatarFallback className="bg-violet-500/20 text-violet-700 dark:text-violet-300">
              CN
            </AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent className="min-w-[180px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-lg">
          <MenubarItem
            className="flex items-center gap-2 px-3 py-2 cursor-pointer text-slate-700 dark:text-slate-200 hover:bg-violet-50 dark:hover:bg-violet-900/20 focus:bg-violet-50 dark:focus:bg-violet-900/20"
            onSelect={() => console.log("Profile clicked")}
          >
            <User size={16} />
            Profile
          </MenubarItem>
          <Link to="/contribute-questions" className="block">
            <MenubarItem className="flex items-center gap-2 px-3 py-2 cursor-pointer text-slate-700 dark:text-slate-200 hover:bg-violet-50 dark:hover:bg-violet-900/20 focus:bg-violet-50 dark:focus:bg-violet-900/20">
              <PenSquare size={16} />
              Contribute
            </MenubarItem>
          </Link>
          <MenubarSeparator className="bg-slate-200 dark:bg-slate-700" />
          <MenubarItem
            className="flex items-center gap-2 px-3 py-2 cursor-pointer text-slate-700 dark:text-slate-200 hover:bg-violet-50 dark:hover:bg-violet-900/20 focus:bg-violet-50 dark:focus:bg-violet-900/20"
            onSelect={() => console.log("Help clicked")}
          >
            <HelpCircle size={16} />
            Help
          </MenubarItem>
          <MenubarItem
            className="flex items-center gap-2 px-3 py-2 cursor-pointer text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 focus:bg-red-50 dark:focus:bg-red-900/20"
            onSelect={handleLogout}
          >
            <LogOut size={16} />
            Sign Out
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default UserMenu;
