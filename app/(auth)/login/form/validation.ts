import {z} from "zod";

export const formSchema = z.object({
    email: z.email({error: 'Email is required'}),
    password: z.string({error: 'Password is required'}).min(8),
})