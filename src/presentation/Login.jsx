import React from "react";
import RenderFromFields from "../shared/RenderFromFields";
import { loginFields } from "../description/login.description";
import loginContainer from "../container/login.container";
import { Box, Stack, Typography } from "@mui/material";
import EMPButton from "../shared/EMPButton";

const Login = () => {
  const { values, onChange, errors, onSubmit } = loginContainer();
  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "400px" }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          LOGIN
        </Typography>
        <RenderFromFields
          fields={loginFields}
          values={values}
          onChange={onChange}
          errors={errors}
        />
        <EMPButton
          variant="contained"
          sx={{ width: "100%" }}
          onClick={onSubmit}
        >
          Submit
        </EMPButton>
      </Box>
    </Stack>
  );
};

export default Login;
