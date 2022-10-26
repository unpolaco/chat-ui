import React, { FC, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Gender } from "../../types/chat.types";
import { AuthState } from "../../store/reducers/auth.types";

interface ModalProps {
  setShowProfileModal: (boolean: boolean) => void;
}

export const Modal: FC<ModalProps> = ({ setShowProfileModal }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: AuthState) => state.user);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(user.avatar);
  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = { firstName, lastName, email, gender, avatar, password };
    if (password.length > 0) form.password = password;
    const formData = new FormData();
    for (const key in form) {
      //TODO
      //@ts-ignore
      formData.append(key, form[key]);
    }
    //@ts-ignore
    dispatch(updateProfile(formData)).then(() => setShowProfileModal(false));
  };

  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    return setShowProfileModal(false);
  };

  return (
    //TODO
    //@ts-ignore
    <Dialog open={() => setShowProfileModal(true)} onClose={closeModal}>
      <Paper elevation={3} sx={{ minWidth: 350 }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton aria-label="close" onClick={(e) => closeModal(e)}>
            <CloseIcon />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={avatar} sx={{ m: 1, width: 60, height: 60 }} />
          <Typography variant="h6">Edit your profile</Typography>
        </div>

        <FormControl
          sx={{
            p: 3,
            mt: 1,
            minWidth: 300,
            display: "flex",
            justifyContent: "center",
          }}
        >
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom sx={{ mt: 2 }}>
              Update your avatar
            </Typography>
            <label>
              <input
                accept="image/*"
                //@ts-ignore
                onChange={(e) => setAvatar(e.target.files[0])}
                type="file"
                style={{ display: "none" }}
              />
              <Button variant="contained" component="span">
                <PhotoCameraIcon />
              </Button>
            </label>
          </div>

          <Button
            type="submit"
            variant="contained"
            onClick={submitForm}
            sx={{ mt: 5, mb: 2 }}
          >
            Update profile
          </Button>
        </FormControl>
      </Paper>
    </Dialog>
  );
};
