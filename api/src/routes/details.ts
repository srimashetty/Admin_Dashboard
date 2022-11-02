import express from "express";
const router = express.Router();
import {getDetails, getDownloadData} from "../controller/details"
import authToken from "../middleware/authenticateToken";

router.get('/details', getDetails);
router.get('/download', getDownloadData);

export default router;