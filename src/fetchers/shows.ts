import { IShow } from "@/typings/Show.type";
import { fetcher } from "./fetcher";
import { swrKeys } from "./swrKeys";

interface IShowListResponse {
  shows: Array<IShow>;
}
