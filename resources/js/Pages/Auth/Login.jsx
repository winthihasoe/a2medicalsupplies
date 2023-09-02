import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ApplicationLogo from "@/components/ApplicationLogo";

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

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Container>
            <Head title="Login" />
            <Box align="center" my={3}>
                <ApplicationLogo />
            </Box>

            <Box
                sx={{
                    width: 280,
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
                        onChange={(e) => setData("password", e.target.value)}
                        type="password"
                        value={data.password}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </Box>
                <Typography fontSize={14}>
                    Don't have an account?{" "}
                    <Link href={route("register")}>Create one</Link>
                </Typography>
                <Box px={6} mb={3}>
                    <Button
                        disabled={processing}
                        size="small"
                        fullWidth
                        variant="contained"
                        onClick={submit}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
        // <GuestLayout>
        //     <Head title="Log in" />

        //     {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

        //     <form onSubmit={submit}>
        //         <div>
        //             <InputLabel htmlFor="email" value="Email" />

        //             <TextInput
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 isFocused={true}
        //                 onChange={(e) => setData('email', e.target.value)}
        //             />

        //             <InputError message={errors.email} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password" value="Password" />

        //             <TextInput
        //                 id="password"
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="current-password"
        //                 onChange={(e) => setData('password', e.target.value)}
        //             />

        //             <InputError message={errors.password} className="mt-2" />
        //         </div>

        //         <div className="block mt-4">
        //             <label className="flex items-center">
        //                 <Checkbox
        //                     name="remember"
        //                     checked={data.remember}
        //                     onChange={(e) => setData('remember', e.target.checked)}
        //                 />
        //                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
        //             </label>
        //         </div>

        //         <div className="flex items-center justify-end mt-4">
        //             {canResetPassword && (
        //                 <Link
        //                     href={route('password.request')}
        //                     className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //                 >
        //                     Forgot your password?
        //                 </Link>
        //             )}

        //             <PrimaryButton className="ml-4" disabled={processing}>
        //                 Log in
        //             </PrimaryButton>
        //         </div>
        //     </form>
        // </GuestLayout>
    );
}
