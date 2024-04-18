import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { ACTION, AuthContext } from "../../contexts/AuthProvider";
import { IconButton, Stack, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type LoginModalProps = {};

const LoginModal = ({}: LoginModalProps) => {
  const { state, dispatch } = useContext(AuthContext);
  const handleClose = () => {
    dispatch({ type: ACTION.SETOPENMODAL, payload: false });
  };

  const handleLogin = () => {
    // Check if login is correct

    dispatch({ type: ACTION.SETLOGGEDIN, payload: true });
    handleClose();
  };

  return (
    <div>
      <Modal
        open={state.modalIsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {state.clickedLogin ? (
            <>
              <Stack direction="row" justifyContent="space-between">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Login
                </Typography>
                <Link to={"/"}>
                  <IconButton aria-label="Cancel">
                    <CancelIcon />
                  </IconButton>
                </Link>
              </Stack>

              <Box
                display="flex"
                flexDirection="column"
                component="form"
                gap="1rem"
              >
                <TextField required label="Username"></TextField>
                <TextField
                  required
                  label="Password"
                  type="password"
                ></TextField>
                <Button onClick={handleLogin} variant="contained">
                  Login
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Login
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
