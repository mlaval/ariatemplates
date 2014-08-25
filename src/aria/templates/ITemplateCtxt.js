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
var Aria = require("../Aria");


/**
 * Interface for aria.templates.TemplateCtxt to be accessible from outside the framework, when developping tools to
 * debug or customize Aria Templates applications.
 * @class aria.templates.ITemplateCtxt
 */
module.exports = Aria.interfaceDefinition({
    $classpath : 'aria.templates.ITemplateCtxt',
    $interface : {
        /**
         * Classpath of the template.
         * @type String
         */
        tplClasspath : "Object",

        /**
         * Reference to the module controller public interface, if a module controller is linked to the template.
         * @type Object
         */
        moduleCtrl : "Object",

        /**
         * Reference to the module controller whole object, if a module controller is linked to the template.
         * @type Object
         */
        moduleCtrlPrivate : "Object",

        /**
         * Resources from the module controller linked to the template.
         * @type Object
         */
        moduleRes : "Object",

        /**
         * Reference to the flow controller public interface, if a flow controller is linked to the template.
         * @type Object
         */
        flowCtrl : "Object",

        /**
         * Reference to the flow controller whole object, if a flow controller is linked to the template.
         * @type Object
         */
        flowCtrlPrivate : "Object",

        /**
         * Data available in the template through the 'data' variable.
         * @type Object
         */
        data : "Object",

        /**
         * Reload this template context. Note: this will destroy it.
         * @param {String} tplSource new source for template
         * @param {aria.core.CfgBeans:Callback} callback [optional] function called when reload is complete
         */
        $reload : "Function"
    }
});
