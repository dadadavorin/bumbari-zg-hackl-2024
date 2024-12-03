import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import Textarea from "./components/textarea";
import { Card } from "./components/card";
import { Modal } from "./components/modal";
import { Input } from "./components/input";
import Select from "./components/select";
import radii from "./foundations/radius";
import fonts from "./foundations/fonts";
import fontSizes from "./foundations/fontSizes";
import fontWeights from "./foundations/fontWeights";
import colors from "./foundations/colors";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = extendTheme({
  components: {
    Button,
    Card,
    Textarea,
    Modal,
    Input,
    Select,
  },
  colors,
  fonts,
  radii,
  fontSizes,
  fontWeights,
});

export default theme;
