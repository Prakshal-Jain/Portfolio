import "./css/pagecontent.css";
import FlexLayout from "./FlexLayout";
import { useEffect, useRef, useState } from 'react';
import { pages } from "../data/pages"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type Props = {
    delay: number,
    isSticky?: boolean,
    selected?: number,
}

const PageContent = (props: Props) => {
    const [loading, setLoading] = useState(true);
    let messagesEndRef = useRef<HTMLDivElement>(null);
    let [selectedTab, setSelectedTab] = useState(props.selected ?? -1);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [loading]);

    const _id = setTimeout(() =>
        setLoading(false)
        , props.delay)

    if (loading) {
        return null;
    }
    else {
        return (
            <FlexLayout direction="vertical" align="center">
                <div className={`pagecontent-root ${props.isSticky === true ? "sticky" : ""}`} ref={props.isSticky === true ? messagesEndRef : null}>
                    <FlexLayout direction="horizontal" align="stretch" style={{ flexWrap: 'wrap' }}>
                        {pages.map(({ name, url, icon }, index) => (
                            <Link to={url} className={`tile ${selectedTab === index ? "active-tile" : ""}`} role="button" style={{textDecoration: 'none'}} onClick={() => setSelectedTab(index)}>
                                <FlexLayout>
                                    <FontAwesomeIcon icon={icon} />
                                    <div>{name}</div>
                                </FlexLayout>
                            </Link>
                        ))}
                    </FlexLayout>
                </div>
            </FlexLayout>
        )
    }
}

export default PageContent;