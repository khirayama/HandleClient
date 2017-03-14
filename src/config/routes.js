export const routes = [{
  path: '/dashboard',
  title: 'Dashboard',
}, {
  path: '/profile',
  title: 'Profile',
}, {
  path: '/labels',
  title: 'Labels',
}, {
  path: '/label',
  title: 'Label',
}, {
  path: '/task',
  title: 'Task',
}];

export function findRoute(path) {
  const route = routes.filter(route => {
    if (route.path === path) {
      return true;
    }
  })[0];
  return route;
}
