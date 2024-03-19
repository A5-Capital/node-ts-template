import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "@controllers/user";
import { Router } from "express";

const router = Router();

router.route("/create").post(createUser);
router.route("/").get(getUsers);
router.route("/:id").get(getUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

export default router;
