/**
 * Created by Hyiero on 12/11/2016.
 */

import './home.scss';

import angular from 'angular';
import router from 'angular-ui-router';
import ngResource from 'angular-resource';
import registerModule from './register/register.module';
import homeController from './home.controller';
import homeConfig from './home.config';
import homeResource from './home.resource';


export default angular.module('home',[router, ngResource,registerModule])
    .factory(homeResource.name,homeResource)
    .controller(homeController)
    .config(homeConfig)
    .name