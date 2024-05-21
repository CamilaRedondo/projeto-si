import React, { useState } from "react";
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useSession from "../session/useSession.hook";

interface UserData {
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

const initialUserData: UserData = {
    name: 'João Silva',
    cpf: '123.456.789-00',
    password: 'senha123',
    confirmPassword: '',
    neighborhood: 'Centro',
    street: 'Rua Exemplo',
    number: '123',
    complement: '',
    phone: '99999-9999'
};

const ProfilePage: React.FC = () => {
    const { session } = useSession();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [termsChecked, setTermsChecked] = useState<boolean>(true); // Checkbox marcado por padrão
    const [userData, setUserData] = useState<UserData>(initialUserData);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
    const [deleteWarningOpen, setDeleteWarningOpen] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const handleSaveForm = () => {
        // Verifica se a senha de confirmação corresponde à senha principal
        if (userData.password !== userData.confirmPassword) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
            // Lógica para salvar as informações do usuário
            console.log("Nome:", userData.name);
            console.log("CPF:", userData.cpf);
            console.log("Senha:", userData.password);
            console.log("Bairro:", userData.neighborhood);
            console.log("Rua:", userData.street);
            console.log("Número:", userData.number);
            console.log("Complemento:", userData.complement);
            console.log("Telefone:", userData.phone);
            console.log("Dados do usuário salvos:", userData);
        }
    };

    const handleDeleteAccount = () => {
        // Lógica para exclusão da conta
        console.log("Conta excluída");
        setDeleteDialogOpen(false);
    };

    const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.checked) {
            setDeleteWarningOpen(true); // Abrir aviso de exclusão da conta ao desmarcar os termos e condições
        } else {
            setTermsChecked(true); // Manter o checkbox marcado se o usuário optar por não desmarcar
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
    };

    const handleDeleteWarningClose = () => {
        setDeleteWarningOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '100px', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <p style={{ fontSize: '18px', fontWeight: "normal", color: '#1565c0' }}>EDITAR PERFIL</p>
            </Box>
            <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nome"
                        variant="outlined"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="CPF"
                        variant="outlined"
                        name="cpf"
                        value={userData.cpf}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={userData.password}
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
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={userData.confirmPassword}
                            onChange={handleInputChange}
                            error={passwordError}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
                        value={userData.neighborhood}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Rua"
                        variant="outlined"
                        name="street"
                        value={userData.street}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Número"
                        variant="outlined"
                        name="number"
                        value={userData.number}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Complemento"
                        variant="outlined"
                        name="complement"
                        value={userData.complement}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            {passwordError && <p style={{ color: 'red' }}>As senhas não correspondem. Por favor, tente novamente.</p>}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '10px' }}>
                <Checkbox
                    checked={termsChecked}
                    onChange={handleTermsChange}
                    inputProps={{ 'aria-label': 'Aceitar termos e condições' }}
                />
                <p style={{ fontSize: '12px' }}>Aceito os termos e condições</p>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '10px', width: '100%' }}>
                <Button variant="contained" color="primary" onClick={handleSaveForm} sx={{ marginRight: '10px' }}>
                    Salvar
                </Button>
                <Button variant="outlined" color="error" onClick={() => setDeleteDialogOpen(true)}>
                    Excluir Conta
                </Button>
            </Box>

            {/* Diálogo de confirmação para exclusão da conta */}
            <Dialog
                open={deleteDialogOpen}
                onClose={handleDeleteDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Excluir conta?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Tem certeza de que deseja excluir sua conta permanentemente?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleDeleteAccount} color="error" autoFocus>
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Aviso de exclusão da conta ao desmarcar os termos e condições */}
            <Dialog
                open={deleteWarningOpen}
                onClose={handleDeleteWarningClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Excluir conta?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Não concordar com os termos e condições implica na exclusão da conta. Você deseja realmente fazer isso?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteWarningClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleDeleteAccount} color="error" autoFocus>
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default ProfilePage;
