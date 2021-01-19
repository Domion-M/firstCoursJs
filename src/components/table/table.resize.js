import { $ } from '../../core/dom'
export function resizeHeandler(e, $root) {
    const type = e.target.dataset.resize;
    const $resize = $(e.target);
    const parent = $(e.target).closest('[data-type="resizable"]');
    const coords = parent.getCoords();
    const typeProp = type === 'col' ? 'bottom' : 'right'
    $resize.css({ opacity: 1, [typeProp]: '-5000px' });
    let value;
    document.onmousemove = event => {
        if (type === 'col') {
            const delta = event.pageX - coords.right;
            value = coords.width + delta;
            $resize.css({ right: -delta + 'px' })
        } else {
            const delta = event.pageY - coords.bottom;
            value = coords.height + delta;
            $resize.css({ bottom: -delta + 'px' });
        }
    }
    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        if (type === 'col') {
            $root.findAll(`[data-col="${parent.data.col}"]`)
                .forEach(el => el.style.width = value + 'px')
            $resize.css({ opacity: 0, bottom: 0, right: 0 })
        } else {
            parent.css({ height: value + 'px' });
            $resize.css({ opacity: 0, right: 0, bottom: 0 });
        }
    }
}
