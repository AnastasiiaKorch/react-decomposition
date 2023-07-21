import PropTypes from "prop-types"

/**
 *
 * @param {*} Object
 * @returns Выводит элемент списка блока курсов валют
 */
export default function Rate({text, num}) {
    return (
        <li className="rate__item">
            <span className="rate__item-text">{text} &nbsp;</span>
            <span className="rate__item-num">{num}</span>
        </li>
    )
}

Rate.propTypes = {
    text: PropTypes.string.isRequired,
    num: PropTypes.number
}