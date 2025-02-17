import AuthLayouts from './../Layouts/AuthLayouts';
import { useForm } from "react-hook-form";
import Buttons from './../components/Buttons';
import FormInput from '../components/FormInput';


const SignIn = () => {

    const { register, handleSubmit, formState } = useForm();


    const { isSubmitting } = formState
    console.log(isSubmitting)

    const handleSignIn = async (data) => {
        await new Promise((resolver) => setTimeout(resolver, 1000))

        console.log(data);
    }

    return (
        <AuthLayouts>
            <form className="flex flex-col gap-3 w-3/4 mx-auto" onSubmit={handleSubmit(handleSignIn)}>
                <h1 className="text-2xl text-center mt-9 font-bold text-black">เข้าสู่ระบบ</h1>
                <FormInput
                    register={register}
                    name="username"
                    type="text"
                    textname="Username"
                    placeholder="Username..."
                />
                <FormInput
                    register={register}
                    name="password"
                    type="password"
                    placeholder="Password..."
                    textname="Password"
                />
                <div className='mt-3 mb-9'>
                    <Buttons
                        type="submit"
                        text="เข้าสู่ระบบ"
                        isSubmitting={isSubmitting}
                    />
                </div>
            </form>

        </AuthLayouts>
    )
}
export default SignIn