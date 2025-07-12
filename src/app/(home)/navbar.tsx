"use client";

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import { NavbarSidebar } from './navbar-sidebar';



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700'],
});

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
};

const NavbarItem = ({
    href,
    children,
    isActive,
}: NavbarItemProps) => {
    return (
        <Button
            asChild 
            variant="outline"
            className={cn(
                "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
                isActive && "bg-black text-white hover:bg-black hover:text-white",
            )}    
        >
            <Link href={href}>
                {children}
            </Link>
        </Button>
    );
};

const navbarItems = [
    { href: '/', children: 'Home' },
    { href: '/about', children: 'About' },
    { href: '/contact', children: 'Contact' },
    { href: '/blog', children: 'Blog' },
];

export const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <nav className="flex justify-between h-20 font-medium bg-white border-b">
            <Link href="/" className='flex items-center pl-6'>
                <span className={cn("text-5xl font-semibold", poppins.className)}>
                    WeBay
                </span>
            </Link>

            <NavbarSidebar
                items={navbarItems}
                open={isSidebarOpen}
                onOpenChange={setIsSidebarOpen}
            />

            <div className="items-center hidden gap-4 lg:flex">
                {navbarItems.map((item) => (
                    <NavbarItem
                        key={item.href}
                        href={item.href}
                        isActive={pathname === item.href}
                    >
                        {item.children}
                    </NavbarItem>
                ))}
                    
            </div>

            <div className='hidden lg:flex'>
                <Button
                    asChild
                    variant="secondary"
                    className="h-full px-12 text-lg transition-colors bg-white border-t-0 border-b-0 border-l border-r-0 rounded-none hover:bg-pink-400 "
                >
                    <Link href="/sign-in">
                        Sign In
                    </Link>
                </Button>
                <Button
                    asChild
                    variant="secondary"
                    className="h-full px-12 text-lg text-white transition-colors bg-black border-t-0 border-b-0 border-l border-r-0 rounded-none hover:bg-pink-400 hover:text-black"
                >
                    <Link href="/sign-up">
                        Sign Up
                    </Link>
                </Button>

            </div>
            <div className='flex items-center justify-center lg:hidden'>
                <Button
                    variant="ghost"
                    className="bg-white border-transparent size 12"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <MenuIcon />
                </Button>
            </div>
        </nav>
    );
};