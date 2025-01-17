import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  TeamOutlined,
  ProjectOutlined,
  ReconciliationOutlined,
  UsergroupAddOutlined,
  LeftCircleOutlined,
} from '@ant-design/icons';

const HamburgerMenu = () => {
  const [visible, setVisible] = useState(false);
  const { Sider } = Layout;
  const history = useHistory();

  const userRole = localStorage.getItem('role');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('okta-token-storage');
    localStorage.removeItem('okta-cache-storage');
    localStorage.removeItem('username');
    history.push('/login');
    window.location.reload(); // quick fix need to change later
  };

  const onClick = s => {
    history.push(s);
    setVisible(false);
  };

  return (
    <>
      <Button type="dark" onClick={showDrawer} className="menu-button tablet">
        <MenuOutlined className="menu-icon" />
      </Button>
      <Drawer
        className="tablet"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="200"
      >
        <Sider>
          {userRole === 'administrator' ? (
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={() => onClick('/')}
              >
                My Profile
              </Menu.Item>

              <Menu.Item
                key="2"
                icon={<TeamOutlined />}
                onClick={() => onClick('/employees')}
              >
                Employees
              </Menu.Item>

              <Menu.Item
                key="3"
                icon={<ProjectOutlined />}
                onClick={() => onClick('/programs')}
              >
                Programs
              </Menu.Item>

              <Menu.Item
                key="4"
                icon={<UsergroupAddOutlined />}
                onClick={() => onClick('/recipients')}
              >
                Recipients
              </Menu.Item>

              <Menu.Item
                key="5"
                icon={<ReconciliationOutlined />}
                onClick={() => onClick('/services')}
              >
                Services
              </Menu.Item>

              <Menu.Item
                key="6"
                icon={<LeftCircleOutlined />}
                className="logout-ctn"
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </Menu>
          ) : (
            <></>
          )}
          {userRole === 'program_manager' ? (
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={() => onClick('/')}
              >
                My Profile
              </Menu.Item>

              <Menu.Item
                key="3"
                icon={<ProjectOutlined />}
                onClick={() => onClick('/programs')}
              >
                Programs
              </Menu.Item>

              <Menu.Item
                key="4"
                icon={<UsergroupAddOutlined />}
                onClick={() => onClick('/recipients')}
              >
                Recipients
              </Menu.Item>

              <Menu.Item
                key="5"
                icon={<ReconciliationOutlined />}
                onClick={() => onClick('/services')}
              >
                Services
              </Menu.Item>

              <Menu.Item
                key="6"
                icon={<LeftCircleOutlined />}
                className="logout-ctn"
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </Menu>
          ) : (
            <></>
          )}
          {userRole === 'service_provider' ? (
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={() => onClick('/')}
              >
                My Profile
              </Menu.Item>

              <Menu.Item
                key="5"
                icon={<ReconciliationOutlined />}
                onClick={() => onClick('/services')}
              >
                Services
              </Menu.Item>

              <Menu.Item
                key="6"
                icon={<LeftCircleOutlined />}
                className="logout-ctn"
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </Menu>
          ) : (
            <></>
          )}
        </Sider>
      </Drawer>

      <div className="upper-desktop">
        <div className="desktop">
          {userRole === 'administrator' ? (
            <Menu
              className="desktop"
              theme="light"
              mode="inline"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={() => onClick('/')}
              >
                My Profile
              </Menu.Item>

              <Menu.Item
                key="2"
                icon={<TeamOutlined />}
                onClick={() => onClick('/employees')}
              >
                Employees
              </Menu.Item>

              <Menu.Item
                key="3"
                icon={<ProjectOutlined />}
                onClick={() => onClick('/programs')}
              >
                Programs
              </Menu.Item>

              <Menu.Item
                key="4"
                icon={<UsergroupAddOutlined />}
                onClick={() => onClick('/recipients')}
              >
                Recipients
              </Menu.Item>

              <Menu.Item
                key="5"
                icon={<ReconciliationOutlined />}
                onClick={() => onClick('/services')}
              >
                Services
              </Menu.Item>

              <Menu.Item
                key="6"
                icon={<LeftCircleOutlined />}
                className="logout-ctn"
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </Menu>
          ) : (
            <></>
          )}
          {userRole === 'program_manager' ? (
            <Menu
              className="desktop"
              theme="light"
              mode="inline"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={() => onClick('/')}
              >
                My Profile
              </Menu.Item>

              <Menu.Item
                key="3"
                icon={<ProjectOutlined />}
                onClick={() => onClick('/programs')}
              >
                Programs
              </Menu.Item>

              <Menu.Item
                key="4"
                icon={<UsergroupAddOutlined />}
                onClick={() => onClick('/recipients')}
              >
                Recipients
              </Menu.Item>

              <Menu.Item
                key="5"
                icon={<ReconciliationOutlined />}
                onClick={() => onClick('/services')}
              >
                Services
              </Menu.Item>

              <Menu.Item
                key="6"
                icon={<LeftCircleOutlined />}
                className="logout-ctn"
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </Menu>
          ) : (
            <></>
          )}
          {userRole === 'service_provider' ? (
            <Menu
              className="desktop"
              theme="light"
              mode="inline"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={() => onClick('/')}
              >
                My Profile
              </Menu.Item>

              <Menu.Item
                key="5"
                icon={<ReconciliationOutlined />}
                onClick={() => onClick('/services')}
              >
                Services
              </Menu.Item>

              <Menu.Item
                key="6"
                icon={<LeftCircleOutlined />}
                className="logout-ctn"
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </Menu>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
