import * as React from 'react';

const Nav : React.SFC<any> = () => {
  return(
    <nav>
      <ul>
        <li tabIndex={0} ng-reflect-router-link="/about">
          <a>about</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;