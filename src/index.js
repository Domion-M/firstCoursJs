import { Router } from './core/routs/Router';
import { DashboarPage } from './pages/DashboardPage';
import { ExelPage } from './pages/ExelPage';
import './scss/index.scss';

new Router('#app', {
    dashboard: DashboarPage,
    exel: ExelPage,
})
