import express from "express";
import Carrito from "../clases/Carrito.class.js";

const router = express.Router();

const carrito = new Carrito(); 

router.post("/", (req, res) =>{
    const carritoCreado = carrito.crearCarrito();
    res.send(carritoCreado);
});

router.delete("/:id", (req, res) => {
    const carritoBorrado = carrito.borrar(req.params.id);
    res.send(carritoBorrado);
});
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
router.delete("/:id/producto/:id_prod", (req, res) =>{
    const borrarProducto = carrito.actualizar(
        req.params.id,
        req.params.id_prod
    );
    res.send(borrarProducto);
});

router.get ("/", (req, res) => {
    const listaCarritos = carrito.listarAll();
    res.send(listaCarritos);
});

router.post("/:id/producto/:idPrd", (req, res) => {
    const respuesta = carrito.guardarProductoEnCarrito(
        req.params.idPrd,
        req.params.id,
    );
   res.send((respuesta))
});

export default router;