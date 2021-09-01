import React from "react";

interface HeaderProps { text: string }

function Header({ text }: HeaderProps) {
    return (
        <header>
            <h1>{text}</h1>
        </header>
    );
}

export default Header;

