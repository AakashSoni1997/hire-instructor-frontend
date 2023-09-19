import { getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth();
const socialMediaAuth = (provider) => {
    return signInWithPopup(auth, provider).then((response) => {
        return response
    }).catch((error) => {
        return error
    })
}

export default socialMediaAuth