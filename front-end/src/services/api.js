import axios from "axios";

const url = "http://localhost:3000";

export const fullStackApi = axios.create({
  baseURL: url,
});

fullStackApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('finan_login_token')
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    }
  }
  return config
})

// Auth
export async function login(credentials) {
  return fullStackApi.post("/auth/login", credentials);
}

export async function getMe() {
  return fullStackApi.get('/auth/me');
}

// App
export async function getRoot() {
  return fullStackApi.get("/");
}

export async function getStatus() {
  return fullStackApi.get("/status");
}

// Users
export async function createUser(user) {
  return fullStackApi.post("/user", user);
}

export async function getUsers(params) {
  return fullStackApi.get("/user", { params });
}

export async function getUserById(id) {
  return fullStackApi.get(`/user/${id}`);
}

export async function updateUser(id, user) {
  return fullStackApi.patch(`/user/${id}`, user);
}

export async function deleteUser(id) {
  return fullStackApi.delete(`/user/${id}`);
}

// BankAccount
export async function createBankAccount(bankAccount) {
  return fullStackApi.post("/bank-account", bankAccount);
}

export async function getBankAccounts(params) {
  return fullStackApi.get("/bank-account", { params });
}

export async function getBankAccountById(id) {
  return fullStackApi.get(`/bank-account/${id}`);
}

export async function updateBankAccount(id, bankAccount) {
  return fullStackApi.patch(`/bank-account/${id}`, bankAccount);
}

export async function deleteBankAccount(id) {
  return fullStackApi.delete(`/bank-account/${id}`);
}

// Transactions
export async function getTransactions() {
  return fullStackApi.get("/transaction");
}

export async function getTransactionById(id) {
  return fullStackApi.get(`/transaction/${id}`);
}

export async function updateTransaction(id, transaction) {
  return fullStackApi.patch(`/transaction/${id}`, transaction);
}

export async function createTransaction(transaction) {
  return fullStackApi.post("/transaction", transaction);
}

export async function deleteTransacion(id) {
  return fullStackApi.delete(`/transaction/${id}`);
}


// Categorys
export async function getCategories() {
  return fullStackApi.get("/category");
}

export async function getCategoryById(id) {
  return fullStackApi.get(`/category/${id}`);
}

export async function updateCategory(id, category) {
  return fullStackApi.patch(`/category/${id}`, category);
}

export async function createCategory(category) {
  return fullStackApi.post("/category", category);
}

export async function deleteCategory(id) {
  return fullStackApi.delete(`/category/${id}`);
}


