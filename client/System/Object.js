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
define(["require", "exports", "./Runtime/RuntimeUtility", "../package"], function (require, exports, RuntimeUtility_1, package_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////
    //
    //  Classes
    //
    ////
    /**
     * The base `Object` class for all other classes. Internally defined in upper
     * case to avoid conflicts with reserved keywords.
     *
     * ```ts
     * import { Object, OBJECT } from '@tsl/system-core';
     * let obj = new Object();
     * console.log(obj.getType().fullName); // @tsl/system-core/System.Object
     * obj = new OBJECT();
     * console.log(obj.getType().fullName); // @tsl/system-core/System.Object
     * ```
     */
    var OBJECT = /** @class */ (function () {
        ////
        //
        //  Constructors
        //
        ////
        /**
         * Instantiates a basic object.
         */
        function OBJECT() {
            var _newTarget = this.constructor;
            ////
            //
            //  Properties
            //
            ////
            this['[[__hashCode__]]'] = undefined;
            this['[[__target__]]'] = _newTarget;
            if (typeof this.dispose === 'function') {
                RuntimeUtility_1.default.registerDisposable(this);
            }
        }
        ////
        //
        //  Functions
        //
        ////
        /**
         * Compares this object instance with an other object instance for equality.
         * Returns true, if the object instances are equal.
         *
         * @param other
         * The object instance to compare with.
         */
        OBJECT.prototype.equals = function (other) {
            return (other.getHashCode() === this.getHashCode()
                && other.getType().equals(this.getType())
                && other.valueOf() === this.valueOf());
        };
        /**
         * Generates and returns a unique code for this object instance.
         */
        OBJECT.prototype.getHashCode = function () {
            if (this['[[__hashCode__]]'] === undefined) {
                this['[[__hashCode__]]'] = RuntimeUtility_1.default.generateUniqueHashCode();
            }
            return this['[[__hashCode__]]'];
        };
        /**
         * Returns the type of the object instance for further reflection.
         */
        OBJECT.prototype.getType = function () {
            return Type.of(this['[[__target__]]']);
        };
        /**
         * Returns the class name as the default string representation of an
         * object. Must be overwritten by value based classes.
         */
        OBJECT.prototype.toString = function () {
            return this.getType().toString();
        };
        /**
         * Returns the primitive value of the object instance.
         */
        OBJECT.prototype.valueOf = function () {
            return this;
        };
        OBJECT = __decorate([
            package_1.default
        ], OBJECT);
        return OBJECT;
    }());
    exports.OBJECT = OBJECT;
    /**
     * The `Type` class of an object provides information for further reflection.
     *
     * ```ts
     * import { Object, OBJECT, Type } from '@tsl/system-core';
     * let obj = new Object();
     * console.log(Type.of(obj).getType().fullName);
     * // output: @tsl/system-core/System.Object
     * obj = new OBJECT();
     * console.log(TYPE.of(obj).fullName);
     * // output: @tsl/system-core/System.Object
     * ```
     */
    var Type = /** @class */ (function (_super) {
        __extends(Type, _super);
        ////
        //
        //  Constructor
        //
        ////
        /**
         * Creates the class type of a given object.
         *
         * @param object
         * The object to reflect.
         */
        function Type(object) {
            var _this = _super.call(this) || this;
            var constructor = (object instanceof Function ? object : object.constructor);
            _this._constructor = constructor;
            _this._name = constructor.name;
            _this._namespace = constructor['[[__namespace__]]'];
            _this._package = constructor['[[__package__]]'];
            if (_this._name === 'OBJECT' &&
                _this._namespace === 'System' &&
                _this._package === '@tsl/system-core') {
                _this._name = 'Object';
            }
            return _this;
            // @todo this._numberOfArguments = obj.constructor.length;
        }
        Type_1 = Type;
        ////
        //
        //  Static Functions
        //
        ////
        /**
         * Returns the class type of the given object.
         *
         * @param object
         * The object to get the type of.
         */
        Type.of = function (object) {
            return new Type_1(object);
        };
        Object.defineProperty(Type.prototype, "fullName", {
            /**
             * Returns the full class name.
             */
            get: function () {
                var namespaceName = this.namespace;
                var packageName = this.package;
                var fullName = this.name;
                if (namespaceName) {
                    fullName = namespaceName + '.' + fullName;
                }
                if (packageName) {
                    fullName = packageName + '/' + fullName;
                }
                return fullName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Type.prototype, "name", {
            /**
             * Returns the class name.
             */
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Type.prototype, "namespace", {
            /**
             * Returns the class namespace.
             */
            get: function () {
                return this._namespace;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Type.prototype, "package", {
            /**
             * Returns the class package.
             */
            get: function () {
                return this._package;
            },
            enumerable: true,
            configurable: true
        });
        ////
        //
        //  Functions
        //
        ////
        /**
         * Compares this object type with another object type. Returns true, if the
         * object types are equal, otherwise false.
         *
         * @param other
         * The other type to compare with.
         */
        Type.prototype.equals = function (other) {
            return (other instanceof Type_1
                && other.fullName === this.fullName);
        };
        /**
         * Returns the names of the enum constants.
         */
        Type.prototype.getEnumNames = function () {
            var enumConstructor = this._constructor;
            if (typeof enumConstructor !== 'function') {
                return [];
            }
            return Object
                .getOwnPropertyNames(enumConstructor)
                .filter(function (propertyName) {
                return enumConstructor[propertyName] instanceof enumConstructor;
            });
        };
        /**
         * Returns a generated unique code for this type.
         */
        Type.prototype.getHashCode = function () {
            if (this._hashCode === undefined) {
                this._hashCode = RuntimeUtility_1.default.generateStringHashCode(this.fullName.valueOf());
            }
            return this._hashCode;
        };
        /**
         * Returns itself for further reflection.
         */
        Type.prototype.getType = function () {
            return this;
        };
        /**
         * Returns the full name of the representing class.
         */
        Type.prototype.toString = function () {
            return this.fullName;
        };
        /**
         * Returns the full name of the representing class.
         */
        Type.prototype.valueOf = function () {
            return this.fullName;
        };
        var Type_1;
        Type = Type_1 = __decorate([
            package_1.default
        ], Type);
        return Type;
    }(OBJECT));
    exports.Type = Type;
    ////
    //
    //  Export
    //
    ////
    exports.default = OBJECT;
});
//# sourceMappingURL=Object.js.map