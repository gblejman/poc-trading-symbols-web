import { FC, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../services/store/index.ts";

type PageProps = PropsWithChildren & {
  requiresAuth?: boolean;
};

export const Page: FC<PageProps> = ({ requiresAuth = false, children }) => {
  const navigate = useNavigate();
  const { user } = useStore((store) => ({
    user: store.auth.user,
  }));

  const canRender = !requiresAuth || (requiresAuth && !!user);

  useEffect(() => {
    if (!canRender) {
      navigate("/");
    }
  }, [user, canRender, navigate]);

  return canRender ? children : null;
};
