import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';

class BaseService {
    constructor() {
        this._assetsUrlRoot = '';
    }
    get assetsUrlRoot() {
        return this._assetsUrlRoot;
    }
    changeAssetsSource(prefix) {
        this._assetsUrlRoot = prefix.endsWith('/') ? prefix : prefix + '/';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: BaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: BaseService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: BaseService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BaseService };
//# sourceMappingURL=my-base.mjs.map
