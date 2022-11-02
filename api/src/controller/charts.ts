import {Request, Response} from "express";
import pool from "../db/pgdb";


export async function getPieChart(req: any, res: any){
    try {
        const chartData = await pool.query('SELECT source,COUNT(*) FROM click_check GROUP BY source;');
        res.json(chartData.rows);
    } catch (err) {
        if(err instanceof Error){
            console.log(err.message);
        }
        else{
            console.log('unexpected error', err);
        }
    }
}

export async function getRadialChart(req: any, res: any){
    try {
        const chartData = await pool.query('SELECT COUNT(*) FILTER (WHERE kyc_avlb is TRUE) as true, COUNT(*) FILTER (where kyc_avlb is null OR kyc_avlb is false) AS false FROM click_check;');
        res.json(chartData.rows);
    } catch (err) {
        if(err instanceof Error){
            console.log(err.message);
        }
        else{
            console.log('unexpected error', err);
        }
    }
}

export async function getAreaChart(req: any, res: any){
    try {
        const chartData = await pool.query(' SELECT date_of_application, COUNT(*) FROM click_check GROUP BY date_of_application order by date_of_application asc;');
        res.json(chartData.rows);
    } catch (err) {
        if(err instanceof Error){
            console.log(err.message);
        }
        else{
            console.log('unexpected error', err);
        }
    }
}

export async function getBarChart(req: any, res: any){
    try {
        const chartData = await pool.query("SELECT completed,COUNT(*) FROM click_check where completed != 'Match' GROUP BY completed;");
        res.json(chartData.rows);
    } catch (err) {
        if(err instanceof Error){
            console.log(err.message);
        }
        else{
            console.log('unexpected error', err);
        }
    }
}

