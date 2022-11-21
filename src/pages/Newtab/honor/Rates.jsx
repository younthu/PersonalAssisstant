
import React from 'react'
import {  Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, HeartOutlined, QuestionCircleOutlined, StarFilled } from '@ant-design/icons';
const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
};


const Rates = () => (
    <>
        <Rate defaultValue={2} character={({ index }) => index + 1} />

        <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
        {/* <br /> */}
        <Rate allowHalf defaultValue={2.5} />
        {/* <br /> */}
        <Rate character={<HeartOutlined />} allowHalf />
        {/* <br /> */}
        <Rate character="A" allowHalf style={{ fontSize: 36 }} />
        {/* <br /> */}
        <Rate character="好" allowHalf />
    </>
);

export default Rates