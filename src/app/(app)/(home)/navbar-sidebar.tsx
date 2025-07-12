import  Link  from "next/link";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";


interface NavbarItem {
    href: string;
    children: React.ReactNode;
}

interface Props {
    items: NavbarItem[];
    open: boolean
    onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = (
    { items, open, onOpenChange }: Props) => {
        return (
            <Sheet open={open} onOpenChange={onOpenChange}>
                <SheetContent
                    side="left"
                    className="p-0 transition-none"
                >
                    <SheetHeader className="p-4 border-b">
                        <SheetTitle>
                                Menu
                        </SheetTitle> 
                    </SheetHeader>
                    <ScrollArea className="flex flex-col h-full pb-2 overflow-y-auto">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center w-full p-4 text-base font-medium text-left hover:bg-black hover:text-white"
                                onClick={() => onOpenChange(false)}
                            >
                                {item.children}
                            </Link>
                        ))}
                        <div className="border-t">
                            <Link href="/sign-in" className="flex items-center w-full p-4 text-base font-medium text-left hover:bg-black hover:text-white" onClick={() => onOpenChange(false)}>
                                Sign In
                            </Link>
                            <Link href="/sign-up" className="flex items-center w-full p-4 text-base font-medium text-left hover:bg-black hover:text-white" onClick={() => onOpenChange(false)}>
                                Sign Up
                            </Link>
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>    
        )
};