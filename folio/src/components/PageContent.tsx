import "./css/pagecontent.css";
import FlexLayout from "./FlexLayout";
import { useEffect, useRef, useState } from 'react';
import { pages } from "../data/pages"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    delay: number,
}

const PageContent = (props: Props) => {
    const [loading, setLoading] = useState(true);
    let messagesEndRef = useRef<HTMLDivElement>(null);
    let [selectedTab, setSelectedTab] = useState(-1);

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
                <div className={`pagecontent-root`} ref={messagesEndRef}>
                    <FlexLayout direction="horizontal" align="stretch" style={{ flexWrap: 'wrap' }}>
                        {pages.map(({ name, description, icon }, index) => (
                            <div className={`tile ${selectedTab === index ? "active-tile" : ""}`} role="button" onClick={() => setSelectedTab(index)}>
                                <FlexLayout>
                                    <FontAwesomeIcon icon={icon} />
                                    <div>{name}</div>
                                </FlexLayout>
                            </div>
                        ))}
                    </FlexLayout>
                </div>

                <div className="info-container">
                    {selectedTab > -1 && pages[selectedTab].description}
                </div>
            </FlexLayout>
        )
    }
}

export default PageContent;