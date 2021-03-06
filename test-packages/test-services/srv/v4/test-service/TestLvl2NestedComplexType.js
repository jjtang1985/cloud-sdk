"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TestLvl2NestedComplexType.build]] instead.
 */
function createTestLvl2NestedComplexType(json) {
    return TestLvl2NestedComplexType.build(json);
}
exports.createTestLvl2NestedComplexType = createTestLvl2NestedComplexType;
/**
 * TestLvl2NestedComplexTypeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TestLvl2NestedComplexTypeField = /** @class */ (function (_super) {
    __extends(TestLvl2NestedComplexTypeField, _super);
    function TestLvl2NestedComplexTypeField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TestLvl2NestedComplexType.stringProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stringProperty = new v4_1.ComplexTypeStringPropertyField('StringProperty', _this, 'Edm.String');
        return _this;
    }
    return TestLvl2NestedComplexTypeField;
}(v4_1.ComplexTypeField));
exports.TestLvl2NestedComplexTypeField = TestLvl2NestedComplexTypeField;
var TestLvl2NestedComplexType;
(function (TestLvl2NestedComplexType) {
    function build(json) {
        return v4_1.createComplexType(json, {
            StringProperty: function (stringProperty) { return ({ stringProperty: v4_1.edmToTs(stringProperty, 'Edm.String') }); }
        });
    }
    TestLvl2NestedComplexType.build = build;
})(TestLvl2NestedComplexType = exports.TestLvl2NestedComplexType || (exports.TestLvl2NestedComplexType = {}));
//# sourceMappingURL=TestLvl2NestedComplexType.js.map