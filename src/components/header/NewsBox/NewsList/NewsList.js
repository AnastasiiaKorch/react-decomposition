import NewsListItem from "./NewsListItem"
import PropTypes from "prop-types"

/**
 *
 * @param {Array} props
 * @returns Выводит список новостей
 */
export default function NewsList({news}) {
    return (
        <ul className="header__news-list">
            {news.map((news, index) =>
                <NewsListItem key={index} url={news.url} title={news.title}>
                    <img src={news.src} width={20} height={20} alt="..." />
                </NewsListItem>)}
        </ul>
    )
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}