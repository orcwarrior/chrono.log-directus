import React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";
import {CssBaseline} from "@nextui-org/react";


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles])
        };
    }

    render() {
        const css = CssBaseline.flush();
        return (
            <Html lang="en">
                <Head>
                    {css}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    {/* Montserrat */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,600;0,800;0,900;1,300;1,400;1,700&display=swap"
                        rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
