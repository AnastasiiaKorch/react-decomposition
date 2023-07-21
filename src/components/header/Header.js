import React from 'react';
import './Header.css'
import AdBlock from "./AdBlock/AdBlock"
import NewsBox from "./NewsBox/NewsBox"


/**
 *
 * @param {Object} props
 * @returns Выводит шапку страницы (новостной блок и блок анонса)
 */
export default function Header({ dataHeader }) {
    return (
        <header className="page__header header">
            <NewsBox data={dataHeader} />
            <AdBlock data={dataHeader}>
                <img className="adblock__img" src={dataHeader.adBlock.src} width={100} height={100} style={{borderRadius: 100}} alt="..." />
            </AdBlock>
        </header>
    )
}

