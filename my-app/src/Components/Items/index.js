import React from "react";
import styled from "styled-components";
import ImageFilters from "../ImageFilters";
import Item from "../Item";

const Items = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
    box-radius:10px;
    margin: 5px 0;
    display:flex;
    align-items:center;
    justify-content:space-around;
    padding: 10px;
    font-size: 12px;
`;

export default (props) => {
    return <Items>
        {ImageFilters(props.type)}
        <Item {...props} />
        <span>{props.date}</span>
    </Items>
}