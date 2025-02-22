import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from "@mui/material";
import api from "../api/api";
import { Product } from "../interfaces/productI";
import { toast, Toaster } from "sonner";
import { isAxiosError } from "axios";

const Catalog = () => {
    const { name } = useParams<{ name?: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [discountApplied, setDiscountApplied] = useState(false);
    const [validUser, setValidUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await api.get(`/api/getProducts/${name || ""}`);
          setProducts(response.data);
          if (name && response.data.some((product: Product) => product.price !== 350)) {
            setDiscountApplied(true);
            setValidUser(true);
          }
        } catch (error) {
          if (isAxiosError(error)) toast.error(error.response?.data.error)
        }
      };
      fetchProducts();
    }, [name]);

    const handleLogout = () => {
      navigate("/login");
    };
  
    return (
      <Container sx={{ mt: 5, textAlign: "center", position: "relative" }}>
        {discountApplied && (
          <Box sx={{ backgroundColor: "#f4e1ff", padding: "15px", borderRadius: "8px", textAlign: "center", mb: 3, border: "1px solid #c39bd3", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
            <Typography variant="h6" color="#8e44ad" fontWeight="bold">
              ¡Descuento aplicado en productos seleccionados!
            </Typography>
          </Box>
        )}
        <TableContainer component={Paper} sx={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", borderRadius: "10px", overflow: "hidden" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#8e44ad" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Nombre</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Precio</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Categoría</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Stock</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Descripción</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Marca</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>SKU</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Tags</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.sku} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" } }}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell sx={{ color: discountApplied ? "green" : "inherit", fontWeight: discountApplied ? "bold" : "normal" }}>
                    ${product.price}
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>{product.tags.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          {!validUser ? (
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Si te gustó o te interesó algún producto, te invitamos a <Link to="/" style={{ color: "#d32f2f", textDecoration: "none"}}><strong>registrarte</strong></Link> para obtener un descuento especial.
            </Typography>
          ) : (
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#ff5722" }}>
              En construcción para realizar compras...
            </Typography>
          )}
        </Box>
        {validUser && (
          <Button 
            onClick={handleLogout} 
            variant="contained" 
            color="secondary" 
            sx={{ position: "fixed", bottom: 20, right: 20, borderRadius: "25px", textTransform: "none", fontSize: "14px", padding: "10px 20px" }}>
            Cerrar Sesión
          </Button>
        )}
        <Toaster position="top-right" />
      </Container>
    );
  };
  
  export default Catalog;
