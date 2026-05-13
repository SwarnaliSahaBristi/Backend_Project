import z from "zod";

export const EmailSchema = z.object({
    email: z.email(),
    password: z.string()
})