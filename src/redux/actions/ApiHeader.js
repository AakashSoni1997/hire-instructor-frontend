export function apiHeader(unAuth = null) {
  if (unAuth) {
    return {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      // "Content-Type": "application/json",
    };
  }
  if (unAuth == null) {
    const userDetail = localStorage.getItem("security_auth");
    const token = JSON.parse(userDetail)?.token;
    let authToken = `Bearer ${token}`;
    return {  
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: authToken,
    };
  }
}
