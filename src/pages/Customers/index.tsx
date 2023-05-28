import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import ListCustomers, { IColumn } from "../../layouts/components/ListCustomers";
import EditDetails from "../../layouts/components/EditDetails";
import { Grid } from "@mui/material";
import IconButtonWithModal from "../../components/IconButtonWithModal";
import AddIcon from "@mui/icons-material/Add";
import FormCustomers from "../../Forms/customers";

export default function CustomersListPage() {
  const rows = [
    { actions: <EditDetails />, name: "YPF", id: "IN", sarasa: 1324171354 },
    { actions: <EditDetails />, name: "Repsol", id: "CN", sarasa: 1403500365 },
    { actions: <EditDetails />, name: "DOW", id: "IT", sarasa: 60483973 },
    { actions: <EditDetails />, name: "Metrogas", id: "US", sarasa: 327167434 },
    { actions: <EditDetails />, name: "Total", id: "CA", sarasa: 37602103 },
    { actions: <EditDetails />, name: "Coomarpes", id: "AU", sarasa: 25475400 },
    {
      actions: <EditDetails />,
      name: "Argentilemon",
      id: "DE",
      sarasa: 83019200,
    },
    {
      actions: <EditDetails />,
      name: "Sales de jujuy",
      id: "IE",
      sarasa: 4857000,
    },
    { actions: <EditDetails />, name: "PCR", id: "MX", sarasa: 126577691 },
    {
      actions: <EditDetails />,
      name: "Profertil",
      id: "JP",
      sarasa: 126317000,
    },
    { actions: <EditDetails />, name: "Roch", id: "FR", sarasa: 67022000 },
    { actions: <EditDetails />, name: "Mc Cain", id: "GB", sarasa: 67545757 },
    { actions: <EditDetails />, name: "PPD", id: "RU", sarasa: 146793744 },
    { actions: <EditDetails />, name: "Refinor", id: "NG", sarasa: 200962417 },
    { actions: <EditDetails />, name: "Orazul", id: "BR", sarasa: 210147125 },
    { actions: <EditDetails />, name: "Mega", id: "BR", sarasa: 210147125 },
    { actions: <EditDetails />, name: "Geneia", id: "BR", sarasa: 210147125 },
    { actions: <EditDetails />, name: "Chevron", id: "BR", sarasa: 210147125 },
    { actions: <EditDetails />, name: "Shell", id: "BR", sarasa: 210147125 },
    { actions: <EditDetails />, name: "Techint", id: "BR", sarasa: 210147125 },
    { actions: <EditDetails />, name: "Vintage", id: "BR", sarasa: 21014712 },
    {
      actions: <EditDetails />,
      name: "Samsugn oil",
      id: "BR",
      sarasa: 210147125,
    },
    {
      actions: <EditDetails />,
      name: "Terminal 6",
      id: "BR",
      sarasa: 210147125,
    },
    {
      actions: <EditDetails />,
      name: "Pluspetrol",
      id: "BR",
      sarasa: 210147125,
    },
    { actions: <EditDetails />, name: "SeaBoard", id: "BR", sarasa: 210147125 },
    {
      actions: <EditDetails />,
      name: "Mc Diesel",
      id: "BR",
      sarasa: 210147125,
    },
  ];

  const columns: IColumn[] = [
    { id: "actions", label: "Actions", minWidth: 100 },
    { id: "name", label: "Names", minWidth: 170 },
    {
      id: "id",
      label: "ID",
      minWidth: 170,
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "sarasa",
      label: "Sarasa",
      minWidth: 170,
      format: (value: number) => value.toLocaleString("en-US"),
    },
  ];

  return (
    <BasicLayout>
      <Grid container spacing={2}>
        <Grid xs={11}>
          <h1>Customers</h1>
        </Grid>
        <Grid
          xs={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButtonWithModal Icon={<AddIcon />}>
            <FormCustomers />
          </IconButtonWithModal>
        </Grid>
      </Grid>
      <ListCustomers rows={rows} columns={columns} />
    </BasicLayout>
  );
}
