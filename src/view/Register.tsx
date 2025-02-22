import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterFormData } from "../interfaces/registerFormData";
import api from "../api/api";
import { isAxiosError } from "axios";
import "../styles/style.css";
import { toast, Toaster } from "sonner";
import { Button, TextField } from "@mui/material";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await api.post("/api/register", data);
      toast.success(`${response.data} puede ir al login`)
      reset()
    } catch (error: any) {
      if (isAxiosError(error)) toast.error(error.response?.data.error)
    }

  };

  return (
    <div className="main">
      <div className="registerForm">
        <div className="register">
          <h1 className="title">Bienvenido</h1>
          <span className="promotion">Aprovecha, si creas una cuenta obtienes un <strong>25% de descuento</strong> en todos los productos.</span>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="spacing">
              <TextField
                label="Nombre"
                type="text"
                variant="outlined"
                fullWidth
                {...register("name", { required: "El nombre es obligario" })}
                error={!!errors.password}
                helperText={errors.password?.message?.toString()}
              />
            </div>
            <div className="spacing">
              <TextField
                label="Email"
                type="text"
                variant="outlined"
                fullWidth
                {...register("email", { required: "Ingrese un correo valido" })}
                error={!!errors.password}
                helperText={errors.password?.message?.toString()}
              />

            </div>
            <div className="spacing">
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                {...register("password", { required: "La contraseña es obligatoria" })}
                error={!!errors.password}
                helperText={errors.password?.message?.toString()}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Registrarse
            </Button>
          </form>
          <div className="spans">
            <span>¿Ya tienes cuenta? <Link to="/login" className="link"><strong>Inicia sesión</strong></Link></span>
            <span>Ver el <Link to="/catalog" className="link"><strong>Catálogo</strong></Link></span>
          </div>
        </div>
        <div className="ads">
          <img className="imagen" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAHry1mNgnBp42YMwBCIift2OEUTUXQM50VZFBbknZxtOAl1Xow4vV7kigx8cu8DGo9EfqP7nrCj8kJ1_nghwMUeC0ebZAxBdPz550Se-k1aocz53zwx6khyO8R1CzL-Sewxc-jmEZG9Iu/s1600/fondo-ventas-por-internet.jpg" alt="venta" />
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};



export default Register;
