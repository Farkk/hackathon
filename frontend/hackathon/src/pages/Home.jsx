import { DatePicker } from 'antd'
import '../assets/css/bundle.css'
import Nav from "../componets/navigation/nav.jsx";
import Search from "../componets/search/search.jsx";
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


function Home() {
    return (
        <div className="home" >
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 1200 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Логин"
                name="username"
                rules={[{ required: true, message: 'Введите логин!' }]}
                >
                <Input />
        </Form.Item>

        <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Введите пароль!' }]}
            >
            <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
                Отправить
            </Button>
        </Form.Item>
    </Form>
        </div>
    )
}


export default Home;