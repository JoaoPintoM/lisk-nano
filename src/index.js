
import './css'

import $ from 'jquery'
import angular from 'angular'

let app = angular.module('app', [
  'ngMaterial',
  'ngAnimate',
])

require('./theme').default(app)

require('./controller/main').default(app)

require('./directive/animateOnChange/animateOnChange').default(app)

require('./directive/login/login').default(app)
require('./directive/wallet/wallet').default(app)

setTimeout(() => {
  $('.preloading').remove()

  angular.element(document).ready(() => {
    angular.bootstrap(document, ['app'])
  })
}, 500)
