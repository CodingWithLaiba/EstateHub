import express from "express";
import { createListing,deleteUser } from "../controllers/listingController.js";
import { verifyToken } from "../utlis/verifyUser.js";
import { getUserListing } from "../controllers/userController.js";

const router = express.Router();
router.post("/create", createListing);
router.get("/get/:id", getUserListing);
router.delete("/delete/:id",verifyToken,deleteUser)

export default router;
