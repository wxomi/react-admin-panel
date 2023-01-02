import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Adress",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 0.5,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 0.5,
    },
  ];

  return (
    <Box m={"20px"}>
      <Header title={"CONTACTS"} subtitle={"List of Contacts for Future Reference"} />
      <Box
        m={"40px 0 0 0"}
        height={"94vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },

          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },

          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },

          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          '$ .MuiDataGrid-toolbarContainer .MuiButton-text':{
            color:`${colors.grey[100]} !important`
          }
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} components={{Toolbar: GridToolbar}}/>
      </Box>
    </Box>
  );
};

export default Team;
