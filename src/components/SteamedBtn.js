// react
import React, { useEffect, useState } from "react";
// custom hook
import UseDidMountEffect from "../components/UseDidMountEffect";
// redux 
import { useDispatch, useSelector } from "react-redux";
import { addSteamed, deleteSteamed } from "../reducers/steamedReducer";
// image 
import { Favorite } from "@mui/icons-material";
// style
import { SteamedBtnStyle } from "../styles/SteamedBtnStyle";

export default function SteamedBtn({ info }) {
  // useSelector
  const steamedSelector = useSelector(state => state.steamedReducer);
  const steamedInfos = steamedSelector.map(v => v.id);
  // useDispatch
  const dispatch = useDispatch();
  // steamedState
  const [steamedState, setSteamedState] = useState(false);
  // onclick with steamed state
  const onSteamedState = e => {
    e.preventDefault();
    setSteamedState(prev => !prev);
  }

  const FindSteamedId = (v) => {
    if (info.id === v) {
      setSteamedState(true);
    }
  }

  // put into reducer
  UseDidMountEffect(() => {
    if (steamedState) {
      dispatch(addSteamed(info));
    } else {
      dispatch(deleteSteamed(info.id));
    }
  }, [steamedState]);

  useEffect(() => {
    steamedInfos.map(v => {
      return FindSteamedId(v);
    });
  }, [])

  return (
    <SteamedBtnStyle>
      <button 
        className={steamedState ? "btn--steamed" : "btn--unSteamed"}
        onClick={onSteamedState}
      >
        <Favorite className="favorite" />
      </button>
    </SteamedBtnStyle>
  )
}
