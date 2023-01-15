'use strict';

//var eaDemo = angular.module("eaDemo", ["ngRoute", "ngAnimate"]);
var eaDemo = angular.module("eaDemo", ["ngRoute"]);

var configSrv = eaDemo.service('eaConfigSrv', [function($routeProvider){
    this.eaNavConfig = eaNavConfig;      
}]);
configSrv.$inject = ['$scope'];

var paramSrv = eaDemo.service('eaParamSrv', [function(){
    this.getNewsList = getNewsList;
    this.getNaviList = getNaviList;
    this.getProjectList = getProjectList;
    this.getObjBg = getObjBg;
    this.getCurrentLink = getCurrentLink;
    this.getImgBoxList = getImgBoxList;
}]);
paramSrv.$inject = ['$scope'];

var navSrv = eaDemo.service('eaNavSrv', ['$q', function () {
    var vm = this;
    vm.getHtml4Id = getHtml4Id;
    vm.getHtml = getHtml;
}]);
navSrv.$inject = ['$scope'];

eaDemo.directive('eaNavi', ['$rootScope', '$location', 'eaParamSrv', eaNavDirektive]).$inject = ['$scope'];
eaDemo.directive('eaAddHtml', ['$compile', '$http', eaAddHtmlDirective]).$inject = ['$scope'];
eaDemo.directive('eaPathLink', eaPathLinkDirective).$inject = ['$scope'];
eaDemo.directive('eaFooter', eaFooterDirective).$inject = ['$scope'];
eaDemo.directive('eaImgBox', ['$compile', '$rootScope', eaImgBox]).$inject = ['$scope'];
eaDemo.directive('eaImg', ['$rootScope', eaImg]).$inject = ['$scope'];

eaDemo.config(['$routeProvider', eaNavConfig]);


eaDemo.controller('eaDemoController', ['$scope', '$location', '$http', '$q', 'eaNavSrv', eaDemoController])
        .$inject = ['$scope'];
eaDemo.controller('eaNaviController', ['$scope', '$location', 'eaParamSrv', eaNaviController])
        .$inject = ['$scope'];
