import './Footer.css'
import FooterItem from "./FooterItem/FooterItem";
import PropTypes from "prop-types"

/**
 *
 * @param {*} Object
 * @returns Выводит нижнюю часть страници с анонсами (Погода, Посещаемое, Телепрограмма и т.д.)
 */
export default function Footer({ dataFooter }) {
    const { weather, visited, maps, tvProgram, ether } = dataFooter;
    return (
        <div className="page__footer footer">
            <ul className="footer__list">
                <FooterItem title="Погода" href="#">
                    <a href={weather.href}>
                        <div className="footer__item-content weather">
                            <div className="footer__item-img">
                                <img src={weather.src} width={40} height={30} alt="..." />
                            </div>
                            <div className="footer__item-numb">{weather.temp}&deg;</div>
                            <div className="footer__item-descript">
                                <div className="footer__item-text row1">
                                    <span className="text">Утром</span><span className="num">{weather.morningTemp}</span>
                                    <span className="text">Днём</span><span className="num">{weather.daytimeTemp}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </FooterItem>
                <FooterItem title="Посещаемое" href="#">
                    <div className="footer__item-content">
                        <ul className="footer__item-list">
                            {visited.map((el, idx) =>
                                <li key={idx} className="list__item">
                                    <a href={el.href}><strong>{el.boldText}</strong>{el.text}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </FooterItem>
                <FooterItem title="Яндекс.Карты" href="#">
                    <a href={maps.href}>
                        <div className="footer__item-content">{maps.text}</div>
                    </a>
                </FooterItem>
                <FooterItem title="Телепрограмма" href="#">
                    <div className="footer__item-content">
                        <ul className="footer__item-list">
                            {tvProgram.map((el, idx) =>
                                <li key={idx} className="list__item">
                                    <a href={el.href}>
                                        {el.text}<span className="gray_text">{el.grayText}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </FooterItem>
                <FooterItem title="Эфир" href="#">
                    <div className="footer__item-content">
                        <ul className="footer__item-list">
                            {ether.map((el, idx) =>
                                <li key={idx} className="list__item">
                                    <a href={el.href}>
                                        <img src={el.src} alt="" />
                                        {el.text}
                                        <span className="gray_text">{el.grayText}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </FooterItem>
            </ul>
        </div>
    )
}

Footer.propTypes = {
    weather: PropTypes.object,
    visited: PropTypes.object,
    maps: PropTypes.object,
    tvProgram: PropTypes.object,
    ether: PropTypes.object
}