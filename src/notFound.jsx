import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return (<div>
        <h2>Sorry</h2>
        <h4>This page hasn't found</h4>
        <Link to="/">Back to home page ...</Link>
    </div>);
}

export default NotFound;