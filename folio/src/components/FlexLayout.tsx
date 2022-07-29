import "./css/flexlayout.css"

type Props = {
    children: JSX.Element | JSX.Element[],
    direction?: "horizontal" | "vertical",
    align?: "center" | "stretch" | "start" | "end" | "inherit",
};

const FlexLayout = (props: Props) => (
    <div className={`root ${props.direction === "vertical" ? "column" : "row"} align-${props.align ?? "inherit"}`}>
        {props.children}
    </div>
)

export default FlexLayout;