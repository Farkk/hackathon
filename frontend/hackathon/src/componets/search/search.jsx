import React from 'react';
import { Input, Space } from 'antd';


function Search(props) {

    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
        </>
    )
}

export default Search;