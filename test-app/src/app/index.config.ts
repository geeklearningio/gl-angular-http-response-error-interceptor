'use strict';

export class Config {
    /** @ngInject */
    constructor($httpProvider: angular.IHttpProvider) {
        $httpProvider.interceptors.push('glAngularHttpResponseErrorInterceptor');
    }
}
