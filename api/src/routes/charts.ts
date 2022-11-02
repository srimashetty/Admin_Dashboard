import express from "express";
const router = express.Router();
import {getPieChart, getRadialChart, getAreaChart, getBarChart} from "../controller/charts";
import authToken from "../middleware/authenticateToken";


router.get('/piechart', getPieChart);
router.get('/barchart', getRadialChart);
router.get('/areachart', getAreaChart);
router.get('/radialchart', getBarChart);

export default router;