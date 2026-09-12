"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu as MenuIcon } from "lucide-react";
import { Menu } from "@base-ui/react/menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isGroupActive(pathname: string, item: NavItem) {
  return (item.children ?? []).some((child) => isActive(pathname, child.href));
}

const linkClass = (active: boolean) =>
  cn(
    "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
    active ? "text-primary" : "text-muted-foreground",
  );

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav aria-label="Primary" className="hidden md:block">
      <ul className="flex items-center gap-1">
        {navigation.map((item) =>
          item.children ? (
            <li key={item.href}>
              <Menu.Root modal={false}>
                <Menu.Trigger
                  className={cn(
                    linkClass(isGroupActive(pathname, item)),
                    "inline-flex items-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                  )}
                >
                  {item.label}
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </Menu.Trigger>
                <Menu.Portal>
                  <Menu.Positioner sideOffset={8} align="start" className="z-50">
                    <Menu.Popup className="min-w-44 rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border outline-none">
                      {item.children.map((child) => (
                        <Menu.Item
                          key={child.href}
                          render={<Link href={child.href} />}
                          className={cn(
                            "block cursor-pointer rounded-md px-3 py-2 text-sm transition-colors outline-none hover:bg-muted data-highlighted:bg-muted",
                            isActive(pathname, child.href) ? "text-primary" : "text-foreground",
                          )}
                        >
                          {child.label}
                        </Menu.Item>
                      ))}
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Root>
            </li>
          ) : (
            <li key={item.href}>
              <Link
                href={item.href}
                className={linkClass(isActive(pathname, item.href))}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
      {navigation.map((item) => (
        <div key={item.href}>
          <SheetClose
            render={<Link href={item.href} />}
            className={cn(
              "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
              isActive(pathname, item.href) ? "text-primary" : "text-foreground",
            )}
          >
            {item.label}
          </SheetClose>
          {item.children && (
            <div className="mt-1 ml-3 flex flex-col gap-1 border-l border-border pl-3">
              {item.children
                .filter((child) => child.href !== item.href)
                .map((child) => (
                  <SheetClose
                    key={child.href}
                    render={<Link href={child.href} />}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted",
                      isActive(pathname, child.href) ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {child.label}
                  </SheetClose>
                ))}
            </div>
          )}
        </div>
      ))}
      <Button render={<Link href="/admissions" />} className="mt-3">
        Apply Now
      </Button>
    </nav>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.jpeg"
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-md"
            priority
          />
          <span className="font-heading text-lg leading-tight font-semibold text-primary">
            {site.name}
            <span className="block text-xs font-medium text-muted-foreground">Mankessim</span>
          </span>
        </Link>

        <DesktopNav pathname={pathname} />

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:inline-flex" />
          <Button render={<Link href="/admissions" />} className="hidden md:inline-flex">
            Apply Now
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
            >
              <MenuIcon className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>{site.name}</SheetTitle>
              </SheetHeader>
              <MobileNav pathname={pathname} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
