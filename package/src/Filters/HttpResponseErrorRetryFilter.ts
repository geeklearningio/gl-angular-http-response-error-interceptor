/**
 * Created by Vidailhet on 09/12/16.
 */

'use strict';
import {HttpResponseErrorFilter} from "./HttpResponseErrorFilter";
import {IHttpResponseErrorFilter} from "./IHttpResponseErrorFilter.d";

export class HttpResponseErrorRetryFilter extends HttpResponseErrorFilter implements IHttpResponseErrorFilter {
    private delayDuration = 1000;
    private nbRetries = 3;

    /* @ngInject */
    constructor($q: angular.IQService,
                private $http: angular.IHttpService,
                private $timeout: angular.ITimeoutService) {
        super($q);
        super.setStatusFilters([403, 404]);
    }

    config(delayDuration: number, nbRetries: number) {
        this.delayDuration = delayDuration;
        this.nbRetries = nbRetries;
    }

    responseError(response: angular.IHttpPromiseCallbackArg<any>): angular.IPromise<any> {
        if (this.responseStatusMatchesFilters(response.status) && this.urlMatchesUrlFilter(response.config.url)) {
            console.log(response);
            var nbQueries = this.getResponseErrorFilterParamater(response, 'nbRetries');
            console.log(nbQueries);
            if (nbQueries >= this.nbRetries) {
                return this.$q.reject(response);
            }
            return this.$timeout(() => {
                response = this.setResponseErrorFilterParamater(response, 'nbRetries', nbQueries + 1);
                return this.$http(response.config);
            }, this.delayDuration);
        }
        // give up
        return this.$q.reject(response);
    }
}

export class HttpResponseErrorRetryFilterFactory {

    /* @ngInject */
    constructor(private $q: angular.IQService,
                private $http: angular.IHttpService,
                private $timeout: angular.ITimeoutService) {
    }

    getInstance(): HttpResponseErrorRetryFilter {
        return new HttpResponseErrorRetryFilter(this.$q, this.$http, this.$timeout);
    }
}

