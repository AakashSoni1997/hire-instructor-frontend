import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Studentmyprofile from "../Studentprofile/Studentmyprofile";
import Myprofile from "./MyProfile/Myprofile";

const ProfileWrraper = () => {
  const { role } = useParams();
  if (role == "instructor") {
    return <Myprofile />;
  } else {
    return <Studentmyprofile />;
  }
};

export default ProfileWrraper;
