import React, { useState } from "react";
import { Box, Button, Checkbox, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface FormData {
    name: string;
    email: string;
    password: string;
}

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [termsChecked, setTermsChecked] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ''
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSaveForm = () => {
        // Lógica para salvar as informações do formulário
        console.log("Nome:", formData.name);
        console.log("Email:", formData.email);
        console.log("Senha:", formData.password);
        console.log("Formulário salvo:", formData);
    };

    const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTermsChecked(event.target.checked);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <p style={{fontSize: '18px', fontWeight: "normal", color: '#1565c0'}}>CADASTRO DE USUÁRIO</p>
            <TextField
                sx={{ m: 1, width: '25ch' }}
                label="Nome"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />
            <TextField
                sx={{ m: 1, width: '25ch' }}
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
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
                    name="password"
                />
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                <Checkbox
                    checked={termsChecked}
                    onChange={handleTermsChange}
                    inputProps={{ 'aria-label': 'Aceitar termos e condições' }}
                />
                <p style={{ fontSize: '12px' }}>Aceito os termos e condições</p>
            </Box>
            <Button variant="contained" color="primary" onClick={handleSaveForm} sx={{ marginTop: '10px' }}>
                Salvar
            </Button>
        </Box>
    );
}
