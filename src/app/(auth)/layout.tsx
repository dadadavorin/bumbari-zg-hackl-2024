"use client";
import { Flex, Box } from "@chakra-ui/react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      bg={{ base: "purple.300", md: "purple.500" }}
      color="white"
      minHeight="100vh"
      width="100%"
      paddingBlock="0"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Flex>
  );
}
