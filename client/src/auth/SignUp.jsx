import { useForm } from "react-hook-form"
import AuthLayouts from "../Layouts/AuthLayouts"
import FormInput from "../components/FormInput";
import Buttons from "../components/Buttons";

const SignUp = () => {
    const { register, handleSubmit, formState } = useForm();

    const { isSubmitting } = formState;
    console.log(isSubmitting);

    const handleSignUp = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        console.log(data)
    }

    return (
        <AuthLayouts>
            <div className="bg-white p-4 rounded-2xl w-full shadow-lg">
                <form className="flex flex-col gap-3 w-3/4 mx-auto" onSubmit={handleSubmit(handleSignUp)}>
                    <h1 className="text-2xl text-center mt-9 font-bold text-black">สมัครสมาชิก</h1>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 mt-6">
                        <FormInput
                            textname="ชื่อ"
                            register={register}
                            name="first_name"
                            type="text"
                            placeholder="First Name..."
                        />
                        <FormInput
                            textname="นามสกุล"
                            register={register}
                            name="last_name"
                            type="text"
                            placeholder="Last Name..."
                        />
                    </div>
                    <div className="mt-3">
                        <FormInput
                            textname="ชื่อผู้ใช้"
                            register={register}
                            name="username"
                            type="text"
                            placeholder="Username..."
                        />
                    </div>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 mt-3">
                        <FormInput
                            textname="รหัสผ่าน"
                            register={register}
                            name="password"
                            type="password"
                            placeholder="Password..."
                        />
                        <FormInput
                            textname="ยืนยันรหัสผ่าน"
                            register={register}
                            name="password_confirmation"
                            type="text"
                            placeholder="Confirm Password..."
                        />
                    </div>

                    <div className="mt-3 mb-9">
                        <Buttons
                            type="submit"
                            text="สมัครสมาชิก"
                            isSubmitting={isSubmitting}
                        />

                    </div>
                </form>
            </div>
        </AuthLayouts>
    )
}
export default SignUp