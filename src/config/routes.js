import {
  Navigator,
} from 'react-native';

export const routes = [{
  path: '/dashboard',
  title: 'Dashboard',
}, {
  path: '/labels',
  title: 'Labels',
}, {
  path: '/profile',
  title: 'Profile',
  configureScene: Navigator.SceneConfigs.FloatFromBottom,
}, {
  path: '/label',
  title: 'Label',
  configureScene: Navigator.SceneConfigs.FloatFromBottom,
}, {
  path: '/task',
  title: 'Task',
  configureScene: Navigator.SceneConfigs.FloatFromBottom,
}];

export function findRoute(path) {
  const route = routes.filter(route => {
    if (route.path === path) {
      return true;
    }
  })[0];
  return route;
}
