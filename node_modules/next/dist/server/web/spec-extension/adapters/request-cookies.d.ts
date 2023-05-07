/// <reference types="node" />
import type { RequestCookies } from '../cookies';
import type { BaseNextResponse } from '../../../base-http';
import type { ServerResponse } from 'http';
import { ResponseCookies } from '../cookies';
export declare type ReadonlyRequestCookies = Omit<RequestCookies, 'clear' | 'delete' | 'set'>;
export declare class RequestCookiesAdapter {
    static seal(cookies: RequestCookies): ReadonlyRequestCookies;
}
export declare const SYMBOL_MODIFY_COOKIE_VALUES: unique symbol;
export declare class MutableRequestCookiesAdapter {
    static seal(cookies: RequestCookies, res: ServerResponse | BaseNextResponse | undefined): ResponseCookies;
}
