import React from "react";
import { Stack, Skeleton } from "@mui/material";

const LoadingComp = () => {
  return (
    <Stack spacing={1} sx={{ alignItems: "center" }}>
      <Skeleton variant="circular" animation="wave" width={150} height={150} />
      <Skeleton variant="rounded" animation="wave" width={210} height={30} />
      <Skeleton variant="rounded" animation="wave" width={210} height={100} />
      <Skeleton variant="rounded" animation="wave" width={100} height={30} />
    </Stack>
  );
};

export default LoadingComp;
