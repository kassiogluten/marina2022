import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: "Raleway",
    body: "Raleway",
    // heading: "CaviarDreams",
    // body: "CaviarDreams",
  },
  colors: {
    laranja: "#FF4201",
    amarelo: "#FFC903",
    verde: "#8F9924",
    rosa: "#F2034F",
    bege: "#F2E0C7",
    cinza: "#666666",
    claro: {
      laranja: "#FF541A",
      amarelo: "#FFD436",
      verde: "#ABC95E",
      rosa: "#FA788A",
    },
    escuro: {
      laranja: "#CC3600",
      amarelo: "#E6B503",
      verde: "#737A1C",
      rosa: "#C20340",
    },
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          // textDecoration: "underline",
        },
      },
    },
  },
  styles: {
    global: {
      // svg: {
      //   display: "inline",
      //   lineHeight: "1",
      // },
      a: {
        _hover: {
          //textDecoration: "underline",
        },
      },
      body: {
        bg: "bege",
        // color: "var(--white)",
        // lineHeight: "inherit",
      },
      button: {
        _focus: { outlineColor: "#00000011" },
      },
    },
  },
});
