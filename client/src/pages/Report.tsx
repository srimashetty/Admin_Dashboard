import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";
// import AuthService from "../services/auth.service";
// import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid"
import CsvDownload from "react-json-to-csv";
import CsvIcon from '../assets/download_png.png';
import {CSVLink} from "react-csv";


//columns definition
const columns = [
    {field: 'log_uuid', headerName: 'UUID' },
    {field: 'source', headerName: 'Source', width: 130},
    {field: 'kyc_avlb', headerName: 'KYC Available', width: 160},
    {field: 'f_score', headerName: 'Face Score', width: 155},
    {field: 'f_match', headerName: 'Result', width: 155},
    // {
    //   field: 'f_match', 
    //   headerName: 'Result', 
    //   width: 155,
    //   renderCell:({row: {f_match}})=>{
    //     return(
    //       <Box
    //       width="60%"
    //       m = "0 auto"
    //       p = "5px"
    //       display= "flex"
    //       justifyContent="center"
    //       backgroundColor = {
    //         f_match === 'true'
    //           ? green
    //           : red
    //       }
    //       borderRadius = '4px'
    //       >
    //       {f_match === 'true'}
    //       {f_match === 'false'}
    //       <Typography>
    //         {f_match}
    //       </Typography>
    //     </Box>
    //     )
    //   }
    // },
    {field: 'date_of_application', headerName: 'Application Date', width: 220},
    {field: 'completed_on', headerName: 'Completed On', width: 220},
  ]

const Report = () => {
//   const [dates, setDates] = useState([]);
  // console.log(dates);
  const currentDate = '2022-01-07';
  const fileName = 'click_check ' + currentDate + '.csv';
  const [tableData, setTableData] = useState([]);
  // const [selectedData, setSelectedData] = useState([]);
  const [downloadData, setDownloadData] = useState([]);

  //intializing select option
  // function handleSelectChange(event){
  //   setSelectedData(event.target.value);
  //   console.log(event.target.value);
  // }

//   const navigate = useNavigate();

  useEffect(() => {
    //fetching table data
    const fetchDetails = async() => {
      await PostService.getAllDetails().then(({ data })=> {
        setTableData(data);
        console.log(tableData);
      })
      .catch((err)=> {
            console.log(err);
            window.location.reload();
            // console.log(err);
      })
    }

    //fetching default download data
    const defaultDownload = async() => {
      await PostService.getDownload().then(({data})=> {
        console.log(data);
        setDownloadData(data);
        console.log(downloadData);
      })
    }
    fetchDetails();
    defaultDownload();
  }, []);

  return (
    <div style={{height: 700, width: '100%'}}>
      <div>
      {/* <select style={{marginRight: "10px"}} value={selectedData} onChange={handleSelectChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
      </select> */}
      <CSVLink data={downloadData}>
        <img src={CsvIcon} style = {{width: "28px", height: "30px" }} />
      </CSVLink>
      </div>
      <DataGrid 
        style={{marginTop: "1.5%"}}
          rows={tableData}
          columns={columns}
          pageSize = {10}
          // rowsPerPage = {10}
      />
    </div>
  );
};

export default Report;