import Nav from "../componets/navigation/nav.jsx";
import Search from "../componets/search/search.jsx";
import { useParams } from 'react-router-dom';
import CatalogCard from "../componets/catalogCard/catalogCard.jsx";

function Catalog() {
    const { category } = useParams();  // Получаем параметр category

    return (
        <>
            <h1>{category ? 'Флизелины' : 'Каталог'}</h1>
            <CatalogCard/>
        </>
    );
}

export default Catalog;