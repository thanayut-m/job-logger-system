import { z } from "zod";

export const signUpSchema = z.object({
    first_name: z.string().min(1, "กรุณากรอกชื่อ"),
    last_name: z.string().min(1, "กรุณากรอกนามสกุล"),
    username: z.string().min(3, "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร"),
    password: z.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
    password_confirmation: z.string(),
})
    .refine((data) =>
        data.password === data.password_confirmation, {
        message: "รหัสผ่านไม่ตรงกัน",
        path: ["password_confirmation"]
    })


export const signinSchema = z.object({
    username: z.string().min(1, "กรุณากรอกชื่อผู้ใช้"),
    password: z.string().min(6, "กรุณากรอกรหัสผ่าน")
})