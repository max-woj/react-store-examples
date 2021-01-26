import React, {useEffect, useState} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {selectCount} from "./features/counter/counterSlice";
import Section from "./components/Section/Section";
import MySuperParagraph from "./components/MySuperParagraph/MySuperParagraph";
import AppContext from "./AppContext";

function App() {
    const count = useSelector(selectCount);
    const [ourValues, setOurValues] = useState({
        test1: 'wartość zmieniona z App',
        test2: 'test2',
        count: 0,
    });

    const [buttonVisible, setButtonVisible] = useState(true);


    return (
        <div className="App">
            <header className="App-header">

                <AppContext.Provider value={{...ourValues, setOurValues}}>
                    <p>Obecny stan licznika to {count}</p>
                    <button onClick={()=> setButtonVisible(visibility => !visibility)}>Widoczność</button>
                    <Section
                        title={"Nowa sekcja"}
                    >
                        <p>Jakaś treść sekcji</p>
                    </Section>
                    {buttonVisible && <MySuperParagraph />}
                </AppContext.Provider>
            </header>
        </div>
    );
}

export default App;
