import PropTypes from "prop-types"

/**
 * 👋🏻 Meter
 * @param classname
 * @param label
 * @param textColor
 * @param percent
 * @param password
 * @returns {JSX.Element}
 * @constructor
 */
const Meter = ({generateConfig: {classname, label, textColor}, percent,password }) =>
    <div className="flex flex-col justify-between gap-2">
        {password && <>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`${classname} h-2.5 rounded-full transition-all duration-700 ease-in-out`} style={{width: `${percent}%`}}/>
            </div>

            <span className={`${textColor} block text-right text-sm font-medium transition-all duration-700 ease-in-out`}>{label}</span>
        </>}
    </div>

/** ✨ Check props */
Meter.propTypes = {
    password: PropTypes.string,
    percent: PropTypes.number,
    classname: PropTypes.string,
    label: PropTypes.string,
    textColor: PropTypes.string,
}

/** ✨ Default props */
Meter.defaultProps = {
    password: "",
    percent: "",
    classname: "",
    label: "",
    textColor: "",
}

export default Meter
