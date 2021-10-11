import './App.css';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined , DollarCircleOutlined , GroupOutlined } from '@ant-design/icons';
import CardPage from './component/card';
import Gap from './component/Gap/Gap'
import React from 'react';
import {ExcelMonth} from './controller/excelMonth';
import {ExcelToday} from './controller/excelToday';
import {ExcelYear} from './controller/excelYear';
import axios from 'axios';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

function App() {
  const [data, setData] = React.useState([])
  const fileName = "myfile"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('http://localhost:3002/csv').then(r => setData(r.data[0]) )
    }
    fetchData()
  }, [])

  return (
    <Layout>
    
    <Sider style={{
      height: '100vh',
      position: 'fixed',
      width: 300
    }}>
    <Gap height={60}/>
    <div className="logo"></div>
    <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
    <Menu.Item key="1" icon={<AppstoreOutlined />}>Dashboard</Menu.Item>
    <Menu.Item key="2" icon={<DollarCircleOutlined />}>Cost</Menu.Item>
    <SubMenu key="sub2" icon={<GroupOutlined />} title="Area">
          <Menu.Item key="5">Area 1</Menu.Item>
          <Menu.Item key="6">Area 2</Menu.Item>
          <Menu.Item key="7">Area 3</Menu.Item>
          <Menu.Item key="8">Area 4</Menu.Item>
          <Menu.Item key="9">Area 5</Menu.Item>
    </SubMenu>
    </Menu>
    </Sider>

    <Layout className="site-layout" style={{ marginLeft: 230 }}>
    <Header className="header">
    <Gap height={60}/>
      <div>
        <h1 className="data">Energy Dashboard</h1></div>
    </Header>

     <div className="App">
      <ExcelToday apiData={data} fileName={fileName} />
      <ExcelMonth apiData={data} fileName={fileName} />
      <ExcelYear apiData={data} fileName={fileName} />
    </div>
   
   
     
      <Menu mode="horizontal" style={{ marginLeft: 25 }}>
        <Menu.Item key="today">
          TODAY
        </Menu.Item>
        <Menu.Item key="month">
          MONTH
        </Menu.Item>
        <Menu.Item key="year">
          YEAR
        </Menu.Item>
      </Menu>
      
      <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
           
         <CardPage/> 
        </Content>
         
        <Footer style={{ textAlign: 'right', color :'white' }}>Dashboard Powered by atopiot.com</Footer>
    </Layout>
    
  </Layout>
  );
}

export default App;
