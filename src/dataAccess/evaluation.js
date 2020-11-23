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
export async function registerObjectives(objectivesList){
    let responseData = {};
    let body = {
        objectives: objectivesList,

    };
    await API.post("/registerObjectives", body)
        .then(res => {
            responseData=res.data.result;
        })
        .catch(err => console.log(err));
    console.log(responseData);
    return responseData;
}

/* Consulta de evaluaciones */
export async function consultEvaluations(){
    let responseData = {};
    let body = {
        idUser: 1
    };
    console.log("entro api")
    await API.post("/consultEvaluation", body)
        .then(res => {
            responseData=res.data.evals;
        })
        .catch(err => console.log(err));
    console.log(responseData);
    return responseData;
}


/* Consulta de objetivos */
export async function consultObjectives(evaluation){
    let responseData = {};
    let body = {
        idEvaluation: evaluation
    };
    console.log("entro api")
    await API.post("/consultObjectives", body)
        .then(res => {
            responseData=res.data.result;
        })
        .catch(err => console.log(err));
    console.log(responseData);
    return responseData;
}