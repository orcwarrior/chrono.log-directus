import React from "react";
import {createTheme, NextUIProvider} from "@nextui-org/react";
import ConfigType from "@nextui-org/react/types/theme/types";
import Theme = ConfigType.Theme;
import {useTheme} from "next-themes";

const baseTheme: Theme["theme"] = {
    space: {},
    fonts: {sans: "'Montserrat', 'Segoe UI', sans-serif"}
};

const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
        ...baseTheme,
        colors: {
            // brand colors
            primaryLight: "$green200",
            primaryLightHover: "$green300",
            primaryLightActive: "$green400",
            primaryLightContrast: "$green600",
            primary: "#4ADE7B",
            primaryBorder: "$green500",
            primaryBorderHover: "$green600",
            primarySolidHover: "$green700",
            primarySolidContrast: "$white",
            primaryShadow: "$green500",

            gradient: "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
            link: "#5E1DAD",

            // you can also create your own color
            myColor: "#ff4ecd"

            // ...  more colors
        }
    }
});
const lightTheme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
        ...baseTheme,
        colors: {
            // brand colors
            primaryLight: "$green500",
            primaryLightHover: "$green600",
            primaryLightActive: "$green700",
            primaryLightContrast: "$green900",
            primary: "#4ADE7B",
            primaryBorder: "$green500",
            primaryBorderHover: "$green600",
            primarySolidHover: "$green700",
            primarySolidContrast: "$white",
            primaryShadow: "$green500",

            gradient: "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
            link: "$blue600",

            // you can also create your own color
            myColor: "#ff4ecd"

            // ...  more colors
        }
    }
}
);

const NextUiTheme = ({children}: React.PropsWithChildren) => {
    const {theme, systemTheme} = useTheme();
    const currentTheme = (theme !== "system") ? theme : systemTheme;
    const nextUITheme = currentTheme === "dark" ? darkTheme : lightTheme;
    return (
        <NextUIProvider theme={nextUITheme}>
            {children}
        </NextUIProvider>
    );
};

export {darkTheme, lightTheme, NextUiTheme};
