import Rate from "./Rate"
import PropTypes from "prop-types"

/**
 *
 * @param {Array} Array
 * @returns Выводит блок курсов валют
 */
export default function Rates({rates}) {
    return (
        <ul className="header__rate rate">
            {rates.map((rate, index) => <Rate key={index} text={rate.text} num={rate.num}/>)}
        </ul>
    )
}

Rates.propTypes = {
    rates: PropTypes.array.isRequired
}