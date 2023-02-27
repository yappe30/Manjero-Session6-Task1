import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChangeTwo } from './action';

const CountTwo = () => {
    const empDataTwo = useSelector((state) => state.empDataTwo);
    const dispatch = useDispatch();

    const empDataValue = () => {
        dispatch(onChangeTwo('Manager'))
    }
    return (
        <div>
            <p>{empDataTwo.name}</p>
            <p>{empDataTwo.designation}</p>
            <button onClick={empDataValue}>Update</button>
        </div>
    );
};

export default CountTwo;