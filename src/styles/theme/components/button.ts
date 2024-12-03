import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "default",
  },
  sizes: {
    md: {
      px: "50px",
      py: "20px",
      maxWidth: "min-content",
      fontSize: "sm",
      height: "auto",
      borderRadius: "lg",
    },
    sm: {
      py: "2",
      px: "5",
      maxWidth: "min-content",
      fontSize: "2xl",
      height: "auto",
    },
  },

  variants: {
    solid: defineStyle((props) => {
      const { colorScheme: c } = props;

      if (c === "purple") {
        return {
          bg: "purple.300",
          color: "white",
          fontWeight: "normal",

          _hover: {
            bg: "purple.100",
            color: "white",
          },
        };
      } else if (c === "purpleDark") {
        return {
          bg: "purple.500",
          color: "white",
          fontWeight: "normal",

          _hover: {
            bg: "purple.300",
            color: "white",
            fontWeight: "medium",
          },
        };
      } else {
        return {
          bg: "white",
          color: "purple.300",
          fontWeight: "medium",
          textTransform: "uppercase",

          _hover: {
            bg: "purple.100",
            color: "white",
          },
        };
      }
    }),
    link: defineStyle((props) => {
      const { colorScheme: c } = props;

      if (c === "purple") {
        return {
          bg: "transparent",
          color: "purple.300",
          fontWeight: "normal",

          _hover: {
            bg: "transparent",
            color: "purple.300",
          },
        };
      } else if (c === "purpleLight") {
        return {
          bg: "transparent",
          color: "purple.100",
          fontWeight: "normal",

          _hover: {
            bg: "transparent",
            color: "purple.100",
          },
        };
      } else {
        return {
          bg: "transparent",
          color: "white",
          fontWeight: "normal",

          _hover: {
            bg: "transparent",
            color: "white",
          },
        };
      }
    }),
  },
});

export default Button;
