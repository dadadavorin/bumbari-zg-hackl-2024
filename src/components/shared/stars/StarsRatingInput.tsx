import { Flex, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { StarInput } from "./StarInput";

interface StarsRatingInputProps {
  register: any;
  errors: any;
  required?: boolean;
}

export const StarsRatingInput = ({
  register,
  errors,
  required = false,
}: StarsRatingInputProps) => {
  return (
    <FormControl isInvalid={required && !!errors.rating}>
      <Flex className="stars-rating">
        <input
          defaultChecked
          className="rating-input rating-input--none"
          {...register("rating", {
            required: required ? "Rating is required" : false,
            validate: (value: string) =>
              parseInt(value) > 0 || "Rating must be greater than 0",
          })}
          id="rating-none"
          value="0"
          type="radio"
        />
        <StarInput id="1" register={register} />
        <StarInput id="2" register={register} />
        <StarInput id="3" register={register} />
        <StarInput id="4" register={register} />
        <StarInput id="5" register={register} />
      </Flex>
      <FormErrorMessage>
        {errors.rating && errors.rating.message}
      </FormErrorMessage>
    </FormControl>
  );
};
