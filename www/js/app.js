// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('dailyMomin', ['ionic', 'dailyMomin.controllers','chart.js','angles','ngCordova'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

            var $ppc = $('.progress-pie-chart'),
                percent = parseInt($ppc.data('percent')),
                deg = 360*percent/100;
            if (percent > 50) {
                $ppc.addClass('gt-50');
            }
            $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
            $('.ppc-percents span').html(percent+'%');

    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dailyMomin', {
                url: '/dailyMomin',
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })
            .state('dailyMomin.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html'
                    }
                }
            })
            .state('dailyMomin.signup', {
                url: '/singup',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/signup.html'
                        //controller: 'SignUpCtrl'
                    }
                }
            })
            .state('dailyMomin.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller:'settingCtrl'
                    }
                }
            })
            .state('dailyMomin.setting', {
                url: '/setting',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/setting.html',
                        controller:'settingCtrl'

                    }
                }
            })
            .state('dailyMomin.levelone', {
                url: '/levelone',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/levelone.html'
                    }
                }
            })
            .state('dailyMomin.tauheed', {
                url: '/tauheed',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/tauheed.html',
                        controller:'tabCtrl'
                    }
                }
            });
            //.state('dailyMomin.tauheed.tabone', {
            //    url: '/tabone',
            //    views: {
            //        'tabone': {
            //            templateUrl: 'templates/tabone.html'
            //
            //        }
            //    }
            //})
            //.state('dailyMomin.tauheed.tabtwo', {
            //    url: '/tabtwo',
            //    views: {
            //        'tabtwo': {
            //            templateUrl: 'templates/tabtwo.html'
            //
            //        }
            //    }
            //})

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/dailyMomin/login');
    });
