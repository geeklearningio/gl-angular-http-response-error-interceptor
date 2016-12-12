'use strict';
import {HttpResponseErrorRetryFilterFactory} from "./Filters/HttpResponseErrorRetryFilter";
import {IHttpResponseErrorFilter} from "./Filters/IHttpResponseErrorFilter.d";

export class GLAngularHttpResponseErrorInterceptor implements  angular.IHttpInterceptor {
    private filters: Array<IHttpResponseErrorFilter> = [];

    /* @ngInject */
    constructor() {
    }

    public addFilter(filter: IHttpResponseErrorFilter, url: string = '*') {
        if (url !== '*') {
            filter.setUrlFilter(url);
        }
        this.filters.push(filter);
    }

    public responseError = (response): angular.IPromise<any> => {
        return this.filters[0].responseError(response);
    }
}

declare var exports: any;

exports = angular.module("gl-angular-http-response-error-interceptor", [])
    .service('httpResponseErrorRetryFilterFactory', HttpResponseErrorRetryFilterFactory)
    .service('glAngularHttpResponseErrorInterceptor', GLAngularHttpResponseErrorInterceptor);

