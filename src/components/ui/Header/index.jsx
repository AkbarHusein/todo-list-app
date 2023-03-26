import React, { useState } from 'react';

// icons
import { Menu, ArrowLeft } from 'react-feather';
import { Button } from 'reactstrap';

const MenuIcon = ({ menuIsOpen }) => {
  return menuIsOpen ? <ArrowLeft color="black" /> : <Menu color="black" />;
};

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="container-xl">
      <div className="row">
        <div className="col-auto menu-button d-xl-none">
          <Button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            color="transparent"
          >
            <MenuIcon menuIsOpen={menuIsOpen} />
          </Button>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <p className="fs-3 m-0" id="brand">
            Todo List
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
