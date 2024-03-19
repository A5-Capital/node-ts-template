import { Router } from "express";
import UserRouter from "./user";

const baseRouter = () => {
  const router = Router();
  router.use("/user", UserRouter);
  router.use("*", (req, res) => {
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  });

  return router;
};
export default baseRouter;
