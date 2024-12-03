import { Grid } from "@chakra-ui/react";
import { EventCard } from "../../EventCard/EventCard";
import { IEventList, IEvent } from "@/typings/Event.type";

export interface IEventListProps {
  eventLists: IEventList;
}

export const EventList = ({ eventLists }: IEventListProps) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap="5"
      marginBottom="20"
    >
      {eventLists.events.map((event: IEvent) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Grid>
  );
};
