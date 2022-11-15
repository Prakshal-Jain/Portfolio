import "../css/notfoundpage.css";
import img_404 from "../assets/404.svg"
import FlexLayout from "../components/FlexLayout";
import { Link } from "react-router-dom";

const MyStory = (): JSX.Element => (
    <FlexLayout direction="vertical" align="center">
        <h3>
            <Link to="/">Go back to homepage</Link>
        </h3>
    </FlexLayout>
)

export default MyStory;