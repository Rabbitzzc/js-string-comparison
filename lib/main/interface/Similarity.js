"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}module.exports=/*#__PURE__*/function(){function Similarity(){_classCallCheck(this,Similarity)}/**
     * 
     * @param {String} thanos 灭霸，主字符串
     * @param {String} rival  敌人，需要比较的字符串
     * @description 比较两个字符串
     */return _createClass(Similarity,[{key:"similarity",value:function similarity(){console.info(111)}/**
     * 
     * @param {String} thanos  
     * @param {[...String]} avengers  复仇者，字符串数组
     * @description 寻找最佳匹配结果
     */},{key:"sortMatch",value:function sortMatch(thanos,avengers){var _this=this;return Similarity.checkThanosType(thanos),Similarity.checkAvengersType(avengers),avengers.map(function(str,index){return{member:str,index:index,rating:_this.similarity(thanos,str)}}).sort(function(a,b){return a.rating-b.rating})}// distance
},{key:"distance",value:function distance(){// 计算 distance
}}],[{key:"checkThanosType",value:function checkThanosType(thanos){if("string"!=typeof thanos)throw new Error("first argument should be a string")}},{key:"checkRivalType",value:function checkRivalType(rival){if("string"!=typeof rival)throw new Error("second argument should be a string")}},{key:"checkAvengersType",value:function checkAvengersType(avengers){if(!Array.isArray(avengers))throw new Error("second argument should be an array of strings");if(avengers.find(function(s){return"string"!=typeof s}))throw new Error("second argument should be an array of strings")}},{key:"initParams",value:function initParams(thanos,rival){return[thanos.replace(/\s+/g,"").toLowerCase(),rival.replace(/\s+/g,"").toLowerCase()]}}]),Similarity}();