import type { JSX } from "react";
import React from "react";

interface DropdownProps {
  trigger: JSX.Element;
  menu: JSX.Element[];
  className: string | undefined;
}

export default function Dropdown({ trigger, menu, className }: DropdownProps) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div className={className}>
            {React.cloneElement(trigger, {
                onClick: handleOpen,
            })}
        {open ? (
            <ul className="menu">
            {menu.map((menuItem, index) => (
                <li key={index} className="menu-item">
                    {React.cloneElement(menuItem, {
                        onClick: () => {
                        menuItem.props.onClick();
                        setOpen(false);
                        },
                    })}
                </li>
            ))}
            </ul>
        ) : null}
        </div>
    );
};