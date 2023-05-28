import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import IconButtonWithModal from "../../components/IconButtonWithModal";
import FormCustomers from "../../Forms/customers";

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <InfoIcon />
      </IconButton>
      <IconButtonWithModal Icon={<EditIcon />}>
        <FormCustomers />
      </IconButtonWithModal>
    </Stack>
  );
}
