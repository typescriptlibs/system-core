"use strict";
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Object_1 = require("./Object");
var RuntimeUtility_1 = require("./Runtime/RuntimeUtility");
var package_1 = require("../package");
////
//
//  Classes
//
////
/**
 * The base class for value types.
 */
var ValueType = /** @class */ (function (_super) {
    __extends(ValueType, _super);
    function ValueType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ////
    //
    //  Functions
    //
    ////
    /**
     * Returns true, if the object value is equal to the other object value.
     *
     * @param other
     * The object value to compare with.
     */
    ValueType.prototype.equals = function (other) {
        return (this.valueOf() === other.valueOf());
    };
    /**
     * Generates and returns a unique code for the string value of this object.
     */
    ValueType.prototype.getHashCode = function () {
        return RuntimeUtility_1.default.generateStringHashCode(this.toString());
    };
    /**
     * Returns the string of this object value.
     */
    ValueType.prototype.toString = function () {
        return this.valueOf().toString();
    };
    ValueType = __decorate([
        package_1.default
    ], ValueType);
    return ValueType;
}(Object_1.default));
exports.ValueType = ValueType;
////
//
//  Exports
//
////
exports.default = ValueType;
//# sourceMappingURL=ValueType.js.map