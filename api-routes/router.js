import { diceRoutes } from './diceRolls.js';
import { messageRoutes } from './messages.js';
import { testRoutes } from './testRoutes.js';

export const root = {
    ip: (args, request) => {
        return request.ip;
    },
    ...diceRoutes,
    ...messageRoutes,
    ...testRoutes
};