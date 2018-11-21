import React from "react";

const Row = props => {
  return (
    <tr>
      <img src={props.patch_url} className="patch" alt="mission patch" />
      <td>{props.number}</td>
      <td>{props.name}</td>
      {/* <td>{props.year}</td> */}
      <td>{props.date}</td>
      <td>{props.site}</td>
      <td>{props.details}</td>
    </tr>
  );
};

export default Row;
