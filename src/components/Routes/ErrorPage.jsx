import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-black">
      <h1>Oh no, this route does not exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;