import PropTypes from "prop-types"

/**
 * @param {Object} props
 * @returns Выводит блок анонса статьи
 */
export default function AdBlock(props) {
    const {data} = props;
    return (
        <div className="header__adblock adblock">
            <a href={data.adBlock.href}>
                {props.children}
                <p className="widget__title">{data.adBlock.title}</p>
                <div className="adblock__text">{data.adBlock.text}</div>
            </a>
        </div>
    )
}

AdBlock.propTypes = {
    data: PropTypes.object.isRequired
}