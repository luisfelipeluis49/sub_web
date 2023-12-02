import React from "react";
import { ToggleInput, ToggleLabel, ToggleSpan } from "../style";

export const Toggle = ({ label, toggled, onClik }) => {
    const [isToggled, toggle] = React.useState(toggled);

    const callback = () => {
        toggle(!isToggled)
        onClik(!isToggled);
    }

    return (
        <ToggleLabel>
            <ToggleInput type="checkbox" defaultChecked={isToggled} onChange={callback} />
            <ToggleSpan />
        </ToggleLabel>
    )
}