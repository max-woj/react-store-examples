import React, {useContext} from 'react';
import MySuperParagraph from "../MySuperParagraph/MySuperParagraph";
import AppContext from "../../AppContext";

const Info = () => {
    const ctx = useContext(AppContext);

    return <span>Wartość z kontekstu {ctx.test1} <MySuperParagraph/></span>;
};

export default Info;
