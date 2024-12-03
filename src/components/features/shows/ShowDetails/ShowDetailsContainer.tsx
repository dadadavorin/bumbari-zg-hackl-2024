"use client";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Spinner,
  VStack,
  Flex,
  Badge,
} from "@chakra-ui/react";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { FaLocationDot } from "react-icons/fa6";

interface EventDetailsContainerProps {
  eventId: string;
}

export const EventDetailsContainer = ({
  eventId,
}: EventDetailsContainerProps) => {
  const {
    data: eventItemResponse,
    error,
    isLoading,
  } = useSWR(swrKeys.eventItem(eventId), fetcher);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  // Extract event details from the API response
  const fields = eventItemResponse?.fields || {};
  const eventDetails = {
    name: fields.name || "Event title not found",
    description: fields.description || "Event description not found",
    image_url: fields.image?.[0]?.url || null, // Access the first image's URL or use null if unavailable
    date: fields.date || "Date not available",
    location: fields.lokacija || "Location not provided",
    price: fields.price || 0,
  };

  // Ensure eventDetails.date is converted to a Date object
  const eventDate = new Date(eventDetails.date);

  const formattedDate = eventDate
    .toLocaleDateString("en-GB")
    .replace(/\//g, "."); // Format: DD.MM.YYYY
  const formattedTime = eventDate.toLocaleTimeString("hr", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card size="xl">
      <Image
        src={
          eventDetails.image_url ??
          "https://fakeimg.pl/1200x800?text=Event+image"
        }
        alt="Event image"
        h="400px"
        w="100%"
        fit="cover"
      />
      <CardBody>
        <VStack align="start" spacing={4}>
          <Flex justify="space-between" w="100%">
            <Badge fontSize="1rem" colorScheme="gray">
              {formattedDate}
            </Badge>
            <Badge fontSize="1rem" colorScheme="gray">
              {formattedTime}
            </Badge>
          </Flex>
          <Heading fontSize="4xl" color="#333333">
            {eventDetails.name}
          </Heading>
          <Text fontSize="lg" color="#333333">
            {eventDetails.description}
          </Text>

          <Flex align="center" gap="4">
            <FaLocationDot size={24} color="gray" />
            <Text fontSize="lg">{eventDetails.location}</Text>
          </Flex>

          <Flex justifyContent="flex-end" w="100%">
            <Badge fontSize="1rem" colorScheme="green">
              {eventDetails.price === 0
                ? "Besplatno"
                : `$${eventDetails.price}`}
            </Badge>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
};
