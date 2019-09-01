/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import Environment from './Runtime/Environment';
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
export declare class OBJECT {
    private '[[__hashCode__]]';
    private '[[__target__]]';
    /**
     * Instantiates a basic object.
     */
    constructor();
    /**
     * Compares this object instance with an other object instance for equality.
     * Returns true, if the object instances are equal.
     *
     * @param other
     * The object instance to compare with.
     */
    equals(other: OBJECT): boolean;
    /**
     * Generates and returns a unique code for this object instance.
     */
    getHashCode(): number;
    /**
     * Returns the type of the object instance for further reflection.
     */
    getType(): Type;
    /**
     * Returns the class name as the default string representation of an
     * object. Must be overwritten by value based classes.
     */
    toString(): string;
    /**
     * Returns the primitive value of the object instance.
     */
    valueOf(): (bigint | boolean | number | string | symbol | this);
}
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
export declare class Type extends OBJECT {
    /**
     * Returns the class type of the given object.
     *
     * @param object
     * The object to get the type of.
     */
    static of(object: Environment.BasicType): Type;
    /**
     * Creates the class type of a given object.
     *
     * @param object
     * The object to reflect.
     */
    private constructor();
    private _constructor;
    private _hashCode;
    private _name;
    private _namespace;
    private _package;
    /**
     * Returns the full class name.
     */
    readonly fullName: string;
    /**
     * Returns the class name.
     */
    readonly name: string;
    /**
     * Returns the class namespace.
     */
    readonly namespace: (string | undefined);
    /**
     * Returns the class package.
     */
    readonly package: (string | undefined);
    /**
     * Compares this object type with another object type. Returns true, if the
     * object types are equal, otherwise false.
     *
     * @param other
     * The other type to compare with.
     */
    equals(other: OBJECT): boolean;
    /**
     * Returns the names of the enum constants.
     */
    getEnumNames(): Array<string>;
    /**
     * Returns a generated unique code for this type.
     */
    getHashCode(): number;
    /**
     * Returns itself for further reflection.
     */
    getType(): Type;
    /**
     * Returns the full name of the representing class.
     */
    toString(): string;
    /**
     * Returns the full name of the representing class.
     */
    valueOf(): string;
}
export default OBJECT;
