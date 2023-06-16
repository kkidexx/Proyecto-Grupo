import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserGuestScreen from "./UserGuestScreen/UserGuestScreen";
import UserLogetScreen from "./UserLogetScreen";
import LoadingModa from "../../componets/Shared/LoadingModa/LoadingModa";

const Acconunts = () => {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // console.log(user);
      setHasLogged(user != null ? true : false);
    });
  }, []);

  if (hasLogged == null) {
    return <LoadingModa show={true} text="Cargando" />;
  }

  return hasLogged == true ? <UserLogetScreen /> : <UserGuestScreen />;
};

export default Acconunts;
