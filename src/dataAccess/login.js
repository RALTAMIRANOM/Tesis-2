import API from "./API";

export async function valitateUser(user,password) {
    let responseData = {};
    let body ={
        email: user,
        password: password
    }
    console.log("BODY", body)
    await API.post("/validatedUser", body)
        .then(res => {
            console.log(res.data);
            responseData=res.data.result;
        })
        .catch(err => console.log(err));
    console.log(responseData);
    return responseData;
}