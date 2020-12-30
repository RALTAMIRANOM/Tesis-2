import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

export default class APITemporal {
  static obtenerCriterios() {
    return api.post("getCriterion", { idPlan: 1 }).then((response) => {
      let data = response.data;
      return data;
    });
  }
}
