export const ErrorMessages = {
  // 🧱 ERROS DE BANCO DE DADOS
  UNIQUE_VIOLATION: 'O registro já existe no banco de dados.',
  FOREIGN_KEY_VIOLATION: 'Não é possível excluir ou modificar porque há registros dependentes.',
  NOT_NULL_VIOLATION: 'Campo obrigatório não preenchido.',

  // 💳 TRANSAÇÕES
  DUPLICATE_TRANSACTION_CATEGORY: 'Esta pessoa já possui uma categoria com este nome.',
  TRANSACTION_NOT_FOUND: 'Transação não encontrada.',
  INVALID_TRANSACTION_AMOUNT: 'O valor da transação é inválido.',

  // 👤 USUÁRIOS
  USER_NOT_FOUND: 'Usuário não encontrado.',
  USER_ALREADY_EXISTS: 'Já existe um usuário cadastrado com este e-mail.',
  INVALID_CREDENTIALS: 'Credenciais inválidas.',
  UNAUTHORIZED: 'Acesso negado. Faça login novamente.',

  // 💰 CONTAS BANCÁRIAS
  ACCOUNT_NOT_FOUND: 'Conta bancária não encontrada.',
  DUPLICATE_ACCOUNT_NAME: 'Já existe uma conta bancária com este nome.',
  ACCOUNT_INACTIVE: 'A conta bancária está inativa.',

  // ⚙️ GERAIS
  UNKNOWN_ERROR: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
  VALIDATION_FAILED: 'Os dados fornecidos são inválidos.',
};
