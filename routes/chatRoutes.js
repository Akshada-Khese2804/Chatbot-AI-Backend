import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { createChat, getAllChats ,addConversation ,getConversation,deleteChat} from "../controllers/ChatControllers.js";
const router = express.Router();

router.post("/new", isAuth, createChat);
router.get("/all", isAuth, getAllChats);
router.post("/:id", isAuth, addConversation);
router.get("/:id", isAuth, getConversation);
router.delete("/:id", isAuth, deleteChat);

export default router;
