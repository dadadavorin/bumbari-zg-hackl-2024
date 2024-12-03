import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const outline = definePartsStyle({
  field: {
    border: "2px solid",
    borderRadius: "lg",
    paddingBlock: "6",
    paddingLeft: "12",
    color: "white",
  },
});

export const Input = defineMultiStyleConfig({
  variants: { outline },
});
