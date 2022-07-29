import "./css/chatcontainer.css";

type Props = {
    messages: JSX.Element[]
}

const ChatContainer = ({messages}: Props): JSX.Element => (
    <div className="chat-container">
        {messages.map((message) => message)}
    </div>
)

export default ChatContainer;