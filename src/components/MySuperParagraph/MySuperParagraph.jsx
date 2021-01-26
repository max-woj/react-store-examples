import React, {useContext, useEffect, useState} from 'react';
import './MySuperParagraph.css';
import classnames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {increment, selectCount, divide} from "../../features/counter/counterSlice";
import AppContext from "../../AppContext";

function MySuperParagraph({
    darkMode = true,
                          }) {
    const incrementValue = 2;
    const [innerDarkMode, setInnerDarkMode] = useState(darkMode);
    const dispatch = useDispatch();
    const count = useSelector(selectCount);
    const ctx = useContext(AppContext);
    const incrementor = () => dispatch(increment(2));
    const divider = (x) => dispatch(divide(x));

    const setOurValues = ctx.setOurValues;
    const divideValue = 0;

    useEffect(() => {
        console.log('odpalam się raz');
        return () => {
            console.log('znikam....');
        }
    },[]);

    return (
        <div>
    <span
        onClick={() => {
            incrementor();
            setOurValues((state) => {
                return {...state, count: state.count + incrementValue}
            });
            setInnerDarkMode(!innerDarkMode);
        }}
        className={classnames('MySuperParagraph', 'wrapper', {darkMode: innerDarkMode, lightMode: !innerDarkMode})}
    >
       dodaj 2 do {count}
    </span>
            <span
                onClick={() => {
                    setInnerDarkMode(!innerDarkMode);
                }}
                className={classnames('MySuperParagraph', 'wrapper', {darkMode: innerDarkMode, lightMode: !innerDarkMode})}
            >
       Flip mode
    </span>
        </div>
    );
}

export default MySuperParagraph;
