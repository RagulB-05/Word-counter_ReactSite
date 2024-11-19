import image from "../assets/images.jpeg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section>
      <div className="box">
        <div>
          <h1>OPPS - Page Not Found</h1>
        </div>
        <img src={image} alt="Page Not Found" />
        <Link to="/">
          <div>
            <button>Go Back To Word Counter</button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
