import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BaseService {
    constructor() {
        this._assetsUrlRoot = '';
    }
    get assetsUrlRoot() {
        return this._assetsUrlRoot;
    }
    changeAssetsSource(prefix) {
        this._assetsUrlRoot = prefix.endsWith('/') ? prefix : prefix + '/';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: BaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: BaseService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: BaseService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9teS1iYXNlL3NyYy9saWIvYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxXQUFXO0lBRHhCO1FBRVksbUJBQWMsR0FBRyxFQUFFLENBQUM7S0FTL0I7SUFQQyxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELGtCQUFrQixDQUFDLE1BQWM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDckUsQ0FBQzs4R0FUVSxXQUFXO2tIQUFYLFdBQVcsY0FEQSxNQUFNOzsyRkFDakIsV0FBVztrQkFEdkIsVUFBVTttQkFBQyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOidyb290J30pXG5leHBvcnQgY2xhc3MgQmFzZVNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgX2Fzc2V0c1VybFJvb3QgPSAnJztcblxuICBnZXQgYXNzZXRzVXJsUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNzZXRzVXJsUm9vdDtcbiAgfVxuXG4gIGNoYW5nZUFzc2V0c1NvdXJjZShwcmVmaXg6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Fzc2V0c1VybFJvb3QgPSBwcmVmaXguZW5kc1dpdGgoJy8nKSA/IHByZWZpeCA6IHByZWZpeCArICcvJztcbiAgfVxufVxuIl19