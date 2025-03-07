export const api = {
    headers: () => {
        const idToken = localStorage.getItem(import.meta.env.VITE_SET_TOKEN) || "";
        return {
            headers: {
                Authorization: "Bearer " + idToken,
            },
        };
    },
};
