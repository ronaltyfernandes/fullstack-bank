import axios from "axios";

const url = "http://localhost:3000";

export const fullStackApi = axios.create({
  baseURL: url,
});

const ROUTES_WITHOUT_USER_FILTER = ['/auth/me', '/', '/status'];

// Interceptor de request — injeta token e userId
fullStackApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('finan_login_token');
  const userId = localStorage.getItem('finan_user_id');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (userId && config.method === 'get' && !ROUTES_WITHOUT_USER_FILTER.includes(config.url)) {
    config.params = { userId, ...config.params};
  }

  return config;
});

// Interceptor de response — trata token expirado/inválido globalmente
fullStackApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('finan_login_token');
      localStorage.removeItem('finan_user_id');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth
export async function login(credentials) {
  const response = await fullStackApi.post("/auth/login", credentials);
  localStorage.setItem('finan_user_id', response.data.user_id);
  localStorage.setItem('finan_login_token', response.data.access_token);

  return response;
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

export async function getBankAccounts() {
  return fullStackApi.get("/bank-account");
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
export async function getTransactions(params) {
  return fullStackApi.get("/transaction", { params });
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

export async function deleteTransaction(id) {
  return fullStackApi.delete(`/transaction/${id}`);
}

export async function getTransactionTotalsByCategory(params) {
  return fullStackApi.get("/transaction/totals-by-category", { params });
} 

export async function getTransactionMonthlyBalance(params) {
  return fullStackApi.get("/transaction/monthly-balance", {params});
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