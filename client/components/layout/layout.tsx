import {ReactNode} from "react";
import {Navbar} from "~/components/layout/Navbar";

interface Props {
    children: ReactNode;
}

const RootLayout = ({children}: Props) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};
export default RootLayout;
