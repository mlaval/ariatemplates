/*
 * Copyright 2013 Amadeus s.a.s.
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

var fs = require('fs');
var UglifyJS = require('uglify-js');

var RemoveIE7 = function (cfg) {
    cfg = cfg || {};
    cfg.files = cfg.files || ['**/*.js'];
    cfg.conditions = cfg.conditions || ['aria.core.Browser.isIE6', 'aria.core.Browser.isIE7', 'this._isIE7OrLess', 'aria.core.Browser.isIE', 'browser.isIE6', 'browser.isIE7'];
    this.config = cfg;
    conditions = cfg.conditions;
};

var removeBrowserSpecificCode = new UglifyJS.TreeTransformer(null, function (node) {
    if (node instanceof UglifyJS.AST_If) {
        var s_condition = node.condition.print_to_string();
        for (var i = 0; i < conditions.length; i++) {
            if (s_condition.indexOf(conditions[i]) > -1) {
                for (var j = 0; j < conditions.length; j++) {
                    s_condition = s_condition.replace(conditions[j], "false");
                }
                s_condition = "if(" + s_condition + "){}";
                var astCond = UglifyJS.parse(s_condition);
                node.condition = astCond.body[0].condition;
                break;
            }
        }
    }
});

RemoveIE7.prototype.onAddSourceFile = function (packaging, inputFile) {
    if (!inputFile.isMatch(this.config.files)) {
        return;
    }
    var content = inputFile.getTextContent();
    var ast = UglifyJS.parse(content);
    var ast2 = ast.transform(removeBrowserSpecificCode);
    var newContent = ast2.print_to_string({
        beautify : true,
        comments : true
    });
    inputFile.setTextContent(newContent);
};

module.exports = RemoveIE7;