import { defaultTitle } from "../../constants";

export function createHeader(title) {
    return `
        <input type="text" class="input" value="${title || defaultTitle}">
                <div>
                    <div
                     class="button"
                     data-type="delete">
                        <span 
                        class="material-icons"
                        data-type="delete">
                            delete
                        </span>
                    </div>

                    <div 
                    class="button"
                    data-type="exit"
                    >
                        <span 
                        class="material-icons"
                        data-type="exit"
                        >
                            exit_to_app
                        </span>
                    </div>
                </div>
        `
}
