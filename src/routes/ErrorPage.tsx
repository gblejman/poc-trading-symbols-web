import { useRouteError } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout";
import { Page } from "../components/Page";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Page>
      <BaseLayout>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
      </BaseLayout>
    </Page>
  );
};
