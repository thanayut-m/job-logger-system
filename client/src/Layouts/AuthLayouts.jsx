import PropTypes from "prop-types";

const AuthLayouts = ({ children }) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#c3fdfa]">
            <main className="flex flex-row justify-center max-md:w-11/12 sm:w-8/12 md:w-6/12 xl:w-4/12">
                {children}
            </main>
        </div>
    )
}

AuthLayouts.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthLayouts