import React from "react";
import {useTheme} from "next-themes";
import {Navbar} from "@nextui-org/react";
import {Switch, SwitchEvent} from "@nextui-org/react";
import dynamic from "next/dynamic";

const _NavThemeSelector = () => {

    const {theme, systemTheme, setTheme} = useTheme();
    const currentTheme = (theme !== "system") ? theme : systemTheme;
    const isDarkTheme = currentTheme === "dark";

    function onThemeChange({target}: SwitchEvent) {
        const theme = (target.checked) ? "dark" : "light";
        setTheme(theme);
    }

    console.log(`currentTheme: `, currentTheme);

    return (
        <div>
            <span>Theme <Switch checked={isDarkTheme} onChange={onThemeChange} />{currentTheme}</span>
        </div>
    );
};

export const NavThemeSelector = dynamic(() => Promise.resolve(_NavThemeSelector), {ssr: false});
