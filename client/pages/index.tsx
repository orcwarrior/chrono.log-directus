import React from "react";
import {Text} from "@nextui-org/react";
import Layout from "~/components/layout/layout";
import Head from "next/head";

const Index = () => {
    return (
        <Layout>
            <Head>
                <title>Chrono.log - Home</title>
            </Head>
            <Text h1>
                This is content for Home
            </Text>
        </Layout>
    );
};

export default Index;
