import React, { useState } from "react";
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface FormData {
    name: string;
    cpf: string;
    password: string;
    confirmPassword: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
    phone: string;
}

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [termsChecked, setTermsChecked] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        cpf: '',
        password: '',
        confirmPassword: '',
        neighborhood: '',
        street: '',
        number: '',
        complement: '',
        phone: ''
    });
    const [emptyFieldsDialogOpen, setEmptyFieldsDialogOpen] = useState<boolean>(false);
    const [termsDialogOpen, setTermsDialogOpen] = useState<boolean>(false);
    const [passwordMismatchDialogOpen, setPasswordMismatchDialogOpen] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSaveForm = () => {
        if (!formData.name || !formData.cpf || !formData.password || !formData.confirmPassword || !formData.phone) {
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
        console.log("CPF:", formData.cpf);
        console.log("Senha:", formData.password);
        console.log("Telefone:", formData.phone);
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
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nome"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="CPF"
                        variant="outlined"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
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
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
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
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Bairro"
                        variant="outlined"
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Rua"
                        variant="outlined"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Número"
                        variant="outlined"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Complemento"
                        variant="outlined"
                        name="complement"
                        value={formData.complement}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                            checked={termsChecked}
                            onChange={handleTermsChange}
                            inputProps={{ 'aria-label': 'Aceitar termos e condições' }}
                        />
                        <p style={{ fontSize: '12px' }}>Aceito os termos e condições</p>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSaveForm}>
                        Salvar
                    </Button>
                </Grid>
            </Grid>

{/* Diálogos de aviso */}
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
