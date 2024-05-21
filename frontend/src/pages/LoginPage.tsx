import React, { useState, ChangeEvent } from "react";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function LoginPage() {
    const [cpf, setCPF] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleCPFChange = (e: ChangeEvent<HTMLInputElement>) => setCPF(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value); 
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        if (cpf.trim() === "" || password.trim() === "") {
            alert("Por favor, preencha todos os campos para fazer login.");
            return;
        }
        
        console.log("CPF:", cpf);
        console.log("Senha:", password);
    };

    const isLoginDisabled = cpf.trim() === "" || password.trim() === "";

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <p style={{ fontSize: '24px', fontWeight: "bold", color: '#8B4513', marginBottom: '30px' }}>Bem-vindo à nossa Pastelaria</p>
            <TextField
                sx={{ m: 1, width: '25ch' }}
                label="CPF"
                variant="outlined"
                value={cpf}
                onChange={handleCPFChange}
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
            <Link href="#" sx={{ mt: 1, mb: 2 }}>Realizar o cadastro</Link>
            <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 2 }} disabled={isLoginDisabled}>
                Entrar
            </Button>
        </Box >
    );
}
