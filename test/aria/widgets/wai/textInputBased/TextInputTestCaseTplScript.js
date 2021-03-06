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

Aria.tplScriptDefinition({
    $classpath : "test.aria.widgets.wai.textInputBased.TextInputTestCaseTplScript",
    $dependencies : ["aria.utils.Data", "aria.utils.validators.Mandatory"],
    $destructor : function () {
        aria.utils.Data.unsetValidator(this.data.text1, "value");
        aria.utils.Data.unsetValidator(this.data.text2, "value");
        aria.utils.Data.unsetValidator(this.data.textarea1, "value");
        aria.utils.Data.unsetValidator(this.data.textarea2, "value");
        this.validator.$dispose();
    },
    $prototype : {
        $dataReady : function () {
            var validator = this.validator = new aria.utils.validators.Mandatory("This field is mandatory");
            aria.utils.Data.setValidator(this.data.text1, "value", validator, null, "onblur");
            aria.utils.Data.setValidator(this.data.text2, "value", validator, null, "onblur");
            aria.utils.Data.setValidator(this.data.textarea1, "value", validator, null, "onblur");
            aria.utils.Data.setValidator(this.data.textarea2, "value", validator, null, "onblur");
        }
    }
});
