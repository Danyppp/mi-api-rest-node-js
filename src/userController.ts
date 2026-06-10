import { Request, Response } from "express";
import { users, User } from "./user";

// 1. Obtener todos los usuarios
export const getUsers = (req: Request, res: Response): void => {
  res.json(users);
};

// 2. Obtener usuario por ID
export const getUserById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
    return;
  }

  res.json(user);
};

// 3. Crear un nuevo usuario
export const createUser = (req: Request, res: Response): void => {
  const { nombre, email, edad } = req.body;

  if (!nombre || !email || !edad) {
    res.status(400).json({ mensaje: "Faltan datos obligatorios: nombre, email y edad" });
    return;
  }

  const nuevoUsuario: User = {
    id: users.length + 1,
    nombre,
    email,
    edad
  };

  users.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
};

// 4. Actualizar un usuario existente
export const updateUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
    return;
  }

  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
};

// 5. Eliminar un usuario
export const deleteUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
    return;
  }

  users.splice(index, 1);
  res.json({ mensaje: "Usuario eliminado correctamente" });
};