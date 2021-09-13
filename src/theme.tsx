import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};
const brandRing = {
  _focus: {
    ring: 0,
  },
};
const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#FFE9D6",
        100: "#FFD3AD",
        200: "#FFBE85",
        300: "#FFA85C",
        400: "#FF9233",
        500: "#FF871F",
        600: "#F57200",
        700: "#CC5F00",
        800: "#A34C00",
        900: "#7A3900",
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts.heading}`,
      body: `Inter, ${base.fonts.body}`,
    },
    components: {
      MenuItem: {
        baseStyle: {
          _hover: {
            bgColor: "red"
          }
        }
      },
      Button: {
        baseStyle: {
          rounded: "1",
          ...brandRing,
        },

        variants: {
          success: (props: any) => ({
            rounded: "1",
            color: mode("gray.200", "gray.700")(props),
            backgroundColor: mode("green.500", "green.300")(props),
            _hover: {
              backgroundColor: mode("green.600", "green.400")(props),
            },
            _active: { backgroundColor: mode("green.100", "green.100")(props) },
          }),
          successOutline: (props: any) => ({
            rounded: "1",
            color: mode("gray.800", "green.200")(props),
            border: "1px",
            borderColor: mode("green.500", "green.500")(props),
            backgroundColor: "transparent",
            _hover: {
              backgroundColor: mode("green.50", "#00800048")(props),
              borderColor: mode("green.600", "green.300")(props),
            },
          }),

          secondary: (props: any) => ({
            rounded: "1",
            color: mode("gray.200", "gray.700")(props),
            backgroundColor: mode("gray.500", "gray.300")(props),
            _hover: {
              backgroundColor: mode("gray.600", "gray.400")(props),
            },
            _active: { backgroundColor: mode("gray.100", "gray.100")(props) },
          }),
          secondaryOutline: (props: any) => ({
            rounded: "1",
            color: mode("gray.800", "gray.50")(props),
            border: "1px",
            borderColor: mode("gray.500", "gray.500")(props),
            backgroundColor: "transparent",
            _hover: {
              backgroundColor: mode("gray.300", "#8080805b")(props),
              borderColor: mode("gray.600", "gray.300")(props),
            },
          }),
          danger: (props: any) => ({
            rounded: "none",
            color: mode("gray.200", "gray.50")(props),
            backgroundColor: mode("red.500", "red.400")(props),
            _hover: {
              backgroundColor: mode("red.600", "red.500")(props),
            },
            _active: { backgroundColor: mode("red.300", "red.200")(props) },
          }),
          dangerOutline: (props: any) => ({
            rounded: "1",
            color: mode("gray.800", "red.100")(props),
            border: "1px",
            borderColor: mode("red.300", "red.500")(props),
            backgroundColor: "transparent",
            _hover: {
              backgroundColor: mode("red.50", "#ff000028")(props),
              borderColor: mode("red.600", "red.300")(props),
            },
          }),
        },
      },
      Select: { ...inputSelectStyles },
      Input: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Button", "IconButton", ],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select","MenuItem"],
  })
);

export default theme;
