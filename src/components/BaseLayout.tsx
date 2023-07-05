import { FC, PropsWithChildren } from "react";
import Container from "@mui/material/Container";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};
