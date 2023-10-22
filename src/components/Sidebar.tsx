// Sidebar.tsx
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  menuItems: MenuItem[];
}

interface MenuItem {
  text: string;
  path: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const location = useLocation();
  return (
    <Nav className="col-md-3 d-md-block bg-light sidebar">
      <div className="position-sticky">
        {menuItems.map((item, index) => (
          <Nav.Item key={index}>
            <Link to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>
              {item.text}
            </Link>
          </Nav.Item>
        ))}
      </div>
    </Nav>
  );
};
