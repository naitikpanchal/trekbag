import Button from "./Button";

export default function ButtonGroup() {

    const secondaryButtons = ["Mark all as complete", "Mark all as incomplete", "Reset to default", "Remove all items"];

    return (
        <section className="button-group">
            {/* <Button type="secondary">Mark all as complete</Button>
            <Button type="secondary">Mark all as incomplete</Button>
            <Button type="secondary">Reset to default</Button>
            <Button type="secondary">Remove all items</Button> */}
            {secondaryButtons.map((text) => {
                return (<Button key={text} type="secondary">{text}</Button>);
            })}
        </section>
    )
}
