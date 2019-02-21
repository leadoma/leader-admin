import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class TourItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Card
                style={{ width: 260 }}
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
                <Meta
                dir='rtl'
                title="تور آلاشت تا دره راگه و کوهنوردی سنگین"
                description="This is the description"
                />
            </Card>
        );
    }
}
 
export default TourItem;