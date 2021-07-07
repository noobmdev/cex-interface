import Overview from 'containers/user/Overview';

const userRoutes = [
  {
    path: '/user/overview',
    exact: true,
    // isPrivate: true,
    component: Overview,
  },
];

export default userRoutes;
