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

import { TestUtility } from './index';
import testEnvironment from './System/Runtime/Environment.tests';
import testObject from './System/Object.tests';

////
//
//  Constructor
//
////

try
{
    testEnvironment();
    testObject();
}
catch ( catchedError )
{
    console.error( '🆘 ', catchedError );
    process.exit( -1 );
}
finally
{
    console.info( '✅ ', TestUtility.getAssertCounter() + ' tests succeeded.' );
}
