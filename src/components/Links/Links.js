import React from "react";
import styles from "./Links.module.css";
import PropTypes from "prop-types";

const Links = ({ youtube_url, youtubeImg, wiki_url, wikiImg }) => {
  return (
    <div className={styles.links}>
      <div>
        <a href={youtube_url} target="_blank" rel="noopener noreferrer">
          <img
            src={youtubeImg}
            alt="youtube icon"
            className={styles.float_left}
          />
          <span className={styles.youtube}>YouTube Video</span>
        </a>
      </div>
      <div>
        <a href={wiki_url} target="_blank" rel="noopener noreferrer">
          <img src={wikiImg} alt="wiki icon" className={styles.float_left} />
          <span className={styles.wiki}>Wikipedia Page</span>
        </a>
      </div>
    </div>
  );
};

export default Links;

Links.propTypes = {
  youtube_url: PropTypes.string.isRequired,
  youtubeImg: PropTypes.string.isRequired,
  wiki_url: PropTypes.string.isRequired,
  wikiImg: PropTypes.string.isRequired
};
