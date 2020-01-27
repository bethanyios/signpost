<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/close.svg";

import "./ServiceInformation.css";

=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> master

const ServiceInfo = ({ selectedMarkerData }) => {
  console.log(selectedMarkerData);
  return (
    <>
      <Link to='/map'>
      <button className="close-button">
      <Close />
      </button>
      </Link>
      <aside>
        <a>
          <h3>{selectedMarkerData.fields.Name}</h3>
          <p>{selectedMarkerData.fields.Description}</p>
          <p>{selectedMarkerData.fields.Address}</p>
          <p>{selectedMarkerData.fields.Opening}</p>
        </a>
      </aside>
      <Link to='/suggest-change'>
        <button>Suggest edit</button>
      </Link>
    </>
  );
};

export default ServiceInfo;
