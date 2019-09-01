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

import { Environment, TestUtility } from '../../index';

////
//
//  Tests
//
////

export function test (): void
{
    test_globalNamespace();
    test_isClient();
    test_isServer();
    test_isWorker();
    test_maxSafeInteger();
    test_minSafeInteger();
    test_newLine();
    test_newLineAll();
}

function test_globalNamespace (): void
{
    TestUtility.assertEqual(
        global as unknown,
        Environment.globalNamespace,
        'Environment.globalNamespace should be equal to global.'
    );
}

function test_isClient (): void
{
    TestUtility.assertEqual(
        Environment.isClient,
        false,
        'Environment.isClient should be false.'
    );
}

function test_isServer (): void
{
    TestUtility.assertEqual(
        Environment.isServer,
        true,
        'Environment.isServer should be true.'
    );
}

function test_isWorker (): void
{
    TestUtility.assertEqual(
        Environment.isWorker,
        false,
        'Environment.isWorker should be false.'
    );
}

function test_maxSafeInteger (): void
{
    TestUtility.assertEqual(
        Environment.maxSafeInteger,
        Number.MAX_SAFE_INTEGER,
        'Environment.maxSafeInteger should be equal to Number.MAX_SAFE_INTEGER.'
    );
}

function test_minSafeInteger (): void
{
    TestUtility.assertEqual(
        Environment.minSafeInteger,
        Number.MIN_SAFE_INTEGER,
        'Environment.minSafeInteger should be equal to Number.MIN_SAFE_INTEGER.'
    );
}

function test_newLine (): void
{
    TestUtility.assertEqual(
        Environment.newLine,
        '\n',
        'Environment.newLine should be POSIX standard.'
    );
}

function test_newLineAll (): void
{
    TestUtility.assertDeepEqual(
        Environment.newLineAll,
        ['\r\n', '\n', '\r'],
        'Environment.newLineAll should contain new line characters for Windows, POSIX, and MacOS.'
    );
}

////
//
//  Export
//
////

export default test;
