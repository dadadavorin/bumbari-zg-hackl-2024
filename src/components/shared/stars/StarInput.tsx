import { StarIcon } from "./StarIcon";
import { IStar } from "@/typings/Star.type";

interface StarInputProps extends IStar {
  register: any;
}

export const StarInput = ({ id, register }: StarInputProps) => {
  return (
    <>
      <label
        aria-label={`${id}-star`}
        className="rating-label"
        htmlFor={`rating-${id}`}
      >
        <StarIcon />
      </label>
      <input
        className="rating-input"
        {...register("rating")}
        id={`rating-${id}`}
        value={id}
        type="radio"
      />
    </>
  );
};
