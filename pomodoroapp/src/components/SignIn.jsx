import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./styles/SignIn.css";
import { UserContext } from "./UserContext";

import { Navigate } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            Pomodoro Aesthetic {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {
    const [Email, setEmail] = useState("");
    const [userpassword, setpassword] = useState("");
    const [signFlag, setSignFlag] = useState("signIN");
    const [navFlag, setNavFlag] = useState(false);
    const [signUpFlag, setsignUpFlag] = useState(false);
    const [signInFlag, setsignInFlag] = useState(false);

    const handleSubmitSignUp = (event) => {
        event.preventDefault();
        setsignUpFlag(true);
    };

    const handleSubmitSignIn = (event) => {
        event.preventDefault();
        setsignInFlag(true);
    };

    useEffect(() => {
        if (signInFlag === true) {
            axios
                .post("http://localhost:4001/api/checkUser", {
                    email: Email,
                    password: userpassword,
                })
                .then((res) => {
                    if (res.data.conf === true) {
                        let temp = res.data.jwtToken;
                        
                        localStorage.setItem("jwt", temp);
                        setNavFlag(true);
                    } else {
                        toast("El usuario o la contraseña son incorrectos");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            setsignInFlag(false);
        }
    }, [signInFlag, Email, userpassword]);

    useEffect(() => {
        if (signUpFlag === true) {
            axios
                .post("http://localhost:4001/api/createUser", {
                    email: Email,
                    password: userpassword,
                })
                .then((res) => {
                    toast(res.data.msj);
                })
                .catch((err) => {
                    console.log(err);
                });
            setsignUpFlag(false);
        }
    }, [signUpFlag, Email, userpassword]);

    useEffect(() => {}, []);

    const handleEmail = (e) => {
        setEmail(e);
    };

    const handlePass = (e) => {
        setpassword(e);
    };
    return (
        <ThemeProvider theme={theme}>
            {navFlag && <Navigate to="/" replace={true} />}
            <Container
                component="main"
                maxWidth="xs"
                className="containerSignIn"
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_25_299)">
                            <path
                                d="M7.99007 5.77138C8.40038 5.77082 8.81876 5.78738 9.24532 5.81994C12.6943 6.08319 15.3721 7.36701 15.3961 7.37826L16.0002 7.67182L16.6028 7.38007C16.6292 7.36701 19.3072 6.08326 22.7561 5.81988C24.0535 5.72088 25.2776 5.77357 26.4273 5.97538L21.5393 9.68501L22.8606 13.9992L16.0007 11.4634L9.14082 13.9992L10.4616 9.68501L5.57263 5.97476C6.34513 5.83894 7.15082 5.77138 7.99007 5.77138Z"
                                fill="#95BC81"
                            />
                            <path
                                d="M16 27.1888C10.2091 27.1888 5.49774 23.1391 5.49774 18.1612C5.49774 17.6298 5.92855 17.1989 6.45999 17.1989C6.99143 17.1989 7.42224 17.6298 7.42224 18.1612C7.42224 22.0779 11.2702 25.2643 16 25.2643C16.5314 25.2643 16.9622 25.6951 16.9622 26.2266C16.9622 26.758 16.5314 27.1888 16 27.1888Z"
                                fill="white"
                            />
                            <path
                                d="M28.7414 10.4809C28.4254 10.0536 27.823 9.96357 27.3956 10.2793C26.9683 10.5953 26.8781 11.1977 27.1939 11.6251C28.6299 13.5671 29.3889 15.8273 29.3889 18.1613C29.3889 24.7308 23.3826 30.0756 15.9999 30.0756C8.61725 30.0756 2.61106 24.7308 2.61106 18.1612C2.61106 14.5129 4.50656 11.0609 7.71262 8.80676L9.34493 10.0456L8.22068 13.7176C8.11356 14.0673 8.21412 14.4475 8.48 14.6988C8.74593 14.95 9.13131 15.0285 9.47437 14.9018L16.0006 12.4893L22.5269 14.9018C22.6355 14.9419 22.7484 14.9616 22.8604 14.9616C23.1021 14.9616 23.3396 14.8704 23.5213 14.6988C23.7872 14.4476 23.8877 14.0673 23.7806 13.7176L22.6559 10.0456L27.0088 6.74201C27.3136 6.51069 27.4524 6.12076 27.3622 5.74888C27.2721 5.37707 26.9702 5.09388 26.5934 5.02769C25.3669 4.81244 24.0504 4.75626 22.6826 4.86057C20.1526 5.05369 18.0427 5.75632 16.9619 6.18107V3.15082L19.1356 1.77551C19.5847 1.49138 19.7184 0.897006 19.4343 0.447881C19.1502 -0.00118119 18.5559 -0.134931 18.1067 0.149194L15.4852 1.80782C15.2064 1.98419 15.0374 2.29107 15.0374 2.62101V6.18069C13.9487 5.75344 11.8403 5.05307 9.31837 4.86051C8.87231 4.82632 8.43256 4.80901 8.01143 4.80901H7.98968C7.09762 4.80901 6.22812 4.88232 5.40562 5.02707C5.02881 5.09326 4.72712 5.37644 4.63706 5.74838C4.547 6.12026 4.68587 6.51007 4.99056 6.74132L6.1125 7.59282C2.69187 10.2096 0.686371 14.0732 0.686371 18.1613C0.686558 25.7919 7.55618 32 16 32C24.4438 32 31.3134 25.7919 31.3134 18.1613C31.3134 15.4124 30.424 12.7566 28.7414 10.4809ZM9.17206 6.77938C12.3185 7.01957 14.7929 8.15801 14.9803 8.24594L15.5796 8.53719C15.8447 8.66594 16.1541 8.66626 16.4195 8.53788L17.0221 8.24613C17.0475 8.23401 19.594 7.02638 22.8294 6.77938C23.1684 6.75351 23.506 6.73851 23.8354 6.73463L20.9577 8.91851C20.6363 9.16244 20.5012 9.58101 20.6194 9.96676L21.3716 12.4228L16.3344 10.5608C16.1192 10.4812 15.8825 10.4812 15.6671 10.5608L10.6297 12.4229L11.3817 9.96669C11.4999 9.58094 11.3647 9.16244 11.0433 8.91851L8.16525 6.73432C8.49081 6.73801 8.82875 6.75313 9.17206 6.77938Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_25_299">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <Typography component="h1" variant="h5">
                        Sign {signFlag === "signIN" ? "In" : "Up"}
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => handleEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => handlePass(e.target.value)}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={(e) => {
                                if (signFlag === "signIN") {
                                    handleSubmitSignIn(e);
                                } else {
                                    handleSubmitSignUp(e);
                                }
                            }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs></Grid>
                            <Grid item>
                                {signFlag === "signIN" ? (
                                    <p
                                        onClick={() => {
                                            setSignFlag("signUP");
                                        }}
                                        className="textSign"
                                    >
                                        "Don't have an account? Sign Up"
                                    </p>
                                ) : (
                                    <p
                                        onClick={() => {
                                            setSignFlag("signIN");
                                        }}
                                        className="textSign"
                                    >
                                        "Have an account? Sign In"
                                    </p>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
            <Toaster />
        </ThemeProvider>
    );
}
