import React, { useState } from "react";
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface UserData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const initialUserData: UserData = {
    name: 'João Silva',
    email: 'joao@example.com',
    password: 'senha123',
    confirmPassword: ''
};

const ProfilePage: React.FC = () => {
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
            console.log("Email:", userData.email);
            console.log("Senha:", userData.password);
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <p style={{ fontSize: '18px', fontWeight: "normal", color: '#1565c0' }}>EDITAR PERFIL</p>
            <TextField
                sx={{ m: 1, width: '25ch' }}
                label="Nome"
                variant="outlined"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
            />
            <TextField
                sx={{ m: 1, width: '25ch' }}
                label="Email"
                variant="outlined"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
            />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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
            {passwordError && <p style={{ color: 'red' }}>As senhas não correspondem. Por favor, tente novamente.</p>}
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
            <Button variant="outlined" color="error" onClick={() => setDeleteDialogOpen(true)} sx={{ marginTop: '10px' }}>
                Excluir Conta
            </Button>

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
