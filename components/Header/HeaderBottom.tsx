import {
    Bars3Icon,
    MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import { useSession } from "next-auth/react"
const HeaderBottom = ({ handleOpenMenu }: any) => {
    const { data: session } = useSession();
    return (
        <>
            <div className="bg-amazon-blue_dark md:bg-amazon-blue_light flex items-center py-2 px-4 md:space-x-4 text-white max-md:-mt-1 max-md:pb-4">
                <div
                    onClick={handleOpenMenu}
                    className="hidden md:flex items-center cursor-pointer mr-2 text-lg"
                >
                    <Bars3Icon className="h-7 mr-1" />
                    <span className="font-bold text-sm">All</span>
                </div>
                <div className="flex flex-grow max-md:overflow-x-scroll scrollbar-hide text-sm whitespace-nowrap ">
                    <ul className="flex space-x-4">
                        <li className=""><Link href="/browse">Deals</Link></li>
                        <li className=""><Link href="/browse">Customer Service</Link></li>
                        <li className=""><Link href="/browse">Registery</Link></li>
                        <li className=""><Link href="/browse">Gift Cards</Link></li>
                        <li className=""><Link href="/browse">Electoronics</Link></li>
                        {session?.user?.role === 'admin' && (
                            <Link href="/admin/dashboard">Admin Panel</Link>
                        )}
                    </ul>
                </div>
                <div className="hidden md:inline text-sm">
                    {session?.user?.role === 'admin' && (
                        <Link href="/admin/dashboard">Admin Panel</Link>
                    )}

                </div>
            </div>


        </>
    );
}

export default HeaderBottom;