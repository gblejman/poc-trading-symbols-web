import { useEffect } from "react";
import { auth } from "./services/firebase/index.ts";
import { useStore } from "./services/store/index.ts";
import { Router } from "./routes/Router.tsx";

export const App = () => {
  const { isReady, setIsReady, signIn, signOut } = useStore((store) => ({
    isReady: store.isReady,
    setIsReady: store.setIsReady,
    signIn: store.signIn,
    signOut: store.signOut,
  }));

  // setup app (auth/etc)
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      console.log("user", user);
      if (user) {
        signIn(user);
      } else {
        signOut();
      }

      setIsReady(true);
    });
  }, [signIn, signOut, setIsReady]);

  if (!isReady) {
    return null;
  }

  return <Router />;
};
