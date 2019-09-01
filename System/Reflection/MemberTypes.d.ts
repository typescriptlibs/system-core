/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import Enum from '../Enum';
export declare class MemberTypes extends Enum<number> {
    static readonly Constructor: MemberTypes;
    static readonly Event: MemberTypes;
    static readonly Field: MemberTypes;
    static readonly Method: MemberTypes;
    static readonly Property: MemberTypes;
    static readonly TypeInfo: MemberTypes;
    static readonly Custom: MemberTypes;
    static readonly NestedType: MemberTypes;
}
export default MemberTypes;
