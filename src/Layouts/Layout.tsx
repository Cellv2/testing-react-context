import React from "react";
import { Link } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

const Layout = (props: Props) => {
    return (
        <div>
            <header>
                This is definitely a header!
                <p>
                    <Link to="/">MyComponent</Link>
                </p>
                <p>
                    <Link to="/input">Input</Link>
                </p>
            </header>
            {props.children}
        </div>
    );
};

export default Layout;
