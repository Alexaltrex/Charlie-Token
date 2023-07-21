import React from 'react';
import {Header} from "../A1_Header/Header";
import style from "./App.module.scss";
import {BurgerMenu} from "../A2_BurgerMenu/BurgerMenu";
import {FaqComponent} from "../B5_FAQ/FaqComponent";
import {Footer} from "../A3_Footer/Footer";
import {Manifesto} from "../A4_Manifesto/Manifesto";
import {CharlieToken} from "../B0_CharlieToken/CharlieToken";
import {About} from "../B1_About/About";
import {HowToBuy} from "../B2_HowToBuy/HowToBuy";
import {Roadmap} from "../B3_Roadmap/Roadmap";
import {Tokenomics} from "../B4_Tokenomics/Tokenomics";
import {Disclaimer} from "../A5_Disclaimer/Disclaimer";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <BurgerMenu/>
            <Manifesto/>
            <Disclaimer/>

            <CharlieToken/>
            <About/>
            <HowToBuy/>
            <Roadmap/>
            <Tokenomics/>
            <FaqComponent/>

            <Footer/>
        </div>
    );
}

