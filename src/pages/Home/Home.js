import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Space, Table, Tag } from 'antd';
import Bus from '../Bus/Bus';


const Home = () => {
    const [data, setData] = useState([])
    const [open, setOpen] = useState()
    const fetchApi = async () => {
        return await axios.get('/product/1').then(res => setData(res.data))
    }
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        fetchApi()
    }, [open])
    const datas = data.map((e) => {
        return {
            key: e.id,
            name: e.name,
            birthday: new Date(e.birthday).toLocaleDateString()
        }
    })
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'key',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'key',
        },
        {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'key',
        }
    ];
    return (
        <>
            <Table columns={columns} dataSource={datas} />
            <Button type="primary" onClick={showDrawer}>sửa</Button>
            {open && <Bus open={open} onClose={onClose} data={datas} />}
        </>
    )
}

export default Home