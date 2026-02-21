export const controllers = {
  Chat: () => import('#controllers/chat_controller'),
  NewAccount: () => import('#controllers/new_account_controller'),
  Session: () => import('#controllers/session_controller'),
}
