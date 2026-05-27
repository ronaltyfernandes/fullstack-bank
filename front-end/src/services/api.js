import axios from "axios";

const url = "http://localhost:3000"

export const fullStackApi = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("intelicampo_login_token")}`,
  },
});

export async function getTransactions() {
  return fullStackApi.get("/transaction");
}

export async function getCategories() {
  return fullStackApi.get("/category");
}

export async function createTransaction(transaction) {
  return fullStackApi.post("/transaction", transaction);
  };
