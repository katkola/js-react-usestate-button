import React, { useState } from 'react';

const Person = (props) => {

    const {firstName, lastName, age, hairColor} = props;
    
    const [bday, setBday] = useState({birthdays:age});


    const happyBirthday = () => {
        setBday({birthdays: bday.birthdays +1});
    }

    
    return (
        <div>
            <h1>
            {firstName} {lastName}
            </h1>
            <p>Age: {bday.birthdays}</p>
            <p>hairColor: {hairColor}</p>
            <button onClick={happyBirthday}>Birthday Button for {firstName}{lastName}</button>
        </div>
    );

}
export default Person;