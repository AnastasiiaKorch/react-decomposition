import './Body.css'
import SearchBanner from "./SearchBanner/SearchBanner"
import SearchCategories from "./SearchCategories/SearchCategories"
import SearchForm from "./SearchForm/SearchForm"

/**
 *
 * @param {*Object} props
 * @returns Выводит блок категорий поиска, поиск и баннер ниже поиска
 */
export default function Body(props) {
    const {dataBody} = props;
    return (
        <div className="page__body body">
            <div className="body__search search">
                <SearchCategories categories={dataBody.categories}/>
                <SearchForm><span className="gray_text"> фаза луны сегодня</span></SearchForm>
                <SearchBanner href={dataBody.banner.href} src={dataBody.banner.src}/>
            </div>
        </div>
    )
}