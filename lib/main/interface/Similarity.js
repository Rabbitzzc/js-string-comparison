"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}module.exports=/*#__PURE__*/function(){function a(){_classCallCheck(this,a)}/**
     * 
     * @param {String} thanos 灭霸，主字符串
     * @param {String} rival  敌人，需要比较的字符串
     * @description 比较两个字符串
     */return _createClass(a,[{key:"similarity",value:function similarity(){console.info(111)}/**
     * 
     * @param {String} thanos  
     * @param {[...String]} avengers  复仇者，字符串数组
     * @description 寻找最佳匹配结果
     */},{key:"sortMatch",value:function sortMatch(b,c){var d=this;return a.checkThanosType(b),a.checkAvengersType(c),c.map(function(a,c){return{member:a,index:c,rating:d.similarity(b,a)}}).sort(function(c,a){return c.rating-a.rating})}// distance
},{key:"distance",value:function distance(){// 计算 distance
}}],[{key:"checkThanosType",value:function checkThanosType(a){if("string"!=typeof a)throw new Error("first argument should be a string")}},{key:"checkRivalType",value:function checkRivalType(a){if("string"!=typeof a)throw new Error("second argument should be a string")}},{key:"checkAvengersType",value:function checkAvengersType(a){if(!Array.isArray(a))throw new Error("second argument should be an array of strings");if(a.find(function(a){return"string"!=typeof a}))throw new Error("second argument should be an array of strings")}},{key:"initParams",value:function initParams(a,b){return[a.replace(/\s+/g,"").toLowerCase(),b.replace(/\s+/g,"").toLowerCase()]}}]),a}();