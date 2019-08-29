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

import Environment from './Environment';
import SystemCoreDecorator from '../../package';

////
//
//  Classes
//
////

/**
 * Provides special functions for the runtime session.
 */
@SystemCoreDecorator.$( 'Runtime' )
export abstract class RuntimeUtility
{
    ////
    //
    //  Static Properties
    //
    ////

    private static generatedStringHashCodeSalt: number = ( 1 + ( Math.random() * ( Environment.maxSafeInteger - 1 ) ) );

    private static generatedUniqueHashCodeCounter: number = Environment.minSafeInteger;

    ////
    //
    //  Static Functions
    //
    ////

    /**
     * Returns a generated unique code for a string. This code is only unique
     * during the current runtime session.
     *
     * @param str
     * The string to generate the unique code of.
     */
    public static generateStringHashCode ( str: string ): number
    {
        let hash1 = 5381;
        let hash2 = hash1;
        let len = str.length;

        while ( len > 2 )
        {
            hash1 = ( ( hash1 << 5 ) + hash1 + ( hash1 >> 27 ) ) ^ str.charCodeAt( len - 1 );
            hash2 = ( ( hash2 << 5 ) + hash2 + ( hash2 >> 27 ) ) ^ str.charCodeAt( len - 2 );
            len -= 2;
        }

        if ( len > 0 )
        {
            hash1 = ( ( hash1 << 5 ) + hash1 + ( hash1 >> 27 ) ) ^ str.charCodeAt( len - 1 );
        }

        hash1 ^= RuntimeUtility.generatedStringHashCodeSalt;

        return ( hash1 + ( hash2 * 1566083941 ) );
    }

    /**
     * Returns a generated unique code for an object instances. This code is
     * only unique during the current runtime session.
     */
    public static generateUniqueHashCode (): number
    {
        return ++RuntimeUtility.generatedUniqueHashCodeCounter;
    }
}

////
//
//  Export
//
////

export default RuntimeUtility;
