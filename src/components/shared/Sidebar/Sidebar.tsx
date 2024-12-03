"use client";
import { SidebarDesktop } from "./SidebarDesktop";
import { Show, Hide } from "@chakra-ui/react";
import { SidebarMobile } from "./SidebarMobile";

export const Sidebar = () => {
  return (
    <>
      <Show above="md">
        <SidebarDesktop />
      </Show>
      <Hide above="md">
        <SidebarMobile />
      </Hide>
    </>
  );
};
