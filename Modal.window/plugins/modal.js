function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('nmodal')
    modal.insertAdjacentHTML('afterbegin','
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <div class="modal-title">Modal window</div>
                <div class="modal-close">
                    <span>&times;</span>
                </div>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div class="modal-footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>')
    document.body.appendChild(modal)
    return modal
}



$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)

    return{
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() =>)
        },
        destroy() {}
    }
}