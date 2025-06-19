import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
  return (

    <Suspense fallback={<span>Loading..</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react logo" />
            <ul>
              {
                routes && routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink to={to} className={
                      ({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes && routes.map(({ path, Component }) => (
                <Route
                  key={path}
                  path={path}
                  element={<Component />}></Route>
              ))
            }
            {
              routes && (
                <Route
                  path="/*"
                  element={
                    <Navigate to={routes[0].to} replace />
                  }>
                </Route>
              )
            }
          </Routes>
        </div>
      </BrowserRouter >
    </Suspense>

  )
}