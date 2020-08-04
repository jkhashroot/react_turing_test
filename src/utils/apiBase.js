import axios from 'axios';
import {
    API_BASE_URL,
    API_BASE_STAGE_URL
} from '../../config/constants';
import {
    ClearLocalStorage,
    GetLocalStorage
} from '../utils/localStorgeOperations';
const CancelToken = axios.CancelToken;
export class ApiBase {
    cancel = null;
    constructor(params) {
        this.cancel = params && params.cancel || null;
        this.instance = axios.create({
            baseURL: API_BASE_URL + API_BASE_STAGE_URL,
            headers: this.handleHeaders(params)
        });
        this.setCancelRequest()
        this.instance.interceptors.response.use(
            response => response,
            error => {
                this.getErrorResponse(error);
                // when the api call returns an error.
                //go to the error page.
                // history.push(`/error?source=${error.config.url}`);
                return Promise.reject(error);
            }
        );
        this.handleHeaders = this.handleHeaders.bind(this);
        this.setCancelRequest = this.setCancelRequest.bind(this);
    }
    getErrorResponse(error) {
        if (
            error &&
			error.response &&
			error.response.data &&
			error.response.status === 401 &&
			error.response.data.code === 'tokenExpired'
        ) {
            ClearLocalStorage();
            window.location.href = '/login';
            // history.push('/expired');
        }
    }
    handleHeaders(params) {
        // setting headers for all api requests
        let tocken = GetLocalStorage('idToken');
        if (params) return params;
        else if (!tocken)
            return {
                'Content-Type': 'application/json'
            };
        else
            return {
                'Content-Type': 'application/json',
                Authorization: tocken
            };
    }
    setCancelRequest(){
        this.instance.interceptors.request.use((config) => {
            if (this.cancel) this.cancel(); // cancel request
            var self = this;
            config.cancelToken =
                new CancelToken(function executor(c) {
                    self.cancel = c;
                });
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
    }
}

// TODO: move all string to constants
