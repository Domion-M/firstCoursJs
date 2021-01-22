import { defaultTitle } from "../../constants";

export function createHeader(title) {
    return `
        <input type="text" class="input" value="${title || defaultTitle}">
                <div>
                    <div class="button">
                        <span class="material-icons">
                            delete
                        </span>
                    </div>
                    <div class="button">
                        <span class="material-icons">
                            exit_to_app
                        </span>
                    </div>
                </div>
        `
}
