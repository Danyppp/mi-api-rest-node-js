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
router.get("/users", getUsers);

// GET - Usuario por ID
router.get("/users/:id", getUserById);

// POST - Crear usuario
router.post("/users", createUser);

// PUT - Actualizar usuario
router.put("/users/:id", updateUser);

// DELETE - Eliminar usuario
router.delete("/users/:id", deleteUser);

export default router;