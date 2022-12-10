import {Navbar, Link, Text} from "@nextui-org/react";
import {NavThemeSelector} from "./NavThemeSelector";
import {UserMenu} from "~/components/layout/Navbar/UserMenu";

const menuItems = [
    {label: "Home", url: ""},
    {label: "My Team", url: "team"}
];

const _Navbar = () => {

    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand css={{"@xs": {w: "12%"}}}>
                <Text b color="inherit" hideIn="xs">
                    ACME
                </Text>
            </Navbar.Brand>

            <Navbar.Content enableCursorHighlight
                activeColor="secondary"
                hideIn="xs"
                css={{overflow: "hidden"}}
                variant="highlight-rounded">
                {menuItems.map(({label, url}) => <Navbar.Link key={label} href={url}>{label}</Navbar.Link> )}
            </Navbar.Content>
            <Navbar.Content css={{"@xs": {w: "12%", jc: "flex-end"}}}>
                <>
                    <NavThemeSelector />
                    <UserMenu />
                </>
            </Navbar.Content>
            <Navbar.Collapse>
                {menuItems.map(({label, url}, index) => (
                    <Navbar.CollapseItem key={label}
                        activeColor="secondary"
                        css={{color: index === menuItems.length - 1 ? "$error" : ""}}
                        isActive={index === 2}>
                        <Link color="inherit"
                            css={{minWidth: "100%"}}
                            href={url}>
                            {label}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
};
export {_Navbar as Navbar};
