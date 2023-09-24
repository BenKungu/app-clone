
const SESSION_KEY = 'hisaAppSession';
// const AUTHENTICATION_KEY = 'isAuthenticated';

export const setSession = (data) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    // sessionStorage.setItem(AUTHENTICATION_KEY, data.isAuthenticated);
};

export const getSession = () => {
    const sessionData = localStorage.getItem(SESSION_KEY);
    return sessionData ? JSON.parse(sessionData) : null;
};

export const clearSession = () => {
    localStorage.clear();
};
