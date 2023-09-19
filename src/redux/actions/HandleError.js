import React from "react";
;

const HandleError = error => {
  if (error.response) {
    if (error.response?.data?.message === "Session Expired.") {
      ForcelogoutAction();
      // window.location.replace("http://localhost:3000/login");
    } else {
      toast.error(error.response?.data?.message);
    }
  }
  if (error === undefined) {
    window.location.replace("login");
  }
};
export default HandleError;

export const ForcelogoutAction = () => {
  // var token = JSON.parse(Cookies.get("auth"));
  // axios({
  //   url: "http://192.168.2.80:3334/api/v1/admin/force_logout",
  //   method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //     Accept: "application/json",
  //     Authorization: "BEARER " + token.data.token
  //   }
  // })
  //   .then(
  //     res => (
  //       toast.success(res.data.message),
  //       window.location.replace("login"),
  //       Cookies.remove("auth")
  //     )
  //   )
  //   .catch(error => {
  //     if (error.response) {
  //       JSON.parse(Cookies.remove("auth"));
  //       window.location.replace("login");
  //     }
  //   });
};
