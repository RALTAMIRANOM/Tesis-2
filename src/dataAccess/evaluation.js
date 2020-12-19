import API from "./API";

export async function getCriterion() {
  let responseData = {};
  let body = {
    idPlan: 1,
  };
  await API.post("/getCriterion", body)
    .then((res) => {
      responseData = res.data.criterions;
    })
    .catch((err) => console.log(err));
  console.log(responseData);
  return responseData;
}

export async function consultQuestionary(evaluation) {
  let responseData = {};
  let body = {
    idEvaluation: evaluation,
  };
  await API.post("/consultQuestionary", body)
    .then((res) => {
      responseData = res.data.questionary;
    })
    .catch((err) => console.log(err));
  console.log(responseData);
  return responseData;
}

export async function consultResult(evaluation) {
  let responseData = {};
  let body = {
    idEvaluation: evaluation,
  };
  await API.post("/result", body)
    .then((res) => {
      responseData = res.data;
    })
    .catch((err) => console.log(err));
  console.log(responseData);
  return responseData;
}

/* Registro de objetivos*/
export async function registerObjectives(objectivesList) {
  let responseData = {};
  let body = {
    objectives: objectivesList,
  };
  console.log("register api", body);
  await API.post("/registerObjectives", body)
    .then((res) => {
      responseData = res.data.result;
    })
    .catch((err) => console.log(err));
  console.log(responseData);
  return responseData;
}

/* Consulta de evaluaciones */
export async function consultEvaluations() {
  let responseData = {};
  let body = {
    idUser: 1,
  };
  console.log("entro api");
  await API.post("/consultEvaluation", body)
    .then((res) => {
      responseData = res.data.evals;
    })
    .catch((err) => console.log(err));
  console.log(responseData);
  return responseData;
}

/* Consulta de objetivos */
export async function consultObjectives(evaluation) {
  let responseData = {};
  let body = {
    idEvaluation: evaluation,
  };
  console.log("entro api consult objectives", evaluation);
  await API.post("/consultObjectives", body)
    .then((res) => {
      responseData = res.data.result.objectives;
    })
    .catch((err) => console.log(err));
  console.log(responseData);
  return responseData;
}

/* Consulta de puntuación */
export async function consultWeightModify(evaluation) {
  let responseData = {};
  let body = {
    idEvaluation: evaluation,
  };
  await API.post("/consultWeightModify", body)
    .then((res) => {
      responseData = res.data.weightModify;
    })
    .catch((err) => console.log(err));
  console.log(responseData);
  return responseData;
}

/* Registro de puntuación*/
export async function registerModifiedWeights(modifiedWeights) {
  let responseData = {};
  let body = {
    weightModify: modifiedWeights,
  };
  console.log("modified weights api", body);
  await API.post("/modifyWeight", body)
    .then((res) => {
      responseData = res.data.result;
    })
    .catch((err) => console.log(err));
  console.log(responseData);
  return responseData;
}

/* Registro de cuestionario*/
export async function registerQuestionary(questionary) {
  let responseData = {};
  let body = {
    questionary: questionary,
  };
  console.log("questionary register api", body);
  await API.post("/saveAnswer", body)
    .then((res) => {
      responseData = res.data.result;
    })
    .catch((err) => console.log(err));
  console.log(responseData);
  return responseData;
}
