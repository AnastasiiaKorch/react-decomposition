import SearchCategory from "./SearchCategory";
import PropTypes from "prop-types"

/**
 *
 * @param {*} Array
 * @returns Выводит блок категорий поиска
 */
export default function SearchCategories(props) {
    const { categories } = props;
    return (
        <nav className="search__header">
            {categories
                .map((category, idx) => <SearchCategory key={idx} href={category.href} title={category.title}/>)}
        </nav>
    )
}

SearchCategories.propTypes = {
    categories: PropTypes.array.isRequired
}