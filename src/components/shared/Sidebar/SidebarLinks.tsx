import { Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export const SidebarLinks = () => {
  const currentPath = usePathname();

  // Function to check if the route is active
  const isActive = (path: string) => currentPath === path;

  // Define color scheme for active and default states
  const defaultColorScheme = useBreakpointValue({
    base: "purple",
    md: "purpleDark",
  });
  const activeColorScheme = useBreakpointValue({
    base: "purpleLight",
    md: "purple",
  });

  return (
    <Flex direction="column" height="100%" justifyContent="space-between">
      <Flex direction="column" gap="4">
        <Button
          as={NextLink}
          href="/all-shows"
          colorScheme={
            isActive("/all-shows") ? activeColorScheme : defaultColorScheme
          }
          variant="solid"
          size="sm"
        >
          Svi eventi
        </Button>

        <Button
          as={NextLink}
          href="/top-rated"
          colorScheme={
            isActive("/top-rated") ? activeColorScheme : defaultColorScheme
          }
          variant="solid"
          size="sm"
        >
          Najpopularniji
        </Button>
      </Flex>
    </Flex>
  );
};
