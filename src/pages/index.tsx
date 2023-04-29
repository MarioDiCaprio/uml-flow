import {NextPage} from "next";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import {Box, Button, Grid, Typography} from "@mui/material";
import {IoIosArrowForward as ArrowIcon} from "react-icons/io";
import {useRouter} from "next/router";


const Index: NextPage = () => {
    const router = useRouter();

    function redirectToFlow() {
        router.push('/flow');
    }

    return (
        <>
            <Head>
                <title>UML Flow | Home</title>
            </Head>
            <Navbar />

            <Grid container height="100vh">
               <Grid item md="6" sm="12" height="100%" display="flex" alignItems="center" justifyContent="end">

                   <Box width={{ md: "600px", sm: "100%" }} maxWidth="100%" padding="40px">
                       <Typography variant="h2" color="primary" fontWeight="800">
                           Plan everything
                       </Typography>
                       <Typography variant="h2" fontWeight="800">
                           with intuitive diagram tools
                       </Typography>
                       <Typography variant="body1" color="text.secondary" margin="15px 0 15px 0" lineHeight="1.4rem">
                           UML Flow offers a flexible suite to help you plan and model
                           solutions faster. Start today and plan architectures with beautiful,
                           comprehensive diagrams!
                       </Typography>
                       <Box>
                           <Button sx={{ padding: "13px 20px 13px 20px" }} onClick={redirectToFlow}>
                               Get Started <ArrowIcon fontSize="1.3rem" style={{ marginLeft: '5px' }}/>
                           </Button>
                       </Box>
                   </Box>

               </Grid>
                <Grid item md="6" paddingLeft="30px" display={{ md: 'unset', sm: 'none' }}>

                    <Box width="100%" height="85vh" borderRadius="0 0 0 10px" sx={{ background: theme => theme.palette.alternative }}>

                    </Box>

                </Grid>
            </Grid>
        </>
    );
}

// noinspection JSUnusedGlobalSymbols
export default Index;