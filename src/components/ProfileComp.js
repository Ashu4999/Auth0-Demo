import React from "react";
import { LogoutComp } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Stack,
  Avatar,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ProfileComp = () => {
  const { user } = useAuth0();

  const userDetailsObject = {
    nickname: user.nickname,
    email: user.email,
    updated_at: user.updated_at,
    login_method: user.sub,
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        px: 4,
        py: 3,
        m: { xs: 3, sm: 0 },
      }}
    >
      <Stack spacing={2}>
        <Avatar
          src={user.picture}
          sx={{ width: 150, height: 150, m: "auto" }}
          alt={`${user.name} image here`}
        />
        <Typography
          sx={{ fontFamily: "Public Sans Bold", textAlign: "center" }}
        >
          {user.name}
        </Typography>
        <List dense={true}>
          {Object.keys(userDetailsObject).map((key) => (
            <ListItem>
              <ListItemText>{`${key} : ${userDetailsObject[key]}`}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Stack>
      <LogoutComp />
    </Card>
  );
};

export default ProfileComp;
