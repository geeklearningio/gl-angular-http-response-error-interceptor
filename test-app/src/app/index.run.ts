'use strict';
import {GLAngularHttpResponseErrorInterceptor} from "gl-angular-http-response-error-interceptor/package/src/GLAngularHttpResponseErrorInterceptor";
import {HttpResponseErrorRetryFilterFactory} from "gl-angular-http-response-error-interceptor/package/src/Filters/HttpResponseErrorRetryFilter";
import {IGLAngularHttpResponseErrorInterceptorFilter} from "gl-angular-http-response-error-interceptor/package/src/GLAngularHttpResponseErrorInterceptorFilter.d";


export class RunBlock {

    /** @ngInject */
    constructor(glAngularHttpResponseErrorInterceptor: GLAngularHttpResponseErrorInterceptor,
                httpResponseErrorRetryFilterFactory: HttpResponseErrorRetryFilterFactory) {

        var httpResponseErrorRetryFilter = httpResponseErrorRetryFilterFactory.getInstance();
        var delayDuration = 500;
        var nbRetries = 2;
        httpResponseErrorRetryFilter.config(delayDuration, nbRetries);

        var filterConfig: IGLAngularHttpResponseErrorInterceptorFilter = {
          filter: httpResponseErrorRetryFilter
        };

        // you can also specify the url match filter directly on the filter
        //httpResponseErrorRetryFilter.setUrlFilter('https://api.github.com/users/octocat');

        glAngularHttpResponseErrorInterceptor.addFilter(httpResponseErrorRetryFilter, 'https://api.github.com/users/octocat');
    }
}
