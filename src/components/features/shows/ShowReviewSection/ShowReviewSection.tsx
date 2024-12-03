"use client";
import { Box, Spinner, Grid, Text } from "@chakra-ui/react";
import { EventDetailsContainer } from "../ShowDetails/ShowDetailsContainer"; // Updated import
import { useParams } from "next/navigation";

export const ShowReviewSection = () => {
  const params = useParams();

  if (!params.id) {
    return <div>Event ID is missing.</div>;
  }

  return (
    <Box p={4} marginBottom="40">
      {/* Updated to display event details */}
      <EventDetailsContainer eventId={params.id as string} />
    </Box>
  );
};
