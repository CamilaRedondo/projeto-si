import React, { useState } from "react";
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [termsChecked, setTermsChecked] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [emptyFieldsDialogOpen, setEmptyFieldsDialogOpen] = useState<boolean>(false);
    const [termsDialogOpen, setTermsDialogOpen] = useState<boolean>(false);
    const [passwordMismatchDialogOpen, setPasswordMismatchDialogOpen] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSaveForm = () => {
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setEmptyFieldsDialogOpen(true);
            return;
        }
        if (!termsChecked) {
            setTermsDialogOpen(true);
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setPasswordMismatchDialogOpen(true);
            return;
        }
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

    const handleCloseEmptyFieldsDialog = () => {
        setEmptyFieldsDialogOpen(false);
    };

    const handleCloseTermsDialog = () => {
        setTermsDialogOpen(false);
    };

    const handleClosePasswordMismatchDialog = () => {
        setPasswordMismatchDialogOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <p style={{ fontSize: '18px', fontWeight: "normal", color: '#1565c0' }}>CADASTRO DE USUÁRIO</p>
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
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-confirm-password">Confirmar Senha</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-confirm-password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
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
                    label="Confirmar Senha"
                    name="confirmPassword"
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

            {/* Diálogo de aviso para campos vazios */}
            <Dialog
                open={emptyFieldsDialogOpen}
                onClose={handleCloseEmptyFieldsDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Campos Vazios"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Por favor, preencha todos os campos antes de salvar.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEmptyFieldsDialog} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Diálogo de aviso para termos e condições não selecionados */}
            <Dialog
                open={termsDialogOpen}
                onClose={handleCloseTermsDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Termos e Condições"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Para criar uma conta, você precisa concordar com os termos e condições.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseTermsDialog} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Diálogo de aviso para senhas diferentes */}
            <Dialog
                open={passwordMismatchDialogOpen}
                onClose={handleClosePasswordMismatchDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Senhas Diferentes"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        As senhas digitadas não correspondem. Por favor, verifique e tente novamente.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosePasswordMismatchDialog} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
