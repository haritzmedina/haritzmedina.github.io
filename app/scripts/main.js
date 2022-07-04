/**
 * Created by Haritz Medina on 09/28/2014. Last update 01/07/2022.
 */

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

const Controller = require('./lib/Controller')

window.haritzmedina = {}

window.haritzmedina.controller = new Controller()

window.haritzmedina.controller.initialize()

window.haritzmedina.copyClipboardEventHandler = (element) => {
  navigator.clipboard.writeText(element.dataset.copy)
  element.dataset.completed = 'true'
  setTimeout(() => {
    element.dataset.completed = ''
  }, 3000)
}
