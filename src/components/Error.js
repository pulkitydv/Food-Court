import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error">
      <h1>OOPS! Something went wrong.</h1>
      <h2 className="errorStatus">
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};
export default Error;
