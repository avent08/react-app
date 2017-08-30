import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import NotFoundPage from './error/NotFoundPage';

const Routes = {
  index: HomePage,
  childRoutes : [
    {
      path: 'about',
      component: AboutPage
    },
    {
      path: '*',
      exact: true,
      component: NotFoundPage
    }
  ]
};

export default Routes;