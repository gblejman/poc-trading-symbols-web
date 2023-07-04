import { FC, PropsWithChildren } from "react";
import Container from "@mui/material/Container";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <Container maxWidth="xl">{children}</Container>;
};
