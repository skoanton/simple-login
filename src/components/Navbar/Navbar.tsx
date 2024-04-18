import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../utils/colorTheme";
import { useContext } from "react";
import { ACTION, AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";

type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  const { state, dispatch } = useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            {state.isLoggedIn ? (
              <>
                <Link to={"signin"}>
                  <Button
                    onClick={() => {
                      dispatch({ type: ACTION.SETOPENMODAL, payload: true });
                      dispatch({ type: ACTION.SETCLICKEDLOGIN, payload: true });
                    }}
                    color="inherit"
                  >
                    Logout
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to={"signin"}>
                  <Button
                    onClick={() => {
                      dispatch({ type: ACTION.SETOPENMODAL, payload: true });
                      dispatch({ type: ACTION.SETCLICKEDLOGIN, payload: true });
                    }}
                    color="inherit"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to={"signup"}>
                  <Button
                    onClick={() => {
                      dispatch({ type: ACTION.SETOPENMODAL, payload: true });
                      dispatch({
                        type: ACTION.SETCLICKEDLOGIN,
                        payload: false,
                      });
                    }}
                    color="inherit"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
