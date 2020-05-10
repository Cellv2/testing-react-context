import React, { useContext, useState } from "react";
import { Context } from "../stores/store";
import { Link } from "react-router-dom";

type Props = {};

const InputComponent = (props: Props) => {
    // @ts-ignore
    const [state, setState] = useContext(Context);

    const [_name, _setName] = useState({});
    const [_email, _setEmail] = useState({});

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            name: _name,
            email: _email,
        };

        setState(data);
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name;
        const value = event.target.value;

        switch (key) {
            case "name":
                _setName(value);
                return;
            case "email":
                _setEmail(value);
                return;
            default:
                throw new Error();
        }
    };

    return (
        <>
            <h2>Submit form to update global state</h2>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        name="name"
                        type="text"
                        onChange={handleOnChange}
                        placeholder={state.name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        name="email"
                        type="text"
                        onChange={handleOnChange}
                        placeholder={state.email}
                    />
                </div>
                <button>Update data</button>
            </form>
            <br />
            <Link to="/">Check on the global state</Link>
        </>
    );
};

export default InputComponent;
