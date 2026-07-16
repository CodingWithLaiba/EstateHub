import express from "express";
import { createListing } from "../controllers/listingController.js";
import { getUserListing } from "../controllers/userController.js";

const router = express.Router();
router.post("/create", createListing);
router.get("/get/:id", getUserListing);
export default router;
