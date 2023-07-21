import NewsCategory from "./NewsCategory/NewsCategory"
import NewsList from "./NewsList/NewsList"
import Rates from "./Rates/Rates"

/**
 *
 * @param {Object} props
 * @returns Выводит новостной блок
 */
export default function NewsBox(props) {
    const {data} = props;
    return (
        <div className="header__news-box">
            <NewsCategory titles={data.titles}/>
            <NewsList news={data.news}/>
            <Rates rates={data.rates}/>
        </div>
    )
}