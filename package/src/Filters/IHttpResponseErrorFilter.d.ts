/**
 * Created by Vidailhet on 09/12/16.
 */

export interface IHttpResponseErrorFilter {
    responseError(response: any): angular.IPromise<any>;
}
