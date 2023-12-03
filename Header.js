import React from 'react';
import './Header.css';
// import SearchIcon from "@mui/icons/icons/Search";
import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>

     <div className="header_search" > <input className="header_searchInput" type="text"/>
     <SearchIcon className="header_searchIcon"/>
     </div>

<div className="header_nav"> 

<div className="header_option"> 
    <span className="header_optionlineone"> Hello guest</span>
    <span className="header_optionlineone"> Sign In</span>
</div>
<div className="header_option">
    <span className="header_optionlineone"> Returns</span>
    <span className="header_optiomlineone"> &Orders</span>
</div>
<div className="header_option">
    <span className="header_optionlineone"> Your</span>
    <span className="header_optionlineone"> Prime</span>
</div>

</div>
    </div>
  )
}

export default Header
