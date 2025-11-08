"use client";

import { Camera } from "lucide-react";
import { getAllSettings } from "@/lib/settings";
interface Settings {
  company_name?: string;
  company_slogan?: string;
}
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export function TeamSwitcher() {
  const [settings, setSettings] = useState<Settings>({});

  useEffect(() => {
    (async () => {
      const allSettings = await getAllSettings();
      setSettings(allSettings);
    })();
  }, []);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Camera className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {settings.company_name}
                </span>
                <span className="truncate text-xs">
                  {settings.company_slogan}
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
