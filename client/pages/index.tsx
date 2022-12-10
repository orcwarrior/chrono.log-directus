import React from "react";
import Layout from "~/components/layout/layout";
import Head from "next/head";
import {CalendarViewport} from "~/components/home/CalendarViewport/CalendarViewport";

const Index = () => {
    return (
        <Layout>
            <Head>
                <title>Chrono.log - Home</title>
            </Head>
            <CalendarViewport />
        </Layout>
    );
};

export default Index;
