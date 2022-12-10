import {ThemeProvider as NextThemesProvider} from "next-themes";
import {NextUiTheme, lightTheme, darkTheme} from "~/components/layout/NextUITheme";
import "~/styles/globals.css";

function MyApp({Component, pageProps}) {
    const themeClasses = {
        light: lightTheme.className,
        dark: darkTheme.className
    };

    return (
        // 2. Use at the root of your app
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={themeClasses}
        >
            <NextUiTheme>
                <Component {...pageProps} />
            </NextUiTheme>
        </NextThemesProvider>

    );
}

export default MyApp;
