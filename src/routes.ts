import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from "./userController";

const router = Router();

// GET - Todos los usuarios
router.get("/usuarios", getUsers);

// GET - Usuario por ID
router.get("/usuarios/:id", getUserById);

// POST - Crear usuario
router.post("/usuarios", createUser);

// PUT - Actualizar usuario
router.put("/usuarios/:id", updateUser);

// DELETE - Eliminar usuario
router.delete("/usuarios/:id", deleteUser);

export default router;