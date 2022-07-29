import "./css/chatbubble.css";
import FlexLayout from "./FlexLayout";
import { useState } from 'react';

type Props = {
    children: JSX.Element | JSX.Element[],
    isSent: boolean,
    delay: number,
}

const ChatBubble = (props: Props) => {
    const [loading, setLoading] = useState(true);
    const id = setTimeout(() =>
        setLoading(false)
        , props.delay)

    if (loading) {
        return null;
    }
    else {
        return (
            < FlexLayout direction="vertical" align={props.isSent ? "end" : "start"} >
                <div className={`chatbubble-root ${props.isSent ? 'sent' : 'received'}`}>
                    {props.children}
                </div>
            </FlexLayout >
        )
    }
}

export default ChatBubble;