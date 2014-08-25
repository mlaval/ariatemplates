/*
 * Copyright 2012 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Aria = require("../../Aria");
var ariaUtilsValidatorsValidator = require("./Validator");


/**
 * Validator for a mandatory value
 */
module.exports = Aria.classDefinition({
    $classpath : "aria.utils.validators.Mandatory",
    $extends : ariaUtilsValidatorsValidator,
    $statics : {
        DEFAULT_LOCALIZED_MESSAGE : "This field is a mandatory field."
    },
    $prototype : {
        validate : function (value) {
            if (value != null && value !== "") {
                return this._validationSucceeded();
            }
            return this._validationFailed();
        }
    }
});
