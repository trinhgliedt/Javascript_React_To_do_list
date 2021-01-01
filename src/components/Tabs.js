import React, { useState } from "react";
// import {CSSTransition} from 'react-transition-group';

const TabList = ({ name, content }) => {
    const tabs = [
        {
        name: "Tab 1",
        content:
            "Lorem 1 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
        name: "Tab 2",
        content:
            "Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
        name: "Tab 3",
        content:
            "Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ];
    const [state, setState] = useState({
        // to empty state out before setting state, to ensure only one selected tab is stored in state.
        content: "",
        tabColor: "",
        id: "",
    });



    const onClickHandler = (event, index) => {
        setState({
            content: tabs[index].content,
            tabColor: "green",
            id: index, // Need id to compare during OnClick
        });
        // alert(`Tab ${index+1} was clicked`); // This works but it's quite annoying to have to click ok for the alert which is why it's being commented out.
        


    };

    return (
        <div>
        
        {tabs.map((tab, index) => (
            //   when button (tab name) is clicked, mark this tab as selected tab by assigning state to it. 
            <button
            onClick={(event) => onClickHandler(event, index)}
            key={index}
            //   Change tab color if current tab index equals the index stored in state.
            style={{
                backgroundColor: state.id === index && state.tabColor,
            }}
            
            >
            {tab.name}
            </button>
        ))}
        <p>{state.content}</p>
        
        </div>
    );
};
export default TabList;
