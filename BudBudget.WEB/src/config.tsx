export const API_BASE_URL =
	process.env.REACT_APP_API_BASE_URL || "https://localhost:5001/api";
export const API_LOGIN_URL = `${API_BASE_URL}/Auth/login`;
export const API_FETCHALL_URL = `${API_BASE_URL}/Entries/fetchall`;
export const API_CATEGORIES_URL = `${API_BASE_URL}/Categories`;
export const API_ENTRIES_URL = `${API_BASE_URL}/Entries`;
