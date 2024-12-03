import { defineStyleConfig } from "@chakra-ui/react";

const Textarea = defineStyleConfig({
  baseStyle: {
    borderRadius: "default",
    paddingInline: "10",
    paddingBlock: "7",
  },
  variants: {
    white: {
      bg: "white",
      color: "purple.100",
      _placeholder: {
        color: "purple.100",
      },
    },
  },
});

export default Textarea;
