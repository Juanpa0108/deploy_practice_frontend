import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import api from "../api/api";
import { isAxiosError } from "axios";
import "../styles/style.css";

const Login = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const response = await api.post("/api/login", data);
            const name = response.data
            navigate(`/catalog/${name}`);
        } catch (error) {
            if (isAxiosError(error)) toast.error(error.response?.data.error)
        }

    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to right, #b3e5fc, #81d4fa)",
            }}
        >
            <Container component="main" maxWidth="xs">
                <Paper
                    elevation={5}
                    sx={{
                        padding: "40px",
                        borderRadius: "15px",
                        textAlign: "center",
                        background: "#ffffff",
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                    }}
                >
                    <Typography variant="h5" component="h1" color="primary" gutterBottom>
                        Iniciar Sesión
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 2 }}>
                        <TextField
                            label="Correo Electrónico"
                            variant="outlined"
                            fullWidth
                            {...register("email", { required: "El correo es obligatorio" })}
                            error={!!errors.email}
                            helperText={errors.email?.message?.toString()}
                        />

                        <TextField
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            fullWidth
                            {...register("password", { required: "La contraseña es obligatoria" })}
                            error={!!errors.password}
                            helperText={errors.password?.message?.toString()}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                                mt: 3,
                                borderRadius: "25px",
                                textTransform: "none",
                                fontSize: "16px",
                                padding: "12px",
                            }}
                        >
                            Ingresar
                        </Button>
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        ¿Aún no tienes cuenta? <Link to="/" className="link">Regístrate aquí</Link>
                    </Typography>
                </Paper>
            </Container>
            <Toaster position="top-right" />
        </Box>
    );
};

export default Login;