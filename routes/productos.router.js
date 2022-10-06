import express from "express";
import Producto from "../clases/Producto.class.js";

const router = express.Router();

const producto = new Producto();

function validarAdmin(req, res, next){
    if(req.query.admin){
        next()
    } else {
        res.send("Usted no tiene acceso")
    }
}
router.get("/", (req, res) =>{
    const listaProductos = producto.listarAll();
    res.send(listaProductos)
});

router.get("/:id", (req, res) =>{
    const productoBuscado = producto.listar(req.params.id);
    res.send(productoBuscado)
});

router.post("/", validarAdmin,(req, res) => {
    console.log(req.body);
    const productoCreado = producto.guardar(req.body);
    res.send(productoCreado);
});

router.put("/:id", validarAdmin,(req, res) => {
    const productoActualizado = producto.actualizar(req.body, req.params.id);
    res.send(productoActualizado)
});

router.delete("/:id", validarAdmin,(req, res) => {
    const productoBorrado = producto.borrar(req.params.id);
    res.send(productoBorrado);
});


export default router;