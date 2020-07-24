import React from "react";

import { ReactComponent as BackIcon } from "../../assets/icons/back_ico.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/more_ico.svg";

const Header = ({ album }) => (
  <div className="header">
    <button className="button button--blue">
      <BackIcon
        className="button__icon"
        width="16"
        height="29"
      />
    </button>
    <div className="header__album-info">
      <span className="header__caption">Album</span>
      <span className="header__title">{album}</span>
    </div>
    <button className="button button--white">
      <MoreIcon
        className="button__icon"
        width="16"
        height="29"
      />
    </button>
  </div>
);

export default Header;
