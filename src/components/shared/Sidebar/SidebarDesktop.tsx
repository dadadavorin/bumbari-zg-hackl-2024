"use client";
import { Box, Image, Text } from "@chakra-ui/react";
import { SidebarLinks } from "./SidebarLinks";

export const SidebarDesktop = () => {
  return (
    <Box px="6" py="8" position="sticky" top="0" height="80vh">
      <Text fontSize="xl" fontWeight="bold" mb="4" color="white">
        Bumbari
      </Text>
      <SidebarLinks />
    </Box>
  );
};
