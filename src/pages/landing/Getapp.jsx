import React, { useContext } from "react";
import Navigation from "../../components/landing/Navigation";
import Bottomer from "../../components/landing/Bottomer";
import Landing from "../../loading/Landing";
import { Responsive } from "../../context/landing/Responsive";

function Getapp() {
  const { loading } = useContext(Responsive);
  return (
    <div>
      {loading ? (
        <Landing />
      ) : (
        <>
          <Navigation link={"getapp"} title="Levitra - Health Care" />
          <Bottomer />
        </>
      )}
    </div>
  );
}

export default Getapp;
