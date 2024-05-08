import { useRouteError } from "react-router-dom";

interface PageErrorInterface {
  status?: number;
  statusText?: string;
  internal?: boolean;
  data?: string;
  error?: {
    message?: string;
    stack?: string;
  };
}

export default function PageError() {
  const error = useRouteError();
  const pageError: PageErrorInterface = error as PageErrorInterface;

  return (
    <>
      Une Erreur est Survenue
      <br />
      {pageError?.status?.toString()}
      <br />
      {pageError?.error?.message}
    </>
  );
}
