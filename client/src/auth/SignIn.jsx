import AuthLayouts from './../Layouts/AuthLayouts';
import { useForm } from "react-hook-form";
// import Buttons from './../components/Buttons';
import FormInput from '../components/FormInput';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { signinSchema } from '../utils/Schema';
import { signIn } from '../functions/Auth';
import { useNavigate } from 'react-router';

const SignIn = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(signinSchema)
    });


    const { errors } = formState
    // console.log(isSubmitting, errors)

    const handleSignIn = async (data) => {
        signIn(data, navigate);
    }

    return (
        <AuthLayouts>
            <div className="bg-white p-4 rounded-2xl w-full shadow-lg">
                <form className="flex flex-col gap-3 w-3/4 mx-auto" onSubmit={handleSubmit(handleSignIn)}>
                    <h1 className="text-2xl text-center mt-9 font-bold text-black">เข้าสู่ระบบ</h1>
                    <FormInput
                        register={register}
                        name="username"
                        type="text"
                        label="Username"
                        placeholder="Username..."
                        errors={errors}
                    />
                    <FormInput
                        register={register}
                        name="password"
                        type="password"
                        placeholder="Password..."
                        label="Password"
                    />
                    <div className='mt-3 mb-9'>
                        {/* <Buttons
                            type="submit"
                            isSubmitting={isSubmitting}
                            className="bg-blue-500 hover:bg-blue-400 hover:text-white w-full"
                        >เข้าสู่ระบบ</Buttons> */}
                    </div>
                </form>
            </div>

        </AuthLayouts>
    )
}
export default SignIn