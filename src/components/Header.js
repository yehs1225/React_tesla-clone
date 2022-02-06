import React from 'react'
import styled from 'styled-components'
// import CloseIcon from '@mui/icons-material/Close';
// import CancelIcon from '@mui/icons-material/Cancel';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div>
      <Container>
        <a>
            <img src="/images/logo.svg"/>
        </a>
        <Menu>
            <a href="#">Model 3</a>
            <a href="#">Model Y</a>
            <a href="#">Model S</a>
            <a href="#">Model X</a>
            <a href="#">Solar Roof</a>
            <a href="#">Solar Panels</a>
        </Menu>
        <RightMenu>
            <a className ="header__shop" href="#">Shop</a>   
            <a className ="header__account" href="#">Account</a>   
            <a className ="header__menu" href="#">Menu</a>   
        </RightMenu>
        <BurgerNav>
            <ShoppingBasketIcon/>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Powerall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
        </BurgerNav>
      </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
    min-height:50px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:10;
    left:0;
    right:0;
    img{
      cursor:pointer;
      height:15px;
    }
    z-index:10;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
      cursor:pointer;
        font-weight:600;
        text-decoration:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
        font-size:10px
    }
    @media (max-width:900px){
      display:none;
  }
`
const RightMenu = styled.div`
  a{
    font-weight:600;
    text-decoration:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
    font-size:10px;
  }
  & .header__shop,.header__account{
      @media (max-width:900px){
        display:none;
    }
  }
  & .header__menu{
    @media (max-width:900px){
      background-color:rgba(23,26,32,0.05);
      padding:5px 10px;
      border-radius:5px;
      margin-left:0;
  }
}
`
const BurgerNav = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:50vw;
  z-index:100;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  font-size:10px;
  li{
    padding:10px 0;
  }
`