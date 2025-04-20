// src/config/firebase.ts

export const firebaseAdmin = null;
export const storage = null;

export const auth = {
    verifyIdToken: async (_token: string) => {
        return {
            uid: "mock-uid",
            role: "USER" as "USER"
        };
    },

    createUser: async (_data: any) => {
        return {
            uid: "mock-uid",
            email: _data?.email || "mock@example.com"
        };
    },
    createCustomToken: async (_uid: string) => {
        return "mock-custom-token";
    },
    setCustomUserClaims: async (_uid: string, _claims: any) => {
        return;
    },
    updateUser: async (_uid: string, _data: any) => {
        return {
            uid: _uid,
            ..._data
        };
    }
};
