import Home from 'containers/trade/Home';
import Markets from 'containers/trade/Markets';

const tradeRoutes = [
  {
    path: '/',
    exact: true,
    // isPrivate: true,
    component: Home,
  },
  {
    path: '/markets',
    exact: true,
    // isPrivate: true,
    component: Markets,
  },
];

export default tradeRoutes;
