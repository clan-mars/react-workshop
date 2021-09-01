import React from "react";
import Climate from "./climate/Climate";
import Header from "./layout/Header";

import { sensor } from '../lib/Sensor';
import Footer from "./layout/Footer";

function App() {
    return (
        <div>
            <Header text="Fancy temperature thingy" />
            <Climate sensor={sensor} />
            <Footer text="Copyright(c) Group 1" />
        </div>
    );
}

export default App;