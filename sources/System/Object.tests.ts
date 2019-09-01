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

import { OBJECT, TestUtility } from '../index';

////
//
//  Tests
//
////

export function test (): void
{
    test_getHashCode();
    test_getType();
}

function test_getHashCode (): void
{
    const object = new OBJECT();

    TestUtility.assertEqual(
        object.getHashCode() <= -1,
        true,
        'Object.getHashCode should return negative value.'
    );
}

function test_getType (): void
{
    const object = new OBJECT();
    const type = object.getType();

    TestUtility.assertEqual(
        type.fullName,
        '@tsl/system-core/System.Object',
        'Object.getType() should return fullName.'
    );
}

////
//
//  Export
//
////

export default test;
