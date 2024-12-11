import React from 'react';
import {Card, Row, Col} from 'antd';
import '../assets/css/bundle.css';
import Nav from "../componets/navigation/nav.jsx";
import Search from "../componets/search/search.jsx";

import sinaImage from '../assets/image/sina.jpg';
import bizeImage from '../assets/image/bize.jpg';

const {Meta} = Card;

function Trends() {
    return (
        <>
            <h1>Тенденции моды</h1>

            <Row gutter={16}>
                {/* Первая карточка */}
                <Col span={8}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={sinaImage}/>}
                    >
                        <Meta title="Использование спанбонда" description=""/>
                    </Card>
                </Col>

                {/* Вторая карточка */}
                <Col span={8}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={bizeImage}/>}
                    >
                        <Meta title="Бязь" description="Бязь клеевая может использоваться для придания жесткости воротника и манжет"/>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Trends;
