export const getUserSettings = () => {
    let settingsJSON = localStorage.getItem("security_auth");
    let settings = localStorage.security_auth && JSON.parse(settingsJSON)
    return settings || {};
}