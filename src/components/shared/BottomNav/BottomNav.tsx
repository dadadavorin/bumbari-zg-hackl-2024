"use client";
import { Flex, Icon, Box } from "@chakra-ui/react";
import {
  AtSignIcon,
  SearchIcon,
  StarIcon,
  LinkIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { FaHouse, FaHeart, FaTicket, FaUser } from "react-icons/fa6";
import NextLink from "next/link";

export const BottomNav = () => {
  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="white"
      borderTop="1px solid"
      borderColor="gray.200"
      justifyContent="space-around"
      alignItems="center"
      p={2}
      zIndex={10}
    >
      <Box as={NextLink} href="/all-shows">
        <FaHouse size={24} color="gray" />
      </Box>
      <FaHeart size={24} color="gray" />
      <Box
        bg="white"
        color="white"
        borderRadius="full"
        p={2}
        boxSize={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        shadow="md"
      >
        <Icon viewBox="0 0 42 52" boxSize="2rem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="52"
            viewBox="0 0 42 52"
            fill="none"
          >
            <rect
              width="18.1328"
              height="8.79924"
              rx="4.39962"
              transform="matrix(0.873179 -0.4874 0.512707 0.858564 3.04358 15.948)"
              fill="#FFD800"
            />
            <rect
              width="8.54386"
              height="3.06738"
              rx="1.53369"
              transform="matrix(0.791474 0.611202 -0.636914 0.770935 1.95374 3.9165)"
              fill="#333333"
            />
            <rect
              width="8.37268"
              height="3.12852"
              rx="1.56426"
              transform="matrix(0.139465 0.990227 -0.991445 0.130522 11.9404 -0.00012207)"
              fill="#333333"
            />
            <rect
              width="14.4834"
              height="8.79924"
              rx="4.39962"
              transform="matrix(0.873179 -0.4874 0.512707 0.858564 21.7285 44.4452)"
              fill="#333333"
            />
            <rect
              width="39.3693"
              height="8.79924"
              rx="4.39962"
              transform="matrix(0.873179 -0.4874 0.512707 0.858564 0 30.7604)"
              fill="#333333"
            />
            <rect
              width="32.811"
              height="8.79924"
              rx="4.39962"
              transform="matrix(0.873179 -0.4874 0.512707 0.858564 8.83862 39.4918)"
              fill="#FFD800"
            />
          </svg>
        </Icon>
      </Box>
      <FaTicket size={24} color="gray" />
      <FaUser size={24} color="gray" />
    </Flex>
  );
};
