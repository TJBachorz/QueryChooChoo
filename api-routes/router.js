import { diceRoutes } from './diceRolls.js';
import { messageRoutes } from './messages.js';
import { testRoutes } from './testRoutes.js';

export const root = {
    ...diceRoutes,
    ...messageRoutes,
    ...testRoutes
};