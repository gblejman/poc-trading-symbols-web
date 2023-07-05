import { FC, PropsWithChildren } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";
import { useStore } from "../services/store";
import { auth, signOut } from "../services/firebase";

export const Layout: FC<PropsWithChildren> = () => {
  const { user } = useStore((store) => ({ user: store.auth.user }));
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("auth/signin");
  };

  const handleClickSignOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log("sign out error", { e });
    }
  };

  return (
    <BaseLayout>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Demo
          </Typography>

          {user ? (
            <>
              <Typography>{user.email}</Typography>
              <Button
                onClick={handleClickSignOut}
                variant="outlined"
                color="inherit"
                sx={{ marginLeft: 2 }}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Button onClick={handleClickSignIn} color="inherit">
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </BaseLayout>
  );
};
