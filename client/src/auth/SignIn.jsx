import AuthLayouts from './../Layouts/AuthLayouts';
import { useForm } from "react-hook-form";
// import Buttons from './../components/Buttons';
import FormInput from '../components/FormInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinSchema } from '../utils/Schema';
import { signIn } from '../functions/Auth';
import { useNavigate } from 'react-router';
import Buttons from './../components/MUI/Buttons';

const SignIn = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(signinSchema)
    });

    const { errors, isSubmitting } = formState;

    const handleSignIn = async (data) => {
        console.log(data)
        await signIn(data, navigate);
    }

    return (
        <AuthLayouts>
            <div className="bg-white p-4 rounded-2xl w-full shadow-lg">
                <form className="grid grid-cols-1 gap-3 w-3/4 mx-auto" onSubmit={handleSubmit(handleSignIn)}>
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
                        errors={errors}
                    />
                    <Buttons
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
                    </Buttons>

                </form>
            </div>

        </AuthLayouts>
    )
}
export default SignIn