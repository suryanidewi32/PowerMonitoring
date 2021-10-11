import React  from 'react';
import { Card, Col, Row } from 'antd';
import Gap from '../component/Gap/Gap'
import './card.css'
import ChartCost from './ChartToday/ChartCost'
import ChartKwh from './ChartToday/ChartKWH';
import ChartKwp from './ChartToday/ChartKWP';
import ChartConsumption from './ChartToday/ChartConsumption';
import ChartLWBP from './ChartToday/ChartLWBP';
import ChartWBP from './ChartToday/ChartWBP';
import ChartEnergy from './ChartToday/ChartEnergy';

const CardPage = () => {
    return (
        <div className="site-card-wrapper">
        <Row>
          <Col span={24}>
            <Card className='card-color' title="COST PREDICTED" bordered={false}>
            <ChartCost/>
            </Card>
          </Col>
        </Row>
        <Gap height={30}/>
        <Row gutter={16}>
        <Col span={12}>
            <Card className='card-color' title="EXPORT METER" bordered={false}>
           <ChartKwh/>
            </Card>
          </Col>
          <Col span={12}>
            <Card className='card-color' title="KWH METER" bordered={false}>
            <ChartKwp/>
            </Card>
          </Col>
        </Row>
        <Gap height={30}/>
        <Row gutter={16}>
          <Col span={24}>
            <Card className='card-color' title="KWH CONSUMPTION" bordered={false}>
            <ChartConsumption />
            </Card>
          </Col>
          </Row>
        <Gap height={30}/>
        <Row gutter={16}>
          <Col span={24}>
            <Card className='card-color' title="WBP CONSUMPTION" bordered={false}>
            <ChartWBP/>
            </Card>
          </Col>
          </Row>
        <Gap height={30}/>
        <Row gutter={16}>
          <Col span={24}>
            <Card className='card-color' title="LWBP CONSUMPTION" bordered={false}>
            <ChartLWBP/>
            </Card>
          </Col>
        </Row>
        <Gap height={30}/>
        <Row gutter={16}>
          <Col span={24}>
            <Card className='card-color' title="PARAMETER ENERGY" bordered={false}>
            <ChartEnergy/>
            </Card>
          </Col>
          </Row>
      </div>
        )
}

export default CardPage ;