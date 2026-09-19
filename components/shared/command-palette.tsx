"use client";

import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import { useCommandPalette } from "@/components/shared/command-palette-context";
import { searchIndex, type SearchItem } from "@/lib/search-index";

const groupOrder: SearchItem["group"][] = ["Pages", "Programmes", "Admissions FAQ", "News"];

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const router = useRouter();

  function handleSelect(item: SearchItem) {
    setOpen(false);
    router.push(item.href);
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Popup
          data-slot="dialog-content"
          className="fixed top-24 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-xl bg-popover text-popover-foreground shadow-lg ring-1 ring-border outline-none data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0"
        >
          <DialogPrimitive.Title className="sr-only">Search</DialogPrimitive.Title>
          <Command className="flex flex-col" shouldFilter>
            <Command.Input
              autoFocus
              placeholder="Search programmes, admissions FAQs, news…"
              className="w-full border-b border-border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">
                No results found.
              </Command.Empty>
              {groupOrder.map((group) => {
                const items = searchIndex.filter((item) => item.group === group);
                if (items.length === 0) return null;
                return (
                  <Command.Group
                    key={group}
                    heading={group}
                    className="px-2 py-1.5 text-xs font-medium text-muted-foreground [&_[cmdk-group-items]]:mt-1"
                  >
                    {items.map((item) => (
                      <Command.Item
                        key={item.id}
                        value={`${item.label} ${item.description ?? ""}`}
                        onSelect={() => handleSelect(item)}
                        className="cursor-pointer rounded-md px-3 py-2 text-sm text-foreground data-[selected=true]:bg-muted"
                      >
                        {item.label}
                      </Command.Item>
                    ))}
                  </Command.Group>
                );
              })}
            </Command.List>
          </Command>
        </DialogPrimitive.Popup>
      </DialogPortal>
    </DialogPrimitive.Root>
  );
}
