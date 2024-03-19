import { Request, Response } from "express";
import { AppDataSource } from "src/bootstrap/data-source";
import { User } from "src/entity/user";
export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.deletedAt = new Date();
    user.isDeleted = false;
    const result = await userRepository.save(user);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: parseInt(id) },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: parseInt(id) },
    });
    user.name = name;
    user.email = email;
    user.password = password;
    user.updatedAt = new Date();
    const result = await userRepository.save(user);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userRepository = AppDataSource.getRepository(User);
    const result = await userRepository.delete(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
