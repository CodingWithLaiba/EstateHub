import express from "express";
import {
  getListings,
  createListing,
  deleteListing,
  updateListing,
  getListing,
} from "../controllers/listingController.js";
import { verifyToken } from "../utlis/verifyUser.js";
import { getUserListing } from "../controllers/userController.js";

const router = express.Router();
router.post("/create", createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);

export default router;
