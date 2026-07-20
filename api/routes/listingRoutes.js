import express from "express";
import { createListing,deleteListing,updateListing,getListing } from "../controllers/listingController.js";
import { verifyToken } from "../utlis/verifyUser.js";
import { getUserListing } from "../controllers/userController.js";

const router = express.Router();
router.post("/create", createListing);
// router.get("/get/:id", getUserListing);
router.delete("/delete/:id",verifyToken,deleteListing)
router.post("/update/:id",verifyToken,updateListing)
router.get("/get/:id", getListing);

export default router;
