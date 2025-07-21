import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">головна сторінка</NavLink>
        <NavLink to="/search">пошук</NavLink>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
