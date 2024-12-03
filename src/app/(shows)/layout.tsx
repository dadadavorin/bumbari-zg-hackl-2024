import { Sidebar } from "@/components/shared/Sidebar/Sidebar";
import { Flex, Grid } from "@chakra-ui/react";
import { BottomNav } from "@/components/shared/BottomNav/BottomNav";

export default function ShowsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "1fr 3fr",
      }}
      bgGradient="linear(to-r, #019BB0, #004699)"
    >
      <Sidebar />
      {children}
      <BottomNav />
    </Grid>
  );
}
