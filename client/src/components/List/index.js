import React from "react";

export const List = ({ childern }) => (
    <ul className="list-group">{childern}</ul>
);

export function ListItem({ childern }){
    return <li className="list-group-item">{childern}</li>;
}