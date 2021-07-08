import Login from 'containers/auth/Login';

const tradeRoutes = [
  {
    path: '/login',
    exact: true,
    // isPrivate: true,
    component: Login,
  },
];

export default tradeRoutes;
