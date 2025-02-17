import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-t, var(--spo-color-2), var(--spo-color-4))",
        fontFamily: "'Poppins', serif",
        color: "var(--spo-color-1)"
      },
      h2: {
        color: "var(--spo-color-1)"
      },
      h3: {
        color: "var(--spo-color-1)"
      },
      p: {
        color: "var(--spo-color-1)"
      }
    }
  }
})

export default theme