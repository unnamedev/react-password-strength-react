import {Form} from "./components"

/**
 * 👋🏻 Root Component
 * @returns {JSX.Element}
 * @constructor
 */
const Root = () =>
    <div className="h-screen flex flex-col justify-center overflow-hidden p-3 bg-gray-200">
        <Form/>
    </div>

export default Root
