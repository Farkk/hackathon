import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';  // Используем Link для навигации

const items = [
    {
        key: '1',
        label: 'Каталог',
        icon: <MailOutlined />,
        children: [
            { key: '6', label: 'Флизелины', path: '/catalog/flizeliny' },
            { key: '7', label: 'Иглопробивные материалы', path: '/catalog/igloprobivnye' },
            { key: '8', label: 'Спанбонды', path: '/catalog/spanbondy' },
            { key: '9', label: 'Ткани', path: '/catalog/tkani' },
            { key: '10', label: 'Трикотажные Материалы', path: '/catalog/trikotazhnye' },
        ],
    },
    {
        key: '2',
        icon: <DesktopOutlined />,
        label: 'Тенденции моды',
        path: '/trends',
    },
    {
        key: '3',
        icon: <ContainerOutlined />,
        label: 'Новинки в мире моды',
        path: '/new-arrivals',
    },
    {
        key: '4',
        icon: <ContainerOutlined />,
        label: 'Полезная информация',
        path: '/useful-info',
    },
    {
        key: '5',
        icon: <ContainerOutlined />,
        label: 'Подбор аналогов',
        path: '/analog-selection',
    },
];

function Nav() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    // Функция для рендеринга меню
    const renderMenuItems = (menuItems) => {
        return menuItems.map(item => (
            item.children ? (
                <Menu.SubMenu
                    key={item.key}
                    icon={item.icon}
                    title={item.label}
                >
                    {renderMenuItems(item.children)}  {/* Рекурсивно рендерим дочерние элементы */}
                </Menu.SubMenu>
            ) : (
                <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.path}>{item.label}</Link>  {/* Используем Link для навигации */}
                </Menu.Item>
            )
        ));
    };

    return (
        <div style={{ paddingBottom: '25px' }}>
            <Menu
                defaultSelectedKeys={['1']}
                mode="horizontal"
                theme="dark"
                inlineCollapsed={collapsed}
                style={{ justifyContent: 'center' }}
            >
                {renderMenuItems(items)}  {/* Генерация всех пунктов меню */}
            </Menu>
        </div>
    );
}

export default Nav;
