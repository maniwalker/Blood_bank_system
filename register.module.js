/**
 * Created by Hyiero on 12/12/2016.
 */

import angular from 'angular';
import ngResource from 'angular-resource';
import registerController from './register.controller';
import registerResource from './register.resource';

export default angular.module('register',[ngResource])
    .factory(registerResource.name,registerResource)
    .controller(registerController)
    .name