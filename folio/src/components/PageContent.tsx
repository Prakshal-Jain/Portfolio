import "./css/pagecontent.css";
import FlexLayout from "./FlexLayout";
import { useState } from 'react';

type Props = {
    children: JSX.Element | JSX.Element[],
    delay: number,
}

const PageContent = (props: Props) => {
    const [loading, setLoading] = useState(true);
    const _id = setTimeout(() =>
        setLoading(false)
        , props.delay)

    if (loading) {
        return null;
    }
    else {
        return (
            <FlexLayout direction="vertical" align="center" >
                <div className={`pagecontent-root`}>
                    {props.children}
                </div>
            </FlexLayout >
        )
    }
}

export default PageContent;