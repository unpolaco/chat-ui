import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Gender } from "../../types/chat.types";
import { register } from "../../store/reducers/auth";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState<Gender>(Gender.male);
  const [password, setPassword] = useState("");
  //@ts-ignore
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      //@ts-ignore
      register({ firstName, lastName, email, gender, password }, navigate)
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create an account
        </Typography>
        <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              required
              margin="normal"
              label="First Name"
              autoFocus
            />
            <TextField
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              required
              margin="normal"
              label="Last Name"
            />
            <RadioGroup
              row
              value={gender}
              onChange={(e) => setGender(e.target.value as Gender)}
            >
              <FormControlLabel
                value={Gender.female}
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value={Gender.male}
                control={<Radio />}
                label="Male"
              />
            </RadioGroup>

            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              required
              margin="normal"
              label="Email"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              required
              margin="normal"
              label="Password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <p>
                  Already have an account? Login <Link to="/login">here</Link>
                </p>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
};
