/**
 * Created by Hyiero on 12/11/2016.
 */

import homeTemplate from './home.html';
import registerTemplate from './register/register.html';
import homeController from './home.controller';
import registerController from './register/register.controller';

/* @ngInject */
export default function homeConfig($stateProvider){
    "use strict";
    $stateProvider
        .state('home',{
            url: '',
            views: {
                '': {
                    template: homeTemplate,
                    controller: homeController,
                    controllerAs: 'homeCtrl'
                },
                'register@home': {
                    template: registerTemplate,
                    controller: registerController,
                    controllerAs: 'registerCtrl'
                }
            }
        });
}