import "./css/pagecontent.css";
import FlexLayout from "./FlexLayout";
import { useEffect, useRef, useState } from 'react';

type Props = {
    children: JSX.Element | JSX.Element[],
    delay: number,
}

const PageContent = (props: Props) => {
    const [loading, setLoading] = useState(true);
    let messagesEndRef = useRef<HTMLDivElement>(null);

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
                    {props.children}
                </div>
            </FlexLayout >
        )
    }
}

export default PageContent;