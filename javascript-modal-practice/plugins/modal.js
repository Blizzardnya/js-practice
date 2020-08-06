Element.prototype.appendAfter = function(element){
  element.parentNode.insertBefore(this, element.nextSibling)
}

function _createModelFooter(footerButtons = []){
  if (footerButtons.length === 0) {
    return document.createElement('div')
  }

  wrap = document.createElement('div')
  wrap.classList.add('modal-footer')
  for (let button of footerButtons){
    const $btn = document.createElement('button')
    $btn.textContent = button.text
    $btn.classList.add('btn')
    $btn.classList.add(`btn-${button.type}`)
    $btn.onclick = button.handler
    wrap.appendChild($btn)
  }

  return wrap
}

function _createModal({title, closable, content, width, footerButtons}) {
  const modal = document.createElement('div')
  modal.classList.add('vmodal')
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
      <div class="modal-window" style="width:${width || '600px'}">
        <div class="modal-header">
          <span class="modal-title">${title || ''}</span>
          ${closable ? '<span class="modal-close" data-close="true">&times;</span>' : ''}
        </div>
        <div class="modal-body" data-content>
          ${content || ''}
        </div>
      </div>
    </div>
  `)
  const footer = _createModelFooter(footerButtons)
  footer.appendAfter(modal.querySelector('[data-content]'))
  document.body.appendChild(modal)
  return modal
}

/*
* --------------
* onClose(): void
* onOpen(): void
* beforeClose(): boolean
* --------------
* animate.css
* */
$.modal = function(options) {
  const ANIMATION_SPEED = 200
  const $modal = _createModal(options)
  let closing = false
  let destroyed = false

  const modal = {
    open() {
      !closing && $modal.classList.add('open')
      if (typeof options.onOpen === 'function'){
        options.onOpen()
      }
    },
    close() {
      if (typeof options.beforeClose === 'function'){
        options.beforeClose()
      }
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')
      setTimeout(() => {
        $modal.classList.remove('hide')
        closing = false
        if (typeof options.onClose === 'function'){
          options.onClose()
        }
      }, ANIMATION_SPEED)
    },
    setContent(html){
      $modal.querySelector('[data-content]').innerHTML = html
    },
  }

  const closeListener = event => {
    if (event.target.dataset.close) {
      modal.close()
    }
  }

  $modal.addEventListener('click', closeListener)

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal)
      $modal.removeEventListener('click', closeListener)
      destroyed = true
    }
  })
}
