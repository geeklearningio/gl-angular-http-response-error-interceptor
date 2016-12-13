'use strict';
import {HttpResponseErrorRetryFilterFactory} from "./Filters/HttpResponseErrorRetryFilter";
import {IHttpResponseErrorFilter} from "./Filters/IHttpResponseErrorFilter.d";
import {IGLAngularHttpResponseErrorInterceptorFilter} from "./GLAngularHttpResponseErrorInterceptorFilter.d";

export class GLAngularHttpResponseErrorInterceptor implements  angular.IHttpInterceptor {
    private filters: Array<IHttpResponseErrorFilter> = [];

    /* @ngInject */
    constructor() {
    }

    public addFilter(filterConfig: IGLAngularHttpResponseErrorInterceptorFilter) {
        if (filterConfig.url !== '*') {
            filterConfig.filter.setUrlFilter(filterConfig.url);
        }
        filterConfig.filter.setStatusFilters(filterConfig.status);
        this.filters.push(filterConfig.filter);
    }

    public responseError = (response): angular.IPromise<any> => {
        return this.filters[0].responseError(response);
    }
}

declare var exports: any;

exports = angular.module("gl-angular-http-response-error-interceptor", [])
    .service('httpResponseErrorRetryFilterFactory', HttpResponseErrorRetryFilterFactory)
    .service('glAngularHttpResponseErrorInterceptor', GLAngularHttpResponseErrorInterceptor);

