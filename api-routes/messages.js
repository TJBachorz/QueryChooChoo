let fakeDatabase = {};

export const messageRoutes = {
    getMessage: () => {
        return fakeDatabase.message
    },
    setMessage: ({message}) => {
        fakeDatabase.message = message;
        return message;
    }
};