import pool from "../db/pgdb";
import {Request, Response} from "express";

export async function getDetails(req: any, res: any){
    try {
        const detailsData = await pool.query('SELECT * FROM click_check');
        res.json(detailsData.rows);
    } catch (err) {
        if(err instanceof Error){
            console.log(err.message);
        }
        else{
            console.log("Unexpected error", err);
        }
    }
}

export async function getDownloadData(req: any, res: any){
    try{
        const currentDate = '2022-01-07';
        // console.log("today "+ currentDate);
        const todayData = await pool.query("select id, log_uuid as UUID, source, date_of_application as Application_Date, live_img_aqc as live_image,(case when completed != 'Match' then 'Not Match' else completed end) as result from click_check where date_of_application = $1;", [currentDate]);
        res.json(todayData.rows);
    }
    catch (err) {
        if(err instanceof Error){
            console.log(err.message);
        }
        else{
            console.log("Unexpected error", err);
        }
    }
}

export async function login(req: any, res: any) {
    const { startDate, endDate } = req.body;
  
    // Look for user email in the database
    const downloadData = await pool.query('SELECT * FROM users WHERE email = $1',
        [startDate]
    );
  
    // If user not found, send error message
    if (downloadData.rowCount == 0) {
      return res.status(400).json({
        error: [
          {
            msg: "Invalid credentials",
          },
        ],
      });
    } 

} 