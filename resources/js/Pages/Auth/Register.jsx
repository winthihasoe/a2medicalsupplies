import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ApplicationLogo from "@/components/ApplicationLogo";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Container>
            <Head title="Register" />
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
                    my: 4,
                }}
            >
                <Typography
                    align="center"
                    mb={2}
                    fontSize={22}
                    fontWeight={400}
                >
                    Register
                </Typography>
                <Box>
                    <Typography>name:</Typography>
                    <TextField
                        onChange={(e) => setData("name", e.target.value)}
                        name="name"
                        size="small"
                        type="text"
                        fullWidth
                        value={data.name}
                    />
                    <InputError message={errors.name} />
                </Box>
                <Box>
                    <Typography>Email:</Typography>
                    <TextField
                        onChange={(e) => setData("email", e.target.value)}
                        name="email"
                        type="email"
                        size="small"
                        fullWidth
                        value={data.email}
                    />
                    <InputError message={errors.email} />
                </Box>
                <Box>
                    <Typography>Phone:</Typography>
                    <TextField
                        onChange={(e) => setData("phone", e.target.value)}
                        name="phone"
                        type="number"
                        size="small"
                        fullWidth
                        value={data.phone}
                    />
                    <InputError message={errors.phone} />
                </Box>
                <Box>
                    <Typography>Passowrd:</Typography>
                    <TextField
                        onChange={(e) => setData("password", e.target.value)}
                        name="password"
                        type="password"
                        size="small"
                        fullWidth
                        value={data.password}
                    />
                    <InputError message={errors.password} />
                </Box>
                <Box>
                    <Typography>Confirm Passowrd:</Typography>
                    <TextField
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        name="confirm_password"
                        type="password"
                        size="small"
                        fullWidth
                    />
                    <InputError message={errors.password_confirmation} />
                </Box>
                <Typography fontSize={14}>
                    Already have an account?{" "}
                    <Link href={route("login")}>Login!</Link>
                </Typography>
                <Box px={6} mb={3}>
                    <Button
                        size="small"
                        fullWidth
                        variant="contained"
                        onClick={submit}
                        disabled={processing}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </Container>
        // <GuestLayout>
        //     <Head title="Register" />

        //     <form onSubmit={submit}>
        //         <div>
        //             <InputLabel htmlFor="name" value="Name" />

        //             <TextInput
        //                 id="name"
        //                 name="name"
        //                 value={data.name}
        //                 className="mt-1 block w-full"
        //                 autoComplete="name"
        //                 isFocused={true}
        //                 onChange={(e) => setData('name', e.target.value)}
        //                 required
        //             />

        //             <InputError message={errors.name} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="email" value="Email" />

        //             <TextInput
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 onChange={(e) => setData('email', e.target.value)}
        //                 required
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
        //                 autoComplete="new-password"
        //                 onChange={(e) => setData('password', e.target.value)}
        //                 required
        //             />

        //             <InputError message={errors.password} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

        //             <TextInput
        //                 id="password_confirmation"
        //                 type="password"
        //                 name="password_confirmation"
        //                 value={data.password_confirmation}
        //                 className="mt-1 block w-full"
        //                 autoComplete="new-password"
        //                 onChange={(e) => setData('password_confirmation', e.target.value)}
        //                 required
        //             />

        //             <InputError message={errors.password_confirmation} className="mt-2" />
        //         </div>

        //         <div className="flex items-center justify-end mt-4">
        //             <Link
        //                 href={route('login')}
        //                 className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //             >
        //                 Already registered?
        //             </Link>

        //             <PrimaryButton className="ml-4" disabled={processing}>
        //                 Register
        //             </PrimaryButton>
        //         </div>
        //     </form>
        // </GuestLayout>
    );
}
