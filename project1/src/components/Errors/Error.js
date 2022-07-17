import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Error.css";
function Error() {
  return (
    <div>
      <FontAwesomeIcon icon={faTriangleExclamation} />
    </div>
  );
}

export default Error;
