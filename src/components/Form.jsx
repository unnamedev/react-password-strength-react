import {Meter} from "./index"
import {useState} from "react"
import zxcvbn from "zxcvbn"
import toast, {Toaster} from "react-hot-toast"

/** ✨ Toast config */
const notify = () => toast.success("Your password is stronger")

const Form = () => {
    /** ✨ Hooks */
    const [password, setPassword] = useState("")

    /** ✨ Test password */
    const validate = zxcvbn(password)
    const percent = validate.score * 100 / 4

    /** ✨ Functions */
    const generateConfig = () => {
        switch (validate.score) {
            case 0:
                return {
                    label: "Very weak",
                    classname: "bg-red-600",
                    textColor: "text-red-600",
                    borderColor: "border-red-600"
                }
            case 1:
                return {
                    label: "Weak",
                    classname: "bg-blue-600",
                    textColor: "text-blue-600",
                    borderColor: "border-blue-600"
                }
            case 2:
                return {
                    label: "Fear",
                    classname: "bg-yellow-400",
                    textColor: "text-yellow-600",
                    borderColor: "border-yellow-600"
                }
            case 3:
                return {
                    label: "Good",
                    classname: "bg-purple-600",
                    textColor: "text-purple-600",
                    borderColor: "border-purple-600"
                }
            case 4:
                return {
                    label: "Strong",
                    classname: "bg-green-600",
                    textColor: "text-green-600",
                    borderColor: "border-green-600"
                }
            default:
                return {label: "", classname: "bg-gray-600", textColor: "text-gray-600", borderColor: "border-gray-600"}
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        setPassword("")
        notify()
    }
    /** ✨ Render */
    return <>
        <form className="max-w-md mx-auto w-full p-3 mb-4 bg-white shadow-md rounded md:p-5" onSubmit={handleSubmit}>
            <label className="block text-center font-semibold text-xl mb-3 cursor-pointer" htmlFor="password">
                Password Strength Indicator
            </label>
            <input
                type="password"
                className={`${password && generateConfig().borderColor} mb-3 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-700 ease-in-out`}
                placeholder="Password"
                autoComplete="off"
                id="password"
                onChange={e => setPassword(e.target.value)}
            />

            <Meter generateConfig={generateConfig()} percent={percent} password={password}/>

            <div className="text-center mt-2">
                <button
                    disabled={validate.score !== 4}
                    className={`${validate.score !== 4 ? "text-gray-400 bg-gray-300" : "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"} transition-all duration-700 ease-in-out text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex`}
                >
                    Submit
                </button>
            </div>
        </form>

        <Toaster
            position="bottom-center"
            toastOptions={{
                style: {
                    background: "#363636",
                    color: "#fff",
                }
            }}
        />
    </>
}

export default Form
