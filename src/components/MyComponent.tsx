import React, { useContext } from "react";

import { Context } from "../stores/store";

const MyComponent = () => {
    //@ts-ignore
    const [state, setState] = useContext(Context);

    const handleOnClick = async (): Promise<void> => {
        const request = await fetch("https://randomuser.me/api/");
        const response = await request.json();
        const personData = response.results[0];

        const person = {
            name: `${personData.name.first} ${personData.name.last}`,
            email: personData.email,
        };

        setState(person);

        return;
    };

    return (
        <>
            <h2>MyComponent</h2>
            <p>Name: {state.name}</p>
            <p>Email: {state.email}</p>
            <button onClick={handleOnClick}>Click</button>
        </>
    );
};

export default MyComponent;
