import AuthLayouts from './../Layouts/AuthLayouts';
import { useForm } from "react-hook-form";
import Buttons from './../components/Buttons';


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
            <div className="bg-white p-4 rounded-2xl w-full shadow-lg">
                <form className="flex flex-col gap-3 w-3/4 mx-auto" onSubmit={handleSubmit(handleSignIn)}>
                    <h1 className="text-2xl text-center mt-9 font-bold text-black">เข้าสู่ระบบ</h1>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-black">Username</legend>
                        <input
                            {...register("username")}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            className="input input-neutral bg-white text-black w-full"
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-black ">Password</legend>
                        <input
                            {...register("password")}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="input input-neutral bg-white text-black w-full"
                        />
                    </fieldset>
                    <div className='mt-3 mb-9'>
                        <Buttons
                            type="submit"
                            text="เข้าสู่ระบบ"
                            isSubmitting={isSubmitting}
                        />
                    </div>
                </form>
            </div>

        </AuthLayouts>
    )
}
export default SignIn