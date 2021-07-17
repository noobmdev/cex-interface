import Home from 'containers/trade/Home';
import Markets from 'containers/trade/Markets';
import Trade from 'containers/trade/Trade';

const tradeRoutes = [
  {
    path: '/',
    exact: true,
    // isPrivate: true,
    component: Home,
  },
  {
    path: '/trade',
    exact: true,
    // isPrivate: true,
    component: Trade,
  },
  {
    path: '/markets',
    exact: true,
    // isPrivate: true,
    component: Markets,
  },
];

export default tradeRoutes;
