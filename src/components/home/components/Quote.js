import React, { useEffect, useState } from 'react';
import {QuoteContainer} from '../styles/Quote.styled';

const LEARN = "Learn";
const DEVELOP = "Develop";
const MAC = "Make a change";

const size = (str) => str.length;

export const Quote = () => {

    const [learn, setLearn] = useState("");
    const [develop, setDevelop] = useState("");
    const [mac, setMac] = useState("");
    const [learnIndex, setLearnIndex] = useState(0);
    const [developIndex, setDevelopIndex] = useState(0);
    const [macIndex, setMacIndex] = useState(0);
    const [index, setIndex] = useState(0);

    // on render type text at speed 100ms/s
    useEffect(() => setTimeout(typeText, 100));

    // Types text based on index state conditions 
    const typeText = () => {
        if (index < size(LEARN)){
            typeLearn();
        } else if (index < size(LEARN) + size(DEVELOP) && index >= size(LEARN)){
            typeDevelop();
        } else if (index < size(LEARN) + size(DEVELOP) + size(MAC) && index >= size(LEARN) + size(DEVELOP) ){
            typeMac();
        } 
        setIndex(index + 1);
    }

    // These functions type the text letter by letter and increase the index of each text respectively
    const typeLearn = () => {
        setLearn(LEARN.substring(0, learnIndex));
        setLearnIndex(learnIndex + 1);
    }

    const typeDevelop = () => {
        setDevelop(DEVELOP.substring(0, developIndex));
        setDevelopIndex(developIndex + 1);
    }

    const typeMac = () => {
        setMac(MAC.substring(0, macIndex));
        setMacIndex(macIndex + 1);
    }

    //These functions return display style of span elements (".", "_")
    const getLearnDisplay = () => {
        return size(learn) === size(LEARN) ? {display:"inline"} : {display: "none"} ;
    }

    const getDevelopDisplay = () => {
        return size(develop) === size(DEVELOP) ? {display:"inline"} : {display: "none"} ;
    }

    const getMacDisplay = () => {
        return size(mac) === size(MAC) ? {display:"inline"} : {display: "none"} ;
    }

    // returns whether to show or not show typing cursor for the given text
    const getCursorCondition = (text) => {
        switch(text){
            case LEARN:
                return index < size(LEARN) ? "_" : "";
            case DEVELOP:
                return index < size(LEARN) + size(DEVELOP) && index >= size(LEARN) ? "_" : "";
            case MAC:
                return index < size(LEARN) + size(DEVELOP) + size(MAC) && index >= size(LEARN) + size(DEVELOP) ? "_" : "";
            default:
                return;
        }
    }

    return (
        <QuoteContainer>
            <p className="learn">
                {learn}{getCursorCondition(LEARN)}
                <span style={getLearnDisplay()}>.</span>
            </p>
            <p className="develop">
                {develop}{getCursorCondition(DEVELOP)}
                <span style={getDevelopDisplay()}>.</span>
            </p>
            <p className="mac">
                {mac}{getCursorCondition(MAC)}
                <span style={getMacDisplay()}>_</span>
            </p>
        </QuoteContainer>
    )
}
