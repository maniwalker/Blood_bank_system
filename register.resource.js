/**
 * Created by Hyiero on 12/12/2016.
 */
/* @ngInject */
export default function($resource){
    "use strict";
    let resource = $resource('/api/user/:id',{id: '@id'});

    return resource;
}