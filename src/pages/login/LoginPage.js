import React, {useContext, useState} from "react";
import "./LoginPage.scss";
import NeoCard from "../../components/NeoCard/NeoCard";
import NeoIconTextButton from "../../components/NeoIconTextButton/NeoIconTextButton";
import NeoTextInput from "../../components/NeoTextInput/NeoTextInput";
import {AppContext} from "../../contexts/AppContext";

export default function LoginPage(props) {
    const [appState, setAppState] = useContext(AppContext);
    const handleLogin = () => {
      setAppState({
          ...appState,
          activePage: "home"
      });
    };
    
    return (
        <div className="LoginPage">
            <NeoCard>
                <div className="NeoCard-Header">
                    <h4 className="NeoCard-Header">Yaqoot 300</h4>
                </div>
                <div className="NeoCard-Body">
                    <NeoTextInput value={appState.username}
                                  handleChange={value => setAppState({...appState, username: value})} 
                                  placeholder={"User name"} />
                    <NeoTextInput type="password"
                                  value={appState.password}
                                  handleChange={value => setAppState({...appState, password: value})}
                                  placeholder={"Password"} />
                </div>
                <div className="NeoCard-Footer">
                    <NeoIconTextButton color="red" icon="fa fa-lock" handleClick={handleLogin} />
                </div>
            </NeoCard>
        </div>
    )
}