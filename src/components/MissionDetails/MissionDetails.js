import React from "react";
import styles from "./MissionDetails.module.css";

const MissionDetails = ({
  name,
  number,
  date,
  site,
  rocketName,
  rocketType,
  details
}) => {
  return (
    <p>
      <span className={styles.flight_name}>{name}</span>
      <br />
      <strong>Flight Number:</strong> {number}
      <br />
      <strong>Date:</strong> {date}
      <br />
      <strong>Location:</strong> {site}
      <br />
      <strong>Rocket Name:</strong> {rocketName}
      <br />
      <strong>Rocket Type:</strong> {rocketType}
      <br />
      <strong>Mission Details:</strong> {details}
    </p>
  );
};

export default MissionDetails;
