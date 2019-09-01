/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import Environment from './Runtime/Environment';
import IComparable from './IComparable';
import Type from './Type';
import ValueType from './ValueType';
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
export declare abstract class Enum<T extends Environment.PrimitiveType> extends ValueType<T> implements IComparable<Enum<T>> {
    private static readonly _enums;
    /**
     * Returns all names of the given enum type.
     *
     * @param enumType
     * The enum type.
     */
    static getNames(enumType: Type): Array<string>;
    /**
     * Instantiates a new enum value.
     *
     * @param value
     * The value of the pair in the enum.
     */
    constructor(value: T);
    private _value;
    /**
     * Returns true, if the enum instance is the same.
     *
     * @param other
     * The enum to compare with.
     */
    equals(other: Enum<T>): boolean;
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
    compareTo(other: Enum<T>): number;
    /**
     * Returns the value of the enum member.
     */
    valueOf(): T;
}
export default Enum;
