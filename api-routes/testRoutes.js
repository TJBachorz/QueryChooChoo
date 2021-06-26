export const testRoutes = {
    hello: () => {
        return 'Hello world!';
    },
    quoteOfTheDay: () => {
        return Math.random() > 0.5 ? 'Take it easy' : 'Salvation lies within';
    },
    random: () => Math.random(),
};