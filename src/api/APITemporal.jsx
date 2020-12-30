import axios from "axios";

const api = axios.create({
  baseURL: "http://54.204.79.35:80",
});

export default class APITemporal {
  static obtenerCriterios() {
    return api.post("getCriterion", { idPlan: 1 }).then((response) => {
      let data = response.data;
      return data;
    });
  }
}
