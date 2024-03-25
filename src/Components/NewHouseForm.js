import React, { useState } from "react";

export const NewHouseForm = (props) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name) {
            props.addNewHouse({ name });
            setName('');
        } else {
            console.log('Invalid input');
        }
    };

    return (
        <div>
            <h2>Add New House</h2>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button type='submit'>Add House</button>
            </form>
        </div>
    );
};


