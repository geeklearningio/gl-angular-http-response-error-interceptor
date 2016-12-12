import {IHttpResponseErrorFilter} from "./Filters/IHttpResponseErrorFilter";
/**
 * Created by Vidailhet on 09/12/16.
 */

export interface IGLAngularHttpResponseErrorInterceptorFilter {
    filter: IHttpResponseErrorFilter;
    url?: string;
    status?: Array<number>;
}
