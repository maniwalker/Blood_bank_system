/**
 * Created by Hyiero on 12/12/2016.
 */
/* @ngInject */
export default function registerController(){
    "use strict";
    let controller = this;

    controller.registerUser = function(){
        console.log("Registering user");
    };

    return controller;
}
