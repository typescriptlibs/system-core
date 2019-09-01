/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

////
//
//  Import
//
////

import Enum from '../Enum';
import SystemCoreDecorator from '../../package';

////
//
//  Enums
//
////

@SystemCoreDecorator
export class MemberTypes extends Enum<number>
{
    ////
    //
    //  Static Properties
    //
    ////

    public static readonly Constructor = new MemberTypes( 1 );
    public static readonly Event = new MemberTypes( 2 );
    public static readonly Field = new MemberTypes( 4 );
    public static readonly Method = new MemberTypes( 8 );
    public static readonly Property = new MemberTypes( 16 );
    public static readonly TypeInfo = new MemberTypes( 32 );
    public static readonly Custom = new MemberTypes( 64 );
    public static readonly NestedType = new MemberTypes( 128 );
}

////
//
//  Export
//
////

export default MemberTypes;
