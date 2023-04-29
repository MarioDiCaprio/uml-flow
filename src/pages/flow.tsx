import {NextPage} from "next";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import FlowContext from "@/components/_flow/FlowContext/FlowContext";


const Flow: NextPage = () => {
    return (
        <>
            <Head>
                <title>UML Flow | Flow</title>
            </Head>
            <Navbar />
            <FlowContext />
        </>
    );
}

// noinspection JSUnusedGlobalSymbols
export default Flow;