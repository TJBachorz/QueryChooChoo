
import { createRequire } from 'module';

import Message from '../models/Message.js';

const require = createRequire(import.meta.url);

let fakeDatabase = {};

export const messageRoutes = {
    createMessage: ({ input }) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        fakeDatabase[id] = input;
        return new Message(id, input);
    },
    getMessage: ({ id }) => {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id);
        }
        return new Message(id, input);
    },
    updateMessage: ({ id, input }) => {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id);
        }
        fakeDatabase[id] = input;
        return new Message(id, input);
    }
};