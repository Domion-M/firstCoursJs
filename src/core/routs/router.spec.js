import { Page } from "../Page";
import { Router } from "./Router";

class DashBoardPage extends Page {
    getRoot() {
        const root = document.createElement('div');
        root.innerHTML = 'dashboard'
        return root
    }
}

class ExcelPage extends Page { }

describe('Router:', () => {
    let router;
    let root
    beforeEach(() => {
        root = document.createElement('div')
        router = new Router(root, {
            dashboard: DashBoardPage,
            excel: ExcelPage,
        });

    })

    test('should be', () => {
        expect(router).toBeDefined()
    })
    test('should render DashboardPage', () => {
        router.changePageHandler()
        expect(root.innerHTML).toBe('<div>dashboard</div>')
    })
})