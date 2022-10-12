import "../css/notfoundpage.css";
import img_404 from "../assets/404.svg"
import FlexLayout from "../components/FlexLayout";
import { Link } from "react-router-dom";

const NotFoundPage = (): JSX.Element => (
    <FlexLayout direction="vertical" align="center">
        <img src={img_404} className="img-404" />
        <h3 className="heading">
            Page not found
        </h3>
        <h3>
            <Link to="/">Go back to homepage</Link>
        </h3>
    </FlexLayout>
)

export default NotFoundPage;