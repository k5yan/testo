import { HomePage } from '../../pages/home';
import { ROUTES } from '../../shared/constants/routes';
import type { RouteProps } from 'react-router-dom';

export const routeConfig: Array<RouteProps> = [{ path: ROUTES.HOME, element: <HomePage /> }];
