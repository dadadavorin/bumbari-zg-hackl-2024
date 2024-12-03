"use client";
import {
  Image,
  Flex,
  useDisclosure,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Select,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SidebarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        bgGradient="linear(to-r, #019BB0, #004699)"
        paddingTop="9"
        paddingInline="5"
        gap="4"
      >
        <Box className="logo-bumblebee">
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
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon
              color="white"
              marginLeft="4"
              fontSize="18"
              marginTop="3"
            />
          </InputLeftElement>
          <Input
            type="text"
            variant="outline"
            borderRadius="lg"
            placeholder="Pretraži evente..."
            color="white"
            _placeholder={{ color: "white" }}
          />
        </InputGroup>
      </Flex>
      <Flex gap="2" paddingInline="4" paddingTop="4">
        <Select placeholder="Filters" size="md" color="#333333" variant="white">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="Date" size="md" color="#333333" variant="white" />
        <Select placeholder="Price" size="md" color="#333333" variant="white" />
        <Select
          placeholder="Category"
          size="md"
          color="#333333"
          variant="white"
        />
      </Flex>
    </Box>
  );
};
