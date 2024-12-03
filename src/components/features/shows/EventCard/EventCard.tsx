import { Card, CardBody, Text, Image, Flex, Badge } from "@chakra-ui/react";
import NextLink from "next/link";
import { IEvent } from "@/typings/Event.type";

export interface IEventCardProps {
  event: IEvent;
  disableLink?: boolean;
}

export const EventCard = ({ event, disableLink }: IEventCardProps) => {
  // Parse and format the date and time
  const eventDate = new Date(event.date);
  const formattedDate = eventDate
    .toLocaleDateString("en-GB")
    .replace(/\//g, "."); // Format: DD.MM.YYYY
  const formattedTime = eventDate.toLocaleTimeString("hr", {
    hour: "2-digit",
    minute: "2-digit",
  }); // Format: HH:MM AM/PM

  return (
    <Card
      as={NextLink}
      href={`/all-shows/${event.id}`}
      pointerEvents={disableLink ? "none" : "all"}
    >
      <Image
        src={event.image_url}
        alt="Event image"
        h="200px"
        w="100%"
        fit="cover"
      />
      <CardBody>
        <Text fontWeight="bold" fontSize="xl">
          {event.name}
        </Text>
        <Flex alignItems="center" justify="space-between" marginBlock="2">
          <Badge colorScheme="green">{formattedDate}</Badge>
          <Badge colorScheme="gray">{formattedTime}</Badge>
        </Flex>
        <Text noOfLines={2}>{event.description}</Text>
      </CardBody>
    </Card>
  );
};
