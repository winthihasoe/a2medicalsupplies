import { useEffect } from "react";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ApplicationLogo from "@/components/ApplicationLogo";
import { useRef } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const buttonRef = useRef();

    const handleKeyPress = (e) => {
        if (e.key == "Enter") {
            buttonRef.current.click();
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Container maxWidth="xs">
            <Head title="Login" />
            <Box align="center" my={3}>
                <ApplicationLogo />
            </Box>
            <form onSubmit={submit}>
                <Box
                    sx={{
                        margin: "2px auto",
                        border: "2px solid #cdcdcd",
                        borderRadius: 5,
                        py: 2,
                        px: 4,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                    }}
                >
                    <Typography
                        align="center"
                        mb={2}
                        fontSize={22}
                        fontWeight={400}
                    >
                        Login
                    </Typography>

                    <Box>
                        <Typography>Email:</Typography>
                        <TextField
                            size="small"
                            fullWidth
                            onChange={(e) => setData("email", e.target.value)}
                            value={data.email}
                            type="email"
                        />
                        <InputError
                            message={errors.email}
                            className="mt-2 text-xs"
                        />
                    </Box>
                    <Box>
                        <Typography>Passowrd:</Typography>
                        <TextField
                            size="small"
                            fullWidth
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                            value={data.password}
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </Box>
                    <Typography fontSize={14}>
                        Don't have an account?{" "}
                        <Link href={route("register")}>Create new account</Link>
                    </Typography>
                    <Box px={6} mb={3}>
                        <Button
                            disabled={processing}
                            size="small"
                            fullWidth
                            variant="contained"
                            type="submit"
                            ref={buttonRef}
                            onKeyDown={handleKeyPress}
                        >
                            Login
                        </Button>
                    </Box>
                </Box>
            </form>
        </Container>
    );
}
