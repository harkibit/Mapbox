import React from 'react'
import { Empty, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
export default function NoFavorite() {
    return (
        <div>
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                height: 300,
                }}
                description={
                    <>
                    <h1>You have no favorite activity </h1>
                    <span className = "description"> 
                        When browsing, just hover over a shot and click the <HeartOutlined /> button.
                    </span>
                </>
                }
            >
                <Button type="primary">Browse activity</Button>
            </Empty>
        </div>
    )
}
