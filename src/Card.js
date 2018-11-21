import React from "react";

const Card = props => {
  return (
    // <div className="card">
    <div className="margins">
      <table>
        <col width="30%" />
        <col width="70%" />
        <tr>
          <td>Flight Number: </td>
          <td>{props.number}</td>
        </tr>
        <tr>
          <td>Flight Name: </td>
          <td>{props.name}</td>
        </tr>
        <tr>
          <td>Flight Year: </td>
          <td>{props.year}</td>
        </tr>
      </table>
    </div>
    // </div>
  );
};

export default Card;

{
  /* <div className="margins">
    <table>
      <p>Flight Number: {props.number}</p>
      <p>Flight Name: {props.name}</p>
      <p>Flight Year: {props.year}</p>
      </table>
    </div> */
}
