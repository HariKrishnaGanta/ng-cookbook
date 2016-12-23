(function() {
  'use strict';

  angular
    .module('ngCookbook')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
