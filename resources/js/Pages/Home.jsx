import { InertiaLink } from "@inertiajs/inertia-react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import UserLayout from "../layouts/UserLayout";
import Footer from "../components/Footer";
import { Head, router } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import ManikinHome from "@/components/Home/ManikinHome";
import CPRHome from "@/components/Home/CPRHome";
import SkeletonHome from "@/components/Home/SkeletonHome";
import MicroscopeHome from "@/components/Home/MicroscopeHome";
import AestheticsHome from "@/components/Home/AestheticsHome";
import ChildDummyHome from "@/components/Home/ChildDummyHome";
import InjectionArm from "@/components/Home/InjectionArm";
import EtTubeHome from "@/components/Home/EtTubeHome";
import AnatomyHome from "@/components/Home/AnatomyHome";
import HeartHome from "@/components/Home/HeartHome";
import OvaryHome from "@/components/Home/OvaryHome";
import ButtockHome from "@/components/Home/ButtockHome";
import DeliveryHome from "@/components/Home/DeliveryHome";
import PosterHome from "@/components/Home/PosterHome";
import SkullHome from "@/components/Home/SkullHome";
import SkinHome from "@/components/Home/SkinHome";
import PregnancyHome from "@/components/Home/PregnancyHome";
import CervicalHome from "@/components/Home/CervicalHome";
import BreastHome from "@/components/Home/BreastHome";
import BloodCollectionNeedleHome from "@/components/Home/BloodCollectionNeedleHome";
import SutureKitHome from "@/components/Home/SutureKitHome";
import DressingBoxHome from "@/components/Home/DressingBoxHome";
import SurgicalPenHome from "@/components/Home/SurgicalPenHome";

export default function Home() {
    return (
        <UserLayout>
            <Head title="Home" />

            <Typography
                color="#ababab"
                fontSize={{ xs: 17, sm: 17, md: 22 }}
                fontWeight={{ xs: 400, sm: 400, md: 600 }}
                my={3}
                align="center"
            >
                Our Trending Teaching supplies
            </Typography>
            <Box
                sx={{
                    mt: 5,
                    mb: 7,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                    justifyContent: "space-around",
                    alignItems: "center",
                    px: { xs: 0, sm: 0, md: 7 },
                }}
            >
                <Box>
                    <Grid container columnSpacing={1.5}>
                        <Grid item>
                            <ManikinHome />
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" rowSpacing={2}>
                                <Grid item>
                                    <CPRHome />
                                </Grid>
                                <Grid item>
                                    <SkeletonHome />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box my={5}>
                    <MicroscopeHome />
                </Box>
            </Box>

            {/* Practicing model section  */}
            <Container maxWidth="md">
                <Typography
                    fontSize={30}
                    color="primary"
                    fontWeight={400}
                    align="center"
                    my={6}
                >
                    Practicing Models
                </Typography>
                <Box
                    my={3}
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    gap={5}
                >
                    <Box
                        my={3}
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <AestheticsHome />
                        <ChildDummyHome />
                    </Box>
                    <Box
                        width="40%"
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                    >
                        <Typography
                            fontSize={18}
                            fontWeight="bold"
                            gutterBottom
                        >
                            Practicing models help
                        </Typography>
                        <Typography
                            fontSize={14}
                            paragraph
                            sx={{ textIndent: 40 }}
                        >
                            Welcome to the future of medical education with
                            Practicing Medical Models. Our platform offers a
                            revolutionary and immersive way for medical
                            professionals, students, and enthusiasts to enhance
                            their knowledge and skills.{" "}
                        </Typography>
                        <Typography
                            fontSize={14}
                            paragraph
                            sx={{ textIndent: 40 }}
                        >
                            At Practicing Medical Models, we believe that the
                            best way to learn and excel in the field of
                            healthcare is through hands-on practice.
                        </Typography>
                    </Box>
                </Box>

                <Box my={5}>
                    <InjectionArm />
                </Box>
            </Container>

            <Container maxWidth="sm">
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 5,
                        justifyContent: "space-around",
                        alignItems: "center",
                        my: 5,
                    }}
                >
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <ButtockHome />
                            </Grid>
                            <Grid item xs={6}>
                                <DeliveryHome />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>

            <Container maxWidth="md">
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 4,
                        mt: "72px",
                    }}
                >
                    <EtTubeHome />
                    <Box sx={{ width: { xs: "70%", sm: "50%", md: "30%" } }}>
                        <Typography fontSize={22} fontWeight={400} gutterBottom>
                            Realistic Simulations
                        </Typography>
                        <Typography
                            fontSize={14}
                            paragraph
                            sx={{ textIndent: 25 }}
                        >
                            Transform your teaching methods with our engaging
                            platform.
                        </Typography>
                        <Typography
                            fontSize={14}
                            paragraph
                            sx={{ textIndent: 25 }}
                        >
                            Perfect your skills and build confidence before
                            stepping into the clinic.
                        </Typography>
                    </Box>
                </Box>
            </Container>

            <Divider sx={{ margin: "30px auto", width: "50%" }} />

            <Grid
                container
                alignItems="center"
                mb={8}
                mt={4}
                spacing={5}
                justifyContent="center"
            >
                <Grid item xs={12} md={9}>
                    <Grid
                        container
                        justifyContent="space-evenly"
                        spacing={3}
                        px={{ xs: 0, sm: 0, md: 7 }}
                    >
                        <Grid item xs={12} md={5}>
                            <Box>
                                <BloodCollectionNeedleHome />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box>
                                <SurgicalPenHome />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Container maxWidth="xs">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <SutureKitHome />
                    </Grid>
                    <Grid item xs={6}>
                        <DressingBoxHome />
                    </Grid>
                </Grid>
            </Container>

            {/* Demostration model section  */}
            <Typography
                fontSize={22}
                color="orange"
                fontWeight={600}
                align="center"
                mt={8}
                mb={5}
            >
                Demostration Models
            </Typography>

            <Container maxWidth="xs">
                <Grid container columnSpacing={1.5}>
                    <Grid item xs={6}>
                        <AnatomyHome />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="column" rowSpacing={2}>
                            <Grid item>
                                <HeartHome />
                            </Grid>
                            <Grid item>
                                <OvaryHome />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box my={7}>
                    <PosterHome />
                </Box>
                <Grid container my={7} spacing={1}>
                    <Grid item xs={4}>
                        <SkullHome />
                    </Grid>
                    <Grid item xs={4}>
                        <SkinHome />
                    </Grid>
                    <Grid item xs={4}>
                        <PregnancyHome />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={7}>
                    <Grid item xs={6}>
                        <CervicalHome />
                    </Grid>
                    <Grid item xs={6}>
                        <BreastHome />
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </UserLayout>
    );
}
