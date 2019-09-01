/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import Environment from './Runtime/Environment';
import Object from './Object';
/**
 * The base class for value types.
 */
export declare abstract class ValueType<T extends Environment.PrimitiveType> extends Object {
    /**
     * Returns true, if the object value is equal to the other object value.
     *
     * @param other
     * The object value to compare with.
     */
    equals(other: ValueType<T>): boolean;
    /**
     * Generates and returns a unique code for the string value of this object.
     */
    getHashCode(): number;
    /**
     * Returns the string of this object value.
     */
    toString(): string;
    /**
     * Returns the primitive value of this object. Must be overwritten.
     */
    abstract valueOf(): T;
}
export default ValueType;
