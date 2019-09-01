/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

    System Core Library

    Copyright (c) TypeScriptLibs and Contributors

    Licensed under the MIT License; you may not use this file except in
    compliance with the License. You may obtain a copy of the MIT License at
    https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

////
//
//  Modules
//
////

export module TestUtility
{
    ////
    //
    //  Properties
    //
    ////

    let _assertCounter = 0;

    ////
    //
    //  Functions
    //
    ////

    export function assertDeepEqual<T> ( value: T, expected: T, errorMessage?: string ): void
    {
        if ( value !== null && expected !== null && typeof value === 'object' && typeof expected === 'object' )
        {
            assertEqual( JSON.stringify( value, jsonFormatter, '  ' ), JSON.stringify( expected, jsonFormatter, '  ' ), errorMessage );
        }
        else
        {
            assertEqual( value, expected );
        }
    }

    export function assertEqual<T> ( value: T, expected: T, errorMessage?: string ): void
    {
        if ( typeof value !== typeof expected || value !== expected )
        {
            throw new Error(
                ( errorMessage || 'Values should be equal.' ) +
                '\nExpected: ' + expected +
                '\nActual: ' + value
            );
        }

        ++_assertCounter;
    }

    export function assertNotEqual<T> ( value: T, notExpected: T, errorMessage?: string ): void
    {
        if ( value === notExpected )
        {
            throw new Error(
                ( errorMessage || 'Values should not be equal.' ) +
                '\nNot Expected: ' + notExpected +
                '\nActual: ' + value
            );
        }

        ++_assertCounter;
    }

    export function clear (): void
    {
        _assertCounter = 0;
    }

    export function getAssertCounter (): number
    {
        return _assertCounter;
    }

    function jsonFormatter ( key: string, value: unknown ): unknown
    {
        if ( typeof value !== 'string' )
        {
            return value;
        }

        return value.replace( '\n', '\\n' ).replace( '\r', '\\r' );
    }
}

////
//
//  Export
//
////

export default TestUtility;
