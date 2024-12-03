import { Spinner } from "@chakra-ui/react";
import { EventList } from "../EventList/EventList";
import { IEventList, IEvent } from "@/typings/Event.type";
import useSWR from "swr";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";

export const EventListAll = () => {
  const {
    data: rawResponse,
    error,
    isLoading,
  } = useSWR(swrKeys.events, fetcher);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  // Transform the Airtable response to match IEventList structure
  const transformEventResponse = (records: any[]): IEvent[] => {
    return records.map((record) => ({
      id: record.id,
      name: record.fields.name,
      description: record.fields.description,
      date: record.fields.date,
      image_url: record.fields.image?.[0]?.url ?? "images/placeholder.webp",
      price: record.fields.price,
      link: record.fields.link ?? "something",
    }));
  };

  const eventLists: IEventList = {
    events: transformEventResponse(rawResponse.records ?? []),
  };

  return <EventList eventLists={eventLists} />;
};
