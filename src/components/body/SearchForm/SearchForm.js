/**
 *
 * @param {*} props
 * @returns Выводит логотип, форму поиска и пример ниже поля ввода("Найдётся всё")
 */
export default function SearchForm(props) {
    return (
        <div className="search__body">
            <form className="search__body-row" action="">
                <div className="search__body-logo"><span style={{color:"red"}}>Я</span>ндекс</div>
                <input type="text" className="search__body-input" />
                <button className="search__body-btn">Найти</button>
            </form>
            <div className="search__body-example">
                Найдётся всё. Например,
                {props.children}
            </div>
        </div>
    )
}