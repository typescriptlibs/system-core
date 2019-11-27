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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../package", "./ValueType"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var package_1 = require("../package");
    var ValueType_1 = require("./ValueType");
    ////
    //
    //  Classes
    //
    ////
    /**
     * This is the abstract base class for enums.
     *
     * ```ts
     * import { Enum } from `@tsl/system-core`;
     * class MyEnum extends Enum<boolean>
     * {
     *     public static readonly No = new MyEnum(false);
     *     public static readonly Yes = new MyEnum(true);
     * }
     * const myFlag: MyEnum = MyEnum.No;
     * ```
     */
    var Enum = /** @class */ (function (_super) {
        __extends(Enum, _super);
        ////
        //
        //  Constructor
        //
        ////
        /**
         * Instantiates a new enum value.
         *
         * @param value
         * The value of the pair in the enum.
         */
        function Enum(value) {
            var _this = _super.call(this) || this;
            _this._value = value;
            return _this;
        }
        ////
        //
        //  Static Functions
        //
        ////
        /**
         * Returns all names of the given enum type.
         *
         * @param enumType
         * The enum type.
         */
        Enum.getNames = function (enumType) {
            return enumType.getEnumNames();
        };
        ////
        //
        //  Functions
        //
        ////
        /**
         * Returns true, if the enum instance is the same.
         *
         * @param other
         * The enum to compare with.
         */
        Enum.prototype.equals = function (other) {
            return (this === other);
        };
        /**
         * Returns a number indicating the order position of the current enum in
         * comparison to an other enum of the same type.
         *
         * - A number lower than zero (`< 0`) means, that the order position of the
         *   current enum comes before the order position of the other enum.
         *
         * - A number equal to zero (`=== 0`) means, that both enums share the same
         *   order position.
         *
         * - A number higher than zero (`> 0`) means, that the order position of the
         *   current enum comes after the order position of the other enum.
         */
        Enum.prototype.compareTo = function (other) {
            var otherValue = other.valueOf();
            var thisValue = this.valueOf();
            if (thisValue < otherValue) {
                return -1;
            }
            else if (thisValue > otherValue) {
                return 1;
            }
            return 0;
        };
        /**
         * Returns the value of the enum member.
         */
        Enum.prototype.valueOf = function () {
            return this._value;
        };
        ////
        //
        //  Static Properties
        //
        ////
        Enum._enums = {};
        Enum = __decorate([
            package_1.default
        ], Enum);
        return Enum;
    }(ValueType_1.default));
    exports.Enum = Enum;
    ////
    //
    //  Export
    //
    ////
    exports.default = Enum;
});
//# sourceMappingURL=Enum.js.map