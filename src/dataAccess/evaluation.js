import API from "./API";

export async function getCriterion() {
    let responseData = {};
    let body = {
        idPlan: 1
    };
    await API.post("/getCriterion", body)
        .then(res => {
            responseData=res.data.criterions;
        })
        .catch(err => console.log(err));
    console.log(responseData);
    return responseData;
}

export async function consultQuestionary(){
    let responseData = {};
    let body = {
        idEvaluation: 1
    };
    await API.post("/consultQuestionary", body)
        .then(res => {
            responseData=res.data.questionary;
        })
        .catch(err => console.log(err));
    console.log(responseData);
    return responseData;
}

export async function consultResult(){
    let responseData = {};
    let body = {
        idEvaluation: 1
    };
    await API.post("/result", body)
        .then(res => {
            responseData=res.data.result;
        })
        .catch(err => console.log(err));
    console.log(responseData);
    return responseData;
}

/* Registro */
export async function registerObjectives(){
    let responseData = {};
    let body = {
        idEvaluation: 1
    };
    await API.post("/registerObjectives", body)
        .then(res => {
            responseData=res.data.result;
        })
        .catch(err => console.log(err));
    console.log(responseData);
    return responseData;
}