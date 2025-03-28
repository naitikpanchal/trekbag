import Button from "./Button";
// import { secondaryButtons } from "../lib/constants";

export default function ButtonGroup({handleRemoveAllItems, handleResetToInitialItems, handleMarkAllAsComplete, handleMarkAllAsIncomplete}) {
    const secondaryButtons = [
        { text: "Mark all as complete", onClick: handleMarkAllAsComplete },
        { text: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
        { text: "Reset to default", onClick: handleResetToInitialItems },
        { text: "Remove all items", onClick: handleRemoveAllItems },
    ];

    return (
        <section className="button-group">
            {/* <Button buttonType="secondary" onClick={handleMarkAllAsComplete}>Mark all as complete</Button>
            <Button buttonType="secondary" onClick={handleMarkAllAsIncomplete}>Mark all as incomplete</Button>
            <Button buttonType="secondary" onClick={handleResetToInitialItems}>Reset to default</Button>
            <Button buttonType="secondary" onClick={handleRemoveAllItems}>Remove all items</Button> */}
            {secondaryButtons.map(({text, onClick}) => {
                return (<Button key={text} onClick={onClick} buttonType="secondary">{text}</Button>);
            })}
        </section>
    )
}
