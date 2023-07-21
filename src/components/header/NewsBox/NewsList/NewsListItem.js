import PropTypes from "prop-types"

/**
 *
 * @param {Object} props
 * @returns Выводит элемент списка новостей
 */
export default function NewsListItem(props) {
    return (
        <li className="header__news-item">
            {props.children}
            <a href={props.url}>{props.title}</a>
        </li>
    )
}

NewsListItem.propTypes = {
    title: PropTypes.string.isRequired
}