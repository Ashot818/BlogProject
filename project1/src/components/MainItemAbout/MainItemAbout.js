import { faCalendar, faComment } from "@fortawesome/free-regular-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReadMore from "../ReadMore/ReadMore";
import "./MainItemAbout.css";

export default function MainItemAbout({ data }) {
  return (
    <div className="main-item-about">
      <h2>{data.title}</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          01 Jan 2025
        </li>
        <li>
          <FontAwesomeIcon icon={faDesktop} />
          Web Design
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          15 Comments
        </li>
      </ul>
      <p>{data.body}</p>
      <ReadMore data={data} />
    </div>
  );
}
