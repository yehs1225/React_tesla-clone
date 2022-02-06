import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {
    console.log(backgroundImg)
  return(
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>

        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText&&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section;
const Wrap = styled.div`
    width:100vw;
    height:100vh; 
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:${props =>`url("/images/${props.bgImage}")`};
    display:flex;
    flex-direction:column;
    justify-content:space-between;//vertical
    align-items:center;//horizontal
`
const ItemText = styled.div`
    font-size:15px;
    padding-top:20vh;
    text-align:center;
    p{
        margin-top:5px;
    }
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:1250px){
        flex-direction:column;
        margin-bottom:10px;

    }
`
const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height: 40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
    @media (max-width:1250px){
        height: 25px;
        width:280px;
    }
`
const RightButton = styled(LeftButton)`
    background-color:white;
    opacity:0.65;
    color:black;
` 
const DownArrow = styled.img`
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`
const Buttons = styled.div``