import React, {useContext} from 'react';
import './Section.css';
import Info from "../Info/Info";
import AppContext from "../../AppContext";

function Section(props) {
    let {
        title,
        children,
    } = props;
    const countFromContext = useContext(AppContext).count;
    return (
        <div
            className={'Section wrapper'}
        >
            <h3>{title}</h3>
            <p>A wartość z context to {countFromContext}</p>
            <Info/>
            {children}
        </div>
    );
}


export default Section;
