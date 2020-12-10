"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(cepService) {
        this.cepService = cepService;
        this.budgetForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern('^[a-zA-Z]+$')
            ]),
            lastName: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern('^[a-zA-Z]+$')
            ]),
            email: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
            ]),
            phone: new forms_1.FormControl('', [
                forms_1.Validators.required
            ]),
            cep: new forms_1.FormControl('', [
                forms_1.Validators.required
            ]),
            notes: new forms_1.FormControl('', [])
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getCep = function () {
        var _this = this;
        this.cepService.getCep('03511050').subscribe(function (data) { return _this.address = data; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
