import {ReactNode} from "react";
import styles from "./Layout.module.scss";
import {Background} from "~/components/layout/Background";

interface Props {
    children: ReactNode;
}

const RootLayout = ({children}: Props) => {
    return (
        <div className={styles.layoutWrapper}>
            <div className={styles.bg}>
                <Background />
            </div>
            <div className={styles.layout}>
                {/*<Navbar />*/}
                {children}
            </div>
        </div>
    );
};
export default RootLayout;
