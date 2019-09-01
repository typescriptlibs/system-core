/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

////
//
//  Imports
//
////

import Environment from './Runtime/Environment';
import IComparable from './IComparable';
import PackageClassDecorator from '../package';
import Type from './Type';
import ValueType from './ValueType';

////
//
//  Types
//
////

type EnumPairRecord = Record<string, Environment.PrimitiveType>;
type EnumRecord = Record<string, EnumPairRecord>;

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
@PackageClassDecorator
export abstract class Enum<T extends Environment.PrimitiveType>
    extends ValueType<T>
    implements IComparable<Enum<T>>
{
    ////
    //
    //  Static Properties
    //
    ////

    private static readonly _enums: EnumRecord = {};

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
    public static getNames ( enumType: Type ): Array<string>
    {
        return enumType.getEnumNames();
    }

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
    public constructor ( value: T )
    {
        super();

        this._value = value;
    }

    ////
    //
    //  Properties
    //
    ////

    private _value: T;

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
    public equals ( other: Enum<T> ): boolean
    {
        return ( this === other );
    }

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
    public compareTo ( other: Enum<T> ): number
    {
        const otherValue = other.valueOf();
        const thisValue = this.valueOf();

        if ( thisValue < otherValue )
        {
            return -1;
        }
        else if ( thisValue > otherValue )
        {
            return 1;
        }

        return 0;
    }

    /**
     * Returns the value of the enum member.
     */
    public valueOf (): T
    {
        return this._value;
    }
}

////
//
//  Export
//
////

export default Enum;
