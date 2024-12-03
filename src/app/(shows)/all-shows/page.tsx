"use client";
import { Box } from "@chakra-ui/react";
import { EventListAll } from "@/components/features/shows/ShowsList/EventListAll/EventListAll";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function AllShowsPage() {
  return (
    <>
      {/* <AuthRedirect to="/login" condition="loggedOut" /> */}
      <Box
        paddingBlock={{ base: "6", md: "10" }}
        paddingInline={{ base: "5", md: "10" }}
      >
        <EventListAll />
      </Box>
    </>
  );
}
