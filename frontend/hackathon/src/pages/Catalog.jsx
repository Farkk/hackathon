import Nav from "../componets/navigation/nav.jsx";
import Search from "../componets/search/search.jsx";
import { useParams } from 'react-router-dom';

function Catalog() {
    const { category } = useParams();  // Получаем параметр category

    return (
        <>
            <h1>{category ? category : 'Каталог'}</h1>
            {/* Здесь можно загрузить соответствующие данные для категории */}
        </>
    );
}

export default Catalog;