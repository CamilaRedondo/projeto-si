import React, { useState } from "react";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value);
    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value); 
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        // Lógica para realizar o login
        console.log("Email:", email);
        console.log("Senha:", password);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <p style={{ fontSize: '18px', fontWeight: "normal", color: '#1565c0' }}>LOGIN</p>
            <TextField
                sx={{ m: 1, width: '25ch' }}
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
            />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Senha"
                />
            </FormControl>
            <Link href="#" sx={{ mt: 1, mb: 2 }}>Esqueceu sua senha?</Link>
            <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 2 }}>
                Entrar
            </Button>
        </Box >
    );
}
