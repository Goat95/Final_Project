// react
import React, { useState, useEffect } from "react";
// react router dom
import { StyledLink } from "../styles/SearchStyle";
// redux
import { useSelector, useDispatch } from "react-redux";
import { deleteSteamed } from "../reducers/steamedReducer";
// routes & components
import ListCard from "../components/ListCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// image
import { Close } from "@mui/icons-material";
// style
import { FavorStyle } from "../styles/FavorStyle";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

export default function Favor() {
  // useSelector
  const steamedSelector = useSelector((state) => state.steamedReducer);
  // useDispatch
  const dispatch = useDispatch();
  // list state
  const [listState, setListState] = useState(false);

  useEffect(() => {
    if (steamedSelector.length === 0) {
      setListState(true);
    }
  }, []);

  const NoList = () => {
    return (
      <FavorStyle>
        <div className="recent-products-title">
          <AddCardIcon className="addCardIcon" />
          <span>찜한 매물</span>
        </div>
        <Divider variant="middle" />
        <div>
          <img
            style={{ width: "100%" }}
            src="https://img.freepik.com/free-vector/error-404-nothing-found-banner_18591-27323.jpg?w=2000"
          />
        </div>
      </FavorStyle>
    );
  };

  const onDeleteList = (e) => {
    if (window.confirm("찜한 매물을 삭제하시겠습니까?")) {
      dispatch(deleteSteamed(e));
    }
  };

  const getSteamedList = () => {
    return (
      <FavorStyle>
        <div className="recent-products-title">
          <AddCardIcon className="addCardIcon" />
          <span>찜한 매물</span>
        </div>

        <Divider variant="middle" />
        <div className="steamedList">
          {steamedSelector.map((v) => (
            <div className="steamedWrap" key={v.id}>
              <StyledLink to={`/search/${v.id}`}>
                <ListCard info={v} />
              </StyledLink>
              <button className="closeBtn" onClick={() => onDeleteList(v.id)}>
                <Close className="close" />
              </button>
            </div>
          ))}
        </div>
      </FavorStyle>
    );
  };

  return <>{listState ? NoList() : getSteamedList()}</>;
}
