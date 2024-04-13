import {z} from 'zod';

export const messageScehma = z.object({
    content  : z
    .string()
    .min(10 , {message :"Content must be at least of 10 characters"})
    .min(300 , {message :"Content must be at less than 300 characters"})

})