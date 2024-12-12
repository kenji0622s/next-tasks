"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavItemProps {
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
    const pathname = usePathname();
    const isActive = pathname === link;

    return (
        <div className="flex items-center gap-2">
            <Link href={link} className={`flex items-center p-4 hover:bg-gray-700 w-full font-medium gap-2 ${isActive ? "bg-gray-600 border-r-4 border-green-500" : ""}`}>
            {icon}
            {label}
            </Link>
        </div>
    )
}

export default NavItem