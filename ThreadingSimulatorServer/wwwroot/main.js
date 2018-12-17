(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Enums/BlockType.ts":
/*!************************************!*\
  !*** ./src/app/Enums/BlockType.ts ***!
  \************************************/
/*! exports provided: BlockType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockType", function() { return BlockType; });
var BlockType;
(function (BlockType) {
    BlockType[BlockType["SEMAPHOR"] = 0] = "SEMAPHOR";
    BlockType[BlockType["SHARED_VARIABLE"] = 1] = "SHARED_VARIABLE";
    BlockType[BlockType["OTHER"] = 2] = "OTHER";
    BlockType[BlockType["LOOP"] = 3] = "LOOP";
})(BlockType || (BlockType = {}));


/***/ }),

/***/ "./src/app/Enums/CommandType.ts":
/*!**************************************!*\
  !*** ./src/app/Enums/CommandType.ts ***!
  \**************************************/
/*! exports provided: CommandType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandType", function() { return CommandType; });
var CommandType;
(function (CommandType) {
    CommandType[CommandType["SEMAPHOR_ENTER"] = 0] = "SEMAPHOR_ENTER";
    CommandType[CommandType["SEMAPHOR_EXIT"] = 1] = "SEMAPHOR_EXIT";
    CommandType[CommandType["SHARED_VARIABLE_GET"] = 2] = "SHARED_VARIABLE_GET";
    CommandType[CommandType["SHARED_VARIABLE_CALC_SUM"] = 3] = "SHARED_VARIABLE_CALC_SUM";
    CommandType[CommandType["SHARED_VARIABLE_CALC_DIFF"] = 4] = "SHARED_VARIABLE_CALC_DIFF";
    CommandType[CommandType["SHARED_VARIABLE_SET"] = 5] = "SHARED_VARIABLE_SET";
    CommandType[CommandType["OTHER"] = 6] = "OTHER";
})(CommandType || (CommandType = {}));


/***/ }),

/***/ "./src/app/Enums/LogType.ts":
/*!**********************************!*\
  !*** ./src/app/Enums/LogType.ts ***!
  \**********************************/
/*! exports provided: LogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogType", function() { return LogType; });
var LogType;
(function (LogType) {
    LogType[LogType["SUSPENDED"] = 0] = "SUSPENDED";
    LogType[LogType["MOVE"] = 1] = "MOVE";
    LogType[LogType["DEADLOCK"] = 2] = "DEADLOCK";
    LogType[LogType["GET_VALUE"] = 3] = "GET_VALUE";
    LogType[LogType["SET_VALUE"] = 4] = "SET_VALUE";
    LogType[LogType["CALC_VALUE"] = 5] = "CALC_VALUE";
    LogType[LogType["ENTER_REGION"] = 6] = "ENTER_REGION";
    LogType[LogType["EXIT_REGION"] = 7] = "EXIT_REGION";
    LogType[LogType["ALL_SUSPENDED"] = 8] = "ALL_SUSPENDED";
    LogType[LogType["DISPATCHER_SKIP"] = 9] = "DISPATCHER_SKIP";
    LogType[LogType["AWAKE_PROCESS"] = 10] = "AWAKE_PROCESS";
})(LogType || (LogType = {}));


/***/ }),

/***/ "./src/app/Enums/SemaphorOperationType.ts":
/*!************************************************!*\
  !*** ./src/app/Enums/SemaphorOperationType.ts ***!
  \************************************************/
/*! exports provided: SemaphorOperationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemaphorOperationType", function() { return SemaphorOperationType; });
var SemaphorOperationType;
(function (SemaphorOperationType) {
    SemaphorOperationType[SemaphorOperationType["ENTER"] = 0] = "ENTER";
    SemaphorOperationType[SemaphorOperationType["EXIT"] = 1] = "EXIT";
})(SemaphorOperationType || (SemaphorOperationType = {}));


/***/ }),

/***/ "./src/app/Enums/VariableOperationType.ts":
/*!************************************************!*\
  !*** ./src/app/Enums/VariableOperationType.ts ***!
  \************************************************/
/*! exports provided: VariableOperationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableOperationType", function() { return VariableOperationType; });
var VariableOperationType;
(function (VariableOperationType) {
    VariableOperationType[VariableOperationType["GET"] = 0] = "GET";
    VariableOperationType[VariableOperationType["SET"] = 1] = "SET";
    VariableOperationType[VariableOperationType["INCREASE"] = 2] = "INCREASE";
    VariableOperationType[VariableOperationType["DECREASE"] = 3] = "DECREASE";
})(VariableOperationType || (VariableOperationType = {}));


/***/ }),

/***/ "./src/app/Helper.ts":
/*!***************************!*\
  !*** ./src/app/Helper.ts ***!
  \***************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
/* harmony import */ var _Models_BlockModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Models/BlockModel */ "./src/app/Models/BlockModel.ts");
/* harmony import */ var _Enums_BlockType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enums/BlockType */ "./src/app/Enums/BlockType.ts");
/* harmony import */ var _Models_SemaphorBlockModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/SemaphorBlockModel */ "./src/app/Models/SemaphorBlockModel.ts");
/* harmony import */ var _Models_VariableBlockModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Models/VariableBlockModel */ "./src/app/Models/VariableBlockModel.ts");
/* harmony import */ var _Models_LoopBlockModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Models/LoopBlockModel */ "./src/app/Models/LoopBlockModel.ts");
/* harmony import */ var _Models_ProgramModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Models/ProgramModel */ "./src/app/Models/ProgramModel.ts");
/* harmony import */ var _Models_ExecutableProgramModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Models/ExecutableProgramModel */ "./src/app/Models/ExecutableProgramModel.ts");
/* harmony import */ var _Models_ProcessCommandsModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Models/ProcessCommandsModel */ "./src/app/Models/ProcessCommandsModel.ts");
/* harmony import */ var _Models_CommandModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Models/CommandModel */ "./src/app/Models/CommandModel.ts");
/* harmony import */ var _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Enums/CommandType */ "./src/app/Enums/CommandType.ts");
/* harmony import */ var _Enums_SemaphorOperationType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Enums/SemaphorOperationType */ "./src/app/Enums/SemaphorOperationType.ts");
/* harmony import */ var _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Enums/VariableOperationType */ "./src/app/Enums/VariableOperationType.ts");
/* harmony import */ var _Models_BaseLogModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Models/BaseLogModel */ "./src/app/Models/BaseLogModel.ts");
/* harmony import */ var _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Enums/LogType */ "./src/app/Enums/LogType.ts");
/* harmony import */ var _Models_LogModel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Models/LogModel */ "./src/app/Models/LogModel.ts");
/* harmony import */ var _Models_SemaphoreLogModel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Models/SemaphoreLogModel */ "./src/app/Models/SemaphoreLogModel.ts");
/* harmony import */ var _Models_VariableLogModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Models/VariableLogModel */ "./src/app/Models/VariableLogModel.ts");

















var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.DeserializeSpecific = function (obj) {
        switch (obj.Type) {
            case _Enums_BlockType__WEBPACK_IMPORTED_MODULE_1__["BlockType"].OTHER:
                return _Models_BlockModel__WEBPACK_IMPORTED_MODULE_0__["BlockModel"].Deserialize(obj);
            case _Enums_BlockType__WEBPACK_IMPORTED_MODULE_1__["BlockType"].SEMAPHOR:
                return _Models_SemaphorBlockModel__WEBPACK_IMPORTED_MODULE_2__["SemaphorBlockModel"].Deserialize(obj);
            case _Enums_BlockType__WEBPACK_IMPORTED_MODULE_1__["BlockType"].SHARED_VARIABLE:
                return _Models_VariableBlockModel__WEBPACK_IMPORTED_MODULE_3__["VariableBlockModel"].Deserialize(obj);
            case _Enums_BlockType__WEBPACK_IMPORTED_MODULE_1__["BlockType"].LOOP:
                return _Models_LoopBlockModel__WEBPACK_IMPORTED_MODULE_4__["LoopBlockModel"].Deserialize(obj);
        }
    };
    Helper.MergeArrays = function (target, from) {
        from.forEach(function (el) { target.push(el); });
    };
    Helper.Convert = function (program) {
        var retModel = new _Models_ExecutableProgramModel__WEBPACK_IMPORTED_MODULE_6__["ExecutableProgramModel"]();
        retModel.Name = program.Name;
        program.Processes.forEach(function (process) {
            var pcm = new _Models_ProcessCommandsModel__WEBPACK_IMPORTED_MODULE_7__["ProcessCommandsModel"]();
            pcm.Name = process.Name;
            pcm.Commands = Helper.InternalConvert(process.Blocks);
            retModel.Add(pcm);
        });
        return retModel;
    };
    Helper.InternalConvert = function (blocks) {
        var commands = [];
        blocks.forEach(function (block) {
            switch (block.Type) {
                case _Enums_BlockType__WEBPACK_IMPORTED_MODULE_1__["BlockType"].LOOP:
                    Helper.MergeArrays(commands, Helper.InternalConvertLoop(block));
                    break;
                case _Enums_BlockType__WEBPACK_IMPORTED_MODULE_1__["BlockType"].SEMAPHOR:
                    commands.push(Helper.InternalConvertSemaphore(block));
                    break;
                case _Enums_BlockType__WEBPACK_IMPORTED_MODULE_1__["BlockType"].SHARED_VARIABLE:
                    Helper.MergeArrays(commands, Helper.InternalConvertVariable(block));
                    break;
                case _Enums_BlockType__WEBPACK_IMPORTED_MODULE_1__["BlockType"].OTHER:
                    var cmd = new _Models_CommandModel__WEBPACK_IMPORTED_MODULE_8__["CommandModel"]();
                    cmd.Type = _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].OTHER;
                    commands.push(cmd);
                    break;
            }
        });
        return commands;
    };
    Helper.InternalConvertSemaphore = function (SemaphorBlock) {
        var cmd = new _Models_CommandModel__WEBPACK_IMPORTED_MODULE_8__["CommandModel"]();
        cmd.Variable = SemaphorBlock.SemaphorName;
        cmd.Type = SemaphorBlock.SemaphorOperation == _Enums_SemaphorOperationType__WEBPACK_IMPORTED_MODULE_10__["SemaphorOperationType"].ENTER ? _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SEMAPHOR_ENTER : _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SEMAPHOR_EXIT;
        return cmd;
    };
    Helper.InternalConvertLoop = function (loopBlock) {
        var commands = [];
        for (var i = 0; i < loopBlock.Iterations; i++) {
            Helper.MergeArrays(commands, Helper.InternalConvert(loopBlock.Children));
        }
        return commands;
    };
    Helper.InternalConvertVariable = function (variableBlock) {
        var commands = [];
        var cmd;
        switch (variableBlock.VariableOperationType) {
            case _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_11__["VariableOperationType"].GET:
                cmd = new _Models_CommandModel__WEBPACK_IMPORTED_MODULE_8__["CommandModel"]();
                cmd.Variable = variableBlock.VariableName;
                cmd.Type = _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SHARED_VARIABLE_GET;
                commands.push(cmd);
                break;
            case _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_11__["VariableOperationType"].SET:
                cmd = new _Models_CommandModel__WEBPACK_IMPORTED_MODULE_8__["CommandModel"]();
                cmd.Variable = variableBlock.VariableName;
                cmd.Type = _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SHARED_VARIABLE_SET;
                cmd.Value = variableBlock.Value;
                commands.push(cmd);
                break;
            case _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_11__["VariableOperationType"].INCREASE:
            case _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_11__["VariableOperationType"].DECREASE:
                cmd = new _Models_CommandModel__WEBPACK_IMPORTED_MODULE_8__["CommandModel"]();
                cmd.Variable = variableBlock.VariableName;
                cmd.Type = _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SHARED_VARIABLE_GET;
                commands.push(cmd);
                cmd = new _Models_CommandModel__WEBPACK_IMPORTED_MODULE_8__["CommandModel"]();
                cmd.Variable = variableBlock.VariableName;
                cmd.Type = variableBlock.VariableOperationType == _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_11__["VariableOperationType"].INCREASE ? _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SHARED_VARIABLE_CALC_SUM : _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SHARED_VARIABLE_CALC_DIFF,
                    cmd.Value = variableBlock.Value;
                commands.push(cmd);
                cmd = new _Models_CommandModel__WEBPACK_IMPORTED_MODULE_8__["CommandModel"]();
                cmd.Variable = variableBlock.VariableName;
                cmd.Type = _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SHARED_VARIABLE_SET;
                commands.push(cmd);
                break;
        }
        return commands;
    };
    Helper.GetText = function (command) {
        switch (command.Type) {
            case _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SEMAPHOR_ENTER:
                return "Enter critical region - " + command.Variable;
            case _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SEMAPHOR_EXIT:
                return "Exit critical region - " + command.Variable;
            case _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SHARED_VARIABLE_GET:
                return "Get value of variable - " + command.Variable;
            case _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SHARED_VARIABLE_SET:
                return "Set value of variable - " + command.Variable;
            case _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SHARED_VARIABLE_CALC_SUM:
                return "Increase value of " + command.Variable + " by " + command.Value;
            case _Enums_CommandType__WEBPACK_IMPORTED_MODULE_9__["CommandType"].SHARED_VARIABLE_CALC_DIFF:
                return "Decrease value of " + command.Variable + " by " + command.Value;
            default:
                return "Block of commands";
        }
    };
    Helper.DeserializeLogs = function (jsonObj) {
        var _this = this;
        var logs = [];
        jsonObj.forEach(function (element) {
            logs.push(_this.DeserializeLog(element));
        });
        return logs;
    };
    Helper.DeserializeLog = function (obj) {
        switch (obj.Type) {
            case _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__["LogType"].ALL_SUSPENDED:
            case _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__["LogType"].DEADLOCK:
                return _Models_BaseLogModel__WEBPACK_IMPORTED_MODULE_12__["BaseLogModel"].Deserialize(obj);
            case _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__["LogType"].AWAKE_PROCESS:
            case _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__["LogType"].DISPATCHER_SKIP:
            case _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__["LogType"].MOVE:
                return _Models_LogModel__WEBPACK_IMPORTED_MODULE_14__["LogModel"].Deserialize(obj);
            case _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__["LogType"].ENTER_REGION:
            case _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__["LogType"].EXIT_REGION:
            case _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__["LogType"].SUSPENDED:
                return _Models_SemaphoreLogModel__WEBPACK_IMPORTED_MODULE_15__["SemaphoreLogModel"].Deserialize(obj);
            case _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__["LogType"].CALC_VALUE:
            case _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__["LogType"].GET_VALUE:
            case _Enums_LogType__WEBPACK_IMPORTED_MODULE_13__["LogType"].SET_VALUE:
                return _Models_VariableLogModel__WEBPACK_IMPORTED_MODULE_16__["VariableLogModel"].Deserialize(obj);
        }
    };
    Helper.DeserializePrograms = function (obj) {
        var tmp = [];
        obj.forEach(function (element) {
            tmp.push(_Models_ProgramModel__WEBPACK_IMPORTED_MODULE_5__["ProgramModel"].Deserialize(element));
        });
        return tmp;
    };
    return Helper;
}());



/***/ }),

/***/ "./src/app/Models/BaseLogModel.ts":
/*!****************************************!*\
  !*** ./src/app/Models/BaseLogModel.ts ***!
  \****************************************/
/*! exports provided: BaseLogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLogModel", function() { return BaseLogModel; });
var BaseLogModel = /** @class */ (function () {
    function BaseLogModel() {
    }
    BaseLogModel.Deserialize = function (obj) {
        var trueObj = new BaseLogModel();
        trueObj.Type = obj.Type;
        return trueObj;
    };
    return BaseLogModel;
}());



/***/ }),

/***/ "./src/app/Models/BlockModel.ts":
/*!**************************************!*\
  !*** ./src/app/Models/BlockModel.ts ***!
  \**************************************/
/*! exports provided: BlockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockModel", function() { return BlockModel; });
/* harmony import */ var _Enums_BlockType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Enums/BlockType */ "./src/app/Enums/BlockType.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


var BlockModel = /** @class */ (function () {
    function BlockModel(type) {
        this.Type = Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(type) ? _Enums_BlockType__WEBPACK_IMPORTED_MODULE_0__["BlockType"].OTHER : type;
    }
    BlockModel.prototype.IsValid = function () {
        return true;
    };
    BlockModel.prototype.Clone = function () {
        return BlockModel.Deserialize(this);
    };
    BlockModel.Deserialize = function (obj) {
        var trueObj = new BlockModel();
        trueObj.Type = obj.Type;
        return trueObj;
    };
    return BlockModel;
}());



/***/ }),

/***/ "./src/app/Models/CommandModel.ts":
/*!****************************************!*\
  !*** ./src/app/Models/CommandModel.ts ***!
  \****************************************/
/*! exports provided: CommandModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandModel", function() { return CommandModel; });
var CommandModel = /** @class */ (function () {
    function CommandModel() {
    }
    CommandModel.prototype.Clone = function () {
        return CommandModel.Deserialize(this);
    };
    CommandModel.Deserialize = function (obj) {
        if (obj == null) {
            return null;
        }
        var trueObj = new CommandModel();
        trueObj.DisplayColor = obj.DisplayColor;
        trueObj.Type = obj.Type;
        trueObj.Value = obj.Value;
        trueObj.Variable = obj.Variable;
        return trueObj;
    };
    return CommandModel;
}());



/***/ }),

/***/ "./src/app/Models/ExecutableProgramModel.ts":
/*!**************************************************!*\
  !*** ./src/app/Models/ExecutableProgramModel.ts ***!
  \**************************************************/
/*! exports provided: ExecutableProgramModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutableProgramModel", function() { return ExecutableProgramModel; });
/* harmony import */ var _ProcessCommandsModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProcessCommandsModel */ "./src/app/Models/ProcessCommandsModel.ts");

var ExecutableProgramModel = /** @class */ (function () {
    function ExecutableProgramModel() {
    }
    ExecutableProgramModel.prototype.ProcessCount = function () {
        return this.Processes != null ? this.Processes.length : -1;
    };
    ExecutableProgramModel.prototype.Add = function (commands) {
        if (this.Processes == null) {
            this.Processes = [];
        }
        this.Processes.push(commands);
    };
    ExecutableProgramModel.Deserialize = function (obj) {
        var trueObj = new ExecutableProgramModel();
        trueObj.Name = obj.Name;
        if (obj.Processes) {
            trueObj.Processes = [];
            obj.Processes.forEach(function (element) {
                trueObj.Processes.push(_ProcessCommandsModel__WEBPACK_IMPORTED_MODULE_0__["ProcessCommandsModel"].Deserialize(element));
            });
        }
        return trueObj;
    };
    return ExecutableProgramModel;
}());



/***/ }),

/***/ "./src/app/Models/ExecutionSettingsModel.ts":
/*!**************************************************!*\
  !*** ./src/app/Models/ExecutionSettingsModel.ts ***!
  \**************************************************/
/*! exports provided: ExecutionSettingsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutionSettingsModel", function() { return ExecutionSettingsModel; });
var ExecutionSettingsModel = /** @class */ (function () {
    function ExecutionSettingsModel() {
        this.dispatcher = [];
        this.Variables = [];
        this.Semaphores = [];
        this.DispatcherEnabled = false;
    }
    Object.defineProperty(ExecutionSettingsModel.prototype, "Dispatcher", {
        get: function () {
            return this.DispatcherEnabled ? this.dispatcher : [];
        },
        set: function (value) {
            this.dispatcher = value;
        },
        enumerable: true,
        configurable: true
    });
    return ExecutionSettingsModel;
}());



/***/ }),

/***/ "./src/app/Models/InitialValueModel.ts":
/*!*********************************************!*\
  !*** ./src/app/Models/InitialValueModel.ts ***!
  \*********************************************/
/*! exports provided: InitialValueModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialValueModel", function() { return InitialValueModel; });
var InitialValueModel = /** @class */ (function () {
    function InitialValueModel() {
    }
    return InitialValueModel;
}());



/***/ }),

/***/ "./src/app/Models/LogModel.ts":
/*!************************************!*\
  !*** ./src/app/Models/LogModel.ts ***!
  \************************************/
/*! exports provided: LogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogModel", function() { return LogModel; });
/* harmony import */ var _BaseLogModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseLogModel */ "./src/app/Models/BaseLogModel.ts");
/* harmony import */ var _CommandModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommandModel */ "./src/app/Models/CommandModel.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LogModel = /** @class */ (function (_super) {
    __extends(LogModel, _super);
    function LogModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogModel.prototype.ShouldDisplay = function () {
        return this.Command != null;
    };
    LogModel.Deserialize = function (obj) {
        var trueObj = new LogModel();
        trueObj.Type = obj.Type;
        trueObj.Process = obj.Process;
        trueObj.Command = _CommandModel__WEBPACK_IMPORTED_MODULE_1__["CommandModel"].Deserialize(obj.Command);
        return trueObj;
    };
    return LogModel;
}(_BaseLogModel__WEBPACK_IMPORTED_MODULE_0__["BaseLogModel"]));



/***/ }),

/***/ "./src/app/Models/LoopBlockModel.ts":
/*!******************************************!*\
  !*** ./src/app/Models/LoopBlockModel.ts ***!
  \******************************************/
/*! exports provided: LoopBlockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBlockModel", function() { return LoopBlockModel; });
/* harmony import */ var _BlockModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockModel */ "./src/app/Models/BlockModel.ts");
/* harmony import */ var _Enums_BlockType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enums/BlockType */ "./src/app/Enums/BlockType.ts");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helper */ "./src/app/Helper.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var LoopBlockModel = /** @class */ (function (_super) {
    __extends(LoopBlockModel, _super);
    function LoopBlockModel() {
        var _this = _super.call(this, _Enums_BlockType__WEBPACK_IMPORTED_MODULE_1__["BlockType"].LOOP) || this;
        _this.Iterations = 1;
        return _this;
    }
    LoopBlockModel.prototype.IsValid = function () {
        if (this.Iterations > 0 && this.Children != null && this.Children.length > 0) {
            for (var i = 0; i < this.Children.length; i++) {
                if (!this.Children[i].IsValid()) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    LoopBlockModel.prototype.Clone = function () {
        return LoopBlockModel.Deserialize(this);
    };
    LoopBlockModel.Deserialize = function (obj) {
        var trueObj = new LoopBlockModel();
        trueObj.Type = obj.Type;
        trueObj.Iterations = obj.Iterations;
        if (obj.Children != null) {
            trueObj.Children = [];
            obj.Children.forEach(function (tmp) {
                trueObj.Children.push(_Helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].DeserializeSpecific(tmp));
            });
        }
        return trueObj;
    };
    LoopBlockModel.prototype.Add = function (block, position) {
        if (this.Children == null) {
            this.Children = [];
        }
        this.Children = this.InsertArrayAt(this.Children, position, block);
    };
    LoopBlockModel.prototype.InsertArrayAt = function (array, index, arrayToInsert) {
        Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
        return array;
    };
    return LoopBlockModel;
}(_BlockModel__WEBPACK_IMPORTED_MODULE_0__["BlockModel"]));



/***/ }),

/***/ "./src/app/Models/PrintedLogModel.ts":
/*!*******************************************!*\
  !*** ./src/app/Models/PrintedLogModel.ts ***!
  \*******************************************/
/*! exports provided: PrintedLogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintedLogModel", function() { return PrintedLogModel; });
var PrintedLogModel = /** @class */ (function () {
    function PrintedLogModel() {
    }
    return PrintedLogModel;
}());



/***/ }),

/***/ "./src/app/Models/ProcessBlocksModel.ts":
/*!**********************************************!*\
  !*** ./src/app/Models/ProcessBlocksModel.ts ***!
  \**********************************************/
/*! exports provided: ProcessBlocksModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessBlocksModel", function() { return ProcessBlocksModel; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helper */ "./src/app/Helper.ts");


var ProcessBlocksModel = /** @class */ (function () {
    function ProcessBlocksModel() {
    }
    ProcessBlocksModel.prototype.IsValid = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.Name) && this.Blocks != null && this.Blocks.length > 0) {
            for (var i = 0; i < this.Blocks.length; i++) {
                if (!this.Blocks[i].IsValid()) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    ProcessBlocksModel.prototype.Add = function (command, position) {
        if (this.Blocks == null) {
            this.Blocks = [];
        }
        this.Blocks = this.InsertArrayAt(this.Blocks, position, command);
    };
    ProcessBlocksModel.prototype.AddRange = function (commands) {
        var _this = this;
        commands.forEach(function (command) { return _this.Blocks.push(command); });
    };
    ProcessBlocksModel.prototype.InsertArrayAt = function (array, index, arrayToInsert) {
        Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
        return array;
    };
    ProcessBlocksModel.prototype.Clone = function () {
        return ProcessBlocksModel.Deserialize(JSON.parse(JSON.stringify(this)));
    };
    ProcessBlocksModel.Deserialize = function (obj) {
        var trueObj = new ProcessBlocksModel();
        trueObj.Name = obj.Name;
        if (obj.Blocks != null) {
            trueObj.Blocks = [];
            obj.Blocks.forEach(function (tmp) {
                trueObj.Blocks.push(_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].DeserializeSpecific(tmp));
            });
        }
        return trueObj;
    };
    return ProcessBlocksModel;
}());



/***/ }),

/***/ "./src/app/Models/ProcessCommandsModel.ts":
/*!************************************************!*\
  !*** ./src/app/Models/ProcessCommandsModel.ts ***!
  \************************************************/
/*! exports provided: ProcessCommandsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessCommandsModel", function() { return ProcessCommandsModel; });
/* harmony import */ var _CommandModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommandModel */ "./src/app/Models/CommandModel.ts");

var ProcessCommandsModel = /** @class */ (function () {
    function ProcessCommandsModel() {
    }
    ProcessCommandsModel.prototype.CommandCount = function () {
        return this.Commands != null ? this.Commands.length : -1;
    };
    ProcessCommandsModel.prototype.Add = function (command) {
        if (this.Commands == null) {
            this.Commands = [];
        }
        this.Commands.push(command);
    };
    ProcessCommandsModel.prototype.AddRange = function (commands) {
        var _this = this;
        commands.forEach(function (command) { return _this.Commands.push(command); });
    };
    ProcessCommandsModel.Deserialize = function (obj) {
        var trueObj = new ProcessCommandsModel();
        trueObj.Name = obj.Name;
        if (obj.Commands) {
            trueObj.Commands = [];
            obj.Commands.forEach(function (element) {
                trueObj.Commands.push(_CommandModel__WEBPACK_IMPORTED_MODULE_0__["CommandModel"].Deserialize(element));
            });
        }
        return trueObj;
    };
    return ProcessCommandsModel;
}());



/***/ }),

/***/ "./src/app/Models/ProcessCountModel.ts":
/*!*********************************************!*\
  !*** ./src/app/Models/ProcessCountModel.ts ***!
  \*********************************************/
/*! exports provided: ProcessCountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessCountModel", function() { return ProcessCountModel; });
var ProcessCountModel = /** @class */ (function () {
    function ProcessCountModel() {
    }
    return ProcessCountModel;
}());



/***/ }),

/***/ "./src/app/Models/ProgramModel.ts":
/*!****************************************!*\
  !*** ./src/app/Models/ProgramModel.ts ***!
  \****************************************/
/*! exports provided: ProgramModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramModel", function() { return ProgramModel; });
/* harmony import */ var _ProcessBlocksModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProcessBlocksModel */ "./src/app/Models/ProcessBlocksModel.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


var ProgramModel = /** @class */ (function () {
    function ProgramModel() {
    }
    ProgramModel.prototype.ProcessCount = function () {
        return this.Processes != null ? this.Processes.length : 0;
    };
    ProgramModel.prototype.IsValid = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.Name) && this.ProcessCount() > 0
            && this.ProcessCount() == this.Distinct(this.Select(this.Processes, function (x) { return x.Name; })).length) {
            for (var i = 0; i < this.ProcessCount(); i++) {
                if (!this.Processes[i].IsValid()) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    ProgramModel.prototype.Add = function (commands) {
        if (this.Processes == null) {
            this.Processes = [];
        }
        this.Processes.push(commands);
    };
    ProgramModel.prototype.Clone = function () {
        return ProgramModel.Deserialize(this);
    };
    ProgramModel.Deserialize = function (obj) {
        var trueObj = new ProgramModel();
        trueObj.Name = obj.Name;
        if (obj.Processes != null) {
            trueObj.Processes = [];
            obj.Processes.forEach(function (tmp) {
                trueObj.Processes.push(_ProcessBlocksModel__WEBPACK_IMPORTED_MODULE_0__["ProcessBlocksModel"].Deserialize(tmp));
            });
        }
        return trueObj;
    };
    ProgramModel.prototype.Select = function (arr, func) {
        var retArr = [];
        for (var obj in arr) {
            retArr.push(func(obj));
        }
        return retArr;
    };
    ProgramModel.prototype.Distinct = function (arr) {
        var retArr = [];
        for (var obj in arr) {
            if (retArr.indexOf(obj) == -1) {
                retArr.push(obj);
            }
        }
        return retArr;
    };
    return ProgramModel;
}());



/***/ }),

/***/ "./src/app/Models/SemaphorBlockModel.ts":
/*!**********************************************!*\
  !*** ./src/app/Models/SemaphorBlockModel.ts ***!
  \**********************************************/
/*! exports provided: SemaphorBlockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemaphorBlockModel", function() { return SemaphorBlockModel; });
/* harmony import */ var _BlockModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockModel */ "./src/app/Models/BlockModel.ts");
/* harmony import */ var _Enums_SemaphorOperationType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enums/SemaphorOperationType */ "./src/app/Enums/SemaphorOperationType.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Enums_BlockType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Enums/BlockType */ "./src/app/Enums/BlockType.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SemaphorBlockModel = /** @class */ (function (_super) {
    __extends(SemaphorBlockModel, _super);
    function SemaphorBlockModel() {
        var _this = _super.call(this, _Enums_BlockType__WEBPACK_IMPORTED_MODULE_3__["BlockType"].SEMAPHOR) || this;
        _this.SemaphorOperation = _Enums_SemaphorOperationType__WEBPACK_IMPORTED_MODULE_1__["SemaphorOperationType"].ENTER;
        return _this;
    }
    SemaphorBlockModel.prototype.IsValid = function () {
        return !Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.SemaphorName);
    };
    SemaphorBlockModel.prototype.Clone = function () {
        return SemaphorBlockModel.Deserialize(this);
    };
    SemaphorBlockModel.Deserialize = function (obj) {
        var trueObj = new SemaphorBlockModel();
        trueObj.Type = obj.Type;
        trueObj.SemaphorName = obj.SemaphorName;
        trueObj.SemaphorOperation = obj.SemaphorOperation;
        return trueObj;
    };
    return SemaphorBlockModel;
}(_BlockModel__WEBPACK_IMPORTED_MODULE_0__["BlockModel"]));



/***/ }),

/***/ "./src/app/Models/SemaphoreLogModel.ts":
/*!*********************************************!*\
  !*** ./src/app/Models/SemaphoreLogModel.ts ***!
  \*********************************************/
/*! exports provided: SemaphoreLogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemaphoreLogModel", function() { return SemaphoreLogModel; });
/* harmony import */ var _LogModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogModel */ "./src/app/Models/LogModel.ts");
/* harmony import */ var _CommandModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommandModel */ "./src/app/Models/CommandModel.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SemaphoreLogModel = /** @class */ (function (_super) {
    __extends(SemaphoreLogModel, _super);
    function SemaphoreLogModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SemaphoreLogModel.Deserialize = function (obj) {
        var trueObj = new SemaphoreLogModel();
        trueObj.Type = obj.Type;
        trueObj.Process = obj.Process;
        trueObj.Command = _CommandModel__WEBPACK_IMPORTED_MODULE_1__["CommandModel"].Deserialize(obj.Command);
        trueObj.Semaphore = obj.Semaphore;
        return trueObj;
    };
    return SemaphoreLogModel;
}(_LogModel__WEBPACK_IMPORTED_MODULE_0__["LogModel"]));



/***/ }),

/***/ "./src/app/Models/VariableBlockModel.ts":
/*!**********************************************!*\
  !*** ./src/app/Models/VariableBlockModel.ts ***!
  \**********************************************/
/*! exports provided: VariableBlockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableBlockModel", function() { return VariableBlockModel; });
/* harmony import */ var _Enums_BlockType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Enums/BlockType */ "./src/app/Enums/BlockType.ts");
/* harmony import */ var _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enums/VariableOperationType */ "./src/app/Enums/VariableOperationType.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BlockModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlockModel */ "./src/app/Models/BlockModel.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var VariableBlockModel = /** @class */ (function (_super) {
    __extends(VariableBlockModel, _super);
    function VariableBlockModel() {
        var _this = _super.call(this, _Enums_BlockType__WEBPACK_IMPORTED_MODULE_0__["BlockType"].SHARED_VARIABLE) || this;
        _this.VariableOperationType = _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_1__["VariableOperationType"].GET;
        return _this;
    }
    VariableBlockModel.prototype.IsValid = function () {
        return !Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.VariableName) && (this.VariableOperationType == _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_1__["VariableOperationType"].GET || !Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.Value));
    };
    VariableBlockModel.prototype.Clone = function () {
        return VariableBlockModel.Deserialize(this);
    };
    VariableBlockModel.Deserialize = function (obj) {
        var trueObj = new VariableBlockModel();
        trueObj.Type = obj.Type;
        trueObj.Value = obj.Value;
        trueObj.VariableName = obj.VariableName;
        trueObj.VariableOperationType = obj.VariableOperationType;
        return trueObj;
    };
    return VariableBlockModel;
}(_BlockModel__WEBPACK_IMPORTED_MODULE_3__["BlockModel"]));



/***/ }),

/***/ "./src/app/Models/VariableLogModel.ts":
/*!********************************************!*\
  !*** ./src/app/Models/VariableLogModel.ts ***!
  \********************************************/
/*! exports provided: VariableLogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableLogModel", function() { return VariableLogModel; });
/* harmony import */ var _LogModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogModel */ "./src/app/Models/LogModel.ts");
/* harmony import */ var _CommandModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommandModel */ "./src/app/Models/CommandModel.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var VariableLogModel = /** @class */ (function (_super) {
    __extends(VariableLogModel, _super);
    function VariableLogModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VariableLogModel.Deserialize = function (obj) {
        var trueObj = new VariableLogModel();
        trueObj.Type = obj.Type;
        trueObj.Process = obj.Process;
        trueObj.Command = _CommandModel__WEBPACK_IMPORTED_MODULE_1__["CommandModel"].Deserialize(obj.Command);
        trueObj.Value = obj.Value;
        trueObj.Variable = obj.Variable;
        return trueObj;
    };
    return VariableLogModel;
}(_LogModel__WEBPACK_IMPORTED_MODULE_0__["LogModel"]));



/***/ }),

/***/ "./src/app/api-request.service.ts":
/*!****************************************!*\
  !*** ./src/app/api-request.service.ts ***!
  \****************************************/
/*! exports provided: ApiRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRequestService", function() { return ApiRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiRequestService = /** @class */ (function () {
    function ApiRequestService(http, spinner) {
        this.http = http;
        this.spinner = spinner;
    }
    Object.defineProperty(ApiRequestService.prototype, "URL", {
        get: function () {
            return window.location.protocol + "//" + window.location.host;
        },
        enumerable: true,
        configurable: true
    });
    ApiRequestService.prototype.simulate = function (execProgram) {
        return this.http.post(this.URL + "/Execute", execProgram, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    ApiRequestService.prototype.handleError = function (error) {
        alert(error.message);
        this.spinner.hide();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    ApiRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], ApiRequestService);
    return ApiRequestService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ThreadingSimulator';
        localStorage.clear();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refresh-button/refresh-button.component */ "./src/app/refresh-button/refresh-button.component.ts");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block/block.component */ "./src/app/block/block.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-dnd */ "./node_modules/@swimlane/ngx-dnd/fesm5/swimlane-ngx-dnd.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _preview_dialog_preview_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview-dialog/preview-dialog.component */ "./src/app/preview-dialog/preview-dialog.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _simulation_simulation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./simulation/simulation.component */ "./src/app/simulation/simulation.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var ngx_smooth_dnd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-smooth-dnd */ "./node_modules/ngx-smooth-dnd/fesm5/ngx-smooth-dnd.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./default/default.component */ "./src/app/default/default.component.ts");
/* harmony import */ var _execution_settings_execution_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./execution-settings/execution-settings.component */ "./src/app/execution-settings/execution-settings.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_localstorage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-localstorage */ "./node_modules/ngx-localstorage/fesm5/ngx-localstorage.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    { path: "", component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], children: [
            { path: "", component: _default_default_component__WEBPACK_IMPORTED_MODULE_18__["DefaultComponent"] },
            { path: "settings", component: _execution_settings_execution_settings_component__WEBPACK_IMPORTED_MODULE_19__["ExecutionSettingsComponent"] },
            { path: "simulation", component: _simulation_simulation_component__WEBPACK_IMPORTED_MODULE_12__["SimulationComponent"] }
        ] }
];
var config = {
    onSameUrlNavigation: "reload"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _preview_dialog_preview_dialog_component__WEBPACK_IMPORTED_MODULE_9__["PreviewDialogComponent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_4__["RefreshButtonComponent"],
                _block_block_component__WEBPACK_IMPORTED_MODULE_5__["BlockComponent"],
                _preview_dialog_preview_dialog_component__WEBPACK_IMPORTED_MODULE_9__["PreviewDialogComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_10__["PreviewComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
                _simulation_simulation_component__WEBPACK_IMPORTED_MODULE_12__["SimulationComponent"],
                _default_default_component__WEBPACK_IMPORTED_MODULE_18__["DefaultComponent"],
                _execution_settings_execution_settings_component__WEBPACK_IMPORTED_MODULE_19__["ExecutionSettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_7__["NgxDnDModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                ngx_smooth_dnd__WEBPACK_IMPORTED_MODULE_15__["NgxSmoothDnDModule"],
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_16__["ContextMenuModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forRoot(routes, config),
                ngx_localstorage__WEBPACK_IMPORTED_MODULE_21__["NgxLocalStorageModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/block/block.component.css":
/*!*******************************************!*\
  !*** ./src/app/block/block.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block\n{\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    padding: 10px;\n    padding-top: 20px;\n}\n\n.first\n{\n    border-top-left-radius: 10px;\n}\n\n.last\n{\n    border-bottom-left-radius: 10px;\n}\n\n#loopContainer\n{\n    background-color: white;\n    margin-left: 10px;\n    border-radius: 10px;\n    padding: 2px;\n    position: relative;\n    left: 15px; \n}\n\n.disabled\n{\n    opacity: 0.2;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n\n.loop\n{\n    padding-bottom: 20px;\n}\n\n.varSmaller\n{\n    width: 270px;\n}\n\n.varBigger\n{\n    width: 350px;\n}\n\n.loop, .loopAfter\n{\n    background-color: #8E44AD;\n}\n\n.semaphore, .semaphore::after\n{\n    background-color: #C0392B; \n}\n\n.variable, .variable::after\n{\n    background-color: #2980B9\n}\n\n.other, .other::after\n{\n    background-color: #27AE60; \n}\n\n.block:not(.loop)::after\n{\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    content: '__';\n    float: left;\n    position: relative;\n    top: 25px;\n    color: rgba(0, 0, 0, 0);\n}\n\n.loopAfter\n{\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    content: '__';\n    color: rgba(0, 0, 0, 0);\n    left: 11px;\n    position: absolute;\n    margin-top: -5px;\n}\n\n.variable::after \n{\n    top: 27px;\n}\n\n.semaphore::after \n{\n    top: 26px;\n}\n\nblock\n{\n    display: table;\n    widows: 0;\n}\n\n@-moz-document url-prefix() {\n    .semaphore::after\n    {\n        margin-top:3px;\n        margin-left:-20px;\n    }\n\n    .semaphore.edit::after\n    {\n        margin-top:3px !important;\n    }\n\n    .variable::after\n    {\n        margin-top:3px;\n    }\n\n    .varBigger::after\n    {\n        margin-top:3px;\n    }\n\n    .varBigger.edit\n    {\n        padding-left: 30px !important;\n    }\n    \n    .semaphore\n    {\n        padding-left: 30px !important;\n    }\n\n    .varBigger.edit::after\n    {\n        margin-top: 3px !important;\n        margin-left: -20px !important;\n    }\n}"

/***/ }),

/***/ "./src/app/block/block.component.html":
/*!********************************************!*\
  !*** ./src/app/block/block.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"Block.Type==0\" [ngClass]=\"{'first': Index==0, 'last': Index==Length-1, 'edit': EditMode}\" class=\"block semaphore\" style=\"width: 260px\">\n  Semaphore:\n  <input [ngClass]=\"{'disabled':!EditMode}\"  type=\"text\" [(ngModel)]=\"Block.SemaphorName\" style=\"width:50px; margin-left: 10px\">\n\n  <select [ngClass]=\"{'disabled':!EditMode}\" [(ngModel)]=\"Block.SemaphorOperation\" style=\"width:60px; margin-left: 10px\">\n    <option *ngFor=\"let op of SemaphoreOperations\" [ngValue]=\"op.Val\">{{op.Name}}</option>\n  </select>\n\n  <refresh-button (click)=\"deleteThis()\" style=\"float: right; position: relative; top: -3px\" *ngIf=\"EditMode\" [img]=\"'delete'\"></refresh-button>\n</div>\n<div *ngIf=\"Block.Type==1\" [ngClass]=\"{'first': Index==0, 'last': Index==Length-1, 'varSmaller': Block.VariableOperationType==0, 'varBigger': Block.VariableOperationType!=0,'edit': EditMode}\" class=\"block variable\">\n  Variable: \n  <input [ngClass]=\"{'disabled':!EditMode}\" type=\"text\" [(ngModel)]=\"Block.VariableName\" style=\"width:50px; margin-left: 10px\">\n  \n  <select [ngClass]=\"{'disabled':!EditMode}\" [(ngModel)]=\"Block.VariableOperationType\" style=\"width:85px; margin-left: 10px\">\n    <option *ngFor=\"let op of variableOperations\" [ngValue]=\"op.Val\">{{op.Name}}</option>\n  </select>\n\n  <span *ngIf=\"Block.VariableOperationType==1\" style=\"margin-left:5px;\">by</span>\n  <span *ngIf=\"Block.VariableOperationType==2||Block.VariableOperationType==3\" style=\"margin-left:5px;\">to</span>\n\n  <input *ngIf=\"Block.VariableOperationType!=0\" [ngClass]=\"{'disabled':!EditMode}\" type=\"number\" [(ngModel)]=\"Block.Value\" style=\"margin-left:10px; width: 50px\">\n  \n  <refresh-button (click)=\"deleteThis()\" style=\"float: right; position: relative; top: -3px\" *ngIf=\"EditMode\" [img]=\"'delete'\"></refresh-button>\n</div>\n<div *ngIf=\"Block.Type==2\" [ngClass]=\"{'first': Index==0, 'last': Index==Length-1,'edit': EditMode}\" class=\"block other\" style=\"width: 180px;\">\n  Block of commands\n  <refresh-button (click)=\"deleteThis()\" style=\"float: right; position: relative; top: -3px\" *ngIf=\"EditMode\" [img]=\"'delete'\"></refresh-button>\n</div>\n<div *ngIf=\"Block.Type==3\" [ngClass]=\"{'first': Index==0, 'last': Index==Length-1,'edit': EditMode}\" class=\"block loop\" style=\"min-width: 210px; display: flow-root\">\n  <span style=\"margin-left: 20px\">Iterations:</span>\n  <input [ngClass]=\"{'disabled':!EditMode}\" type=\"number\" min=\"1\" [(ngModel)]=\"Block.Iterations\" style=\"margin-left:10px; width: 50px\">\n\n  <refresh-button (click)=\"deleteThis()\" style=\"float: right; position: relative; top: -3px\" *ngIf=\"EditMode\" [img]=\"'delete'\"></refresh-button>\n  <br><br>\n  <div id=\"loopContainer\" *ngIf=\"!EditMode\">\n    <block *ngFor=\"let block of Block.Children; let ind = index\" [array]=\"Block.Children\" (arrayChange)=\"Block.Children=$event\" [edit]=\"EditMode\" [val]=\"block\" [index]=\"ind\" [length]=\"Block.Children.length\"></block>\n  </div>\n  <div (drop)=\"dropped($event)\" *ngIf=\"EditMode\" id=\"loopContainer\" ngxDroppable class=\"dropTarget\" style=\"min-height: 30px\" [model]=\"Block.Children\" dropZone=\"blocks\">\n    <block ngxDraggable [model]=\"block\" *ngFor=\"let block of Block.Children; let ind = index\" [array]=\"Block.Children\" (arrayChange)=\"Block.Children=$event\" [edit]=\"EditMode\" [val]=\"block\" [index]=\"ind\" [length]=\"Block.Children.length\"></block>\n  </div>\n</div>\n<div *ngIf=\"Block.Type==3\" class=\"loopAfter\"></div>"

/***/ }),

/***/ "./src/app/block/block.component.ts":
/*!******************************************!*\
  !*** ./src/app/block/block.component.ts ***!
  \******************************************/
/*! exports provided: BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Enums_SemaphorOperationType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enums/SemaphorOperationType */ "./src/app/Enums/SemaphorOperationType.ts");
/* harmony import */ var _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Enums/VariableOperationType */ "./src/app/Enums/VariableOperationType.ts");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Helper */ "./src/app/Helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlockComponent = /** @class */ (function () {
    function BlockComponent() {
        this.arrayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.SemaphoreOperations = [
            {
                Val: _Enums_SemaphorOperationType__WEBPACK_IMPORTED_MODULE_1__["SemaphorOperationType"].ENTER,
                Name: "Enter"
            },
            {
                Val: _Enums_SemaphorOperationType__WEBPACK_IMPORTED_MODULE_1__["SemaphorOperationType"].EXIT,
                Name: "Exit"
            }
        ];
        this.variableOperations = [
            {
                Val: _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_2__["VariableOperationType"].GET,
                Name: "Get"
            },
            {
                Val: _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_2__["VariableOperationType"].SET,
                Name: "Set"
            },
            {
                Val: _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_2__["VariableOperationType"].INCREASE,
                Name: "Increase"
            },
            {
                Val: _Enums_VariableOperationType__WEBPACK_IMPORTED_MODULE_2__["VariableOperationType"].DECREASE,
                Name: "Decrease"
            }
        ];
    }
    BlockComponent.prototype.ngOnInit = function () {
    };
    BlockComponent.prototype.dropped = function (event) {
        if (!this.Block.Children) {
            this.Block.Children = [_Helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].DeserializeSpecific(event.value)];
        }
        else {
            var ind = this.Block.Children.indexOf(event.value);
            this.Block.Children[ind] = _Helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].DeserializeSpecific(event.value);
        }
    };
    BlockComponent.prototype.deleteThis = function () {
        var arr = [];
        for (var i = 0; i < this.Array.length; i++) {
            if (this.Array[i] != this.Block) {
                arr.push(this.Array[i]);
            }
        }
        this.arrayChange.emit(arr);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("val"),
        __metadata("design:type", Object)
    ], BlockComponent.prototype, "Block", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("index"),
        __metadata("design:type", Number)
    ], BlockComponent.prototype, "Index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("length"),
        __metadata("design:type", Number)
    ], BlockComponent.prototype, "Length", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("array"),
        __metadata("design:type", Array)
    ], BlockComponent.prototype, "Array", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("edit"),
        __metadata("design:type", Boolean)
    ], BlockComponent.prototype, "EditMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("arrayChange"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BlockComponent.prototype, "arrayChange", void 0);
    BlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'block',
            template: __webpack_require__(/*! ./block.component.html */ "./src/app/block/block.component.html"),
            styles: [__webpack_require__(/*! ./block.component.css */ "./src/app/block/block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "./src/app/default/default.component.css":
/*!***********************************************!*\
  !*** ./src/app/default/default.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active\n{\n    font-weight: bold;\n}\n\n#grouplist\n{\n    height: 80vh;\n    width: 15%;\n    border: 1px solid gray;\n    padding: 10px 5px;\n    list-style-type: none;\n    overflow-y: auto;\n    float:left;\n}\n\n#content\n{\n    width:82%; \n    float: left;\n    margin-top:5px;\n    padding:10px;\n    height: 77vh;\n    overflow: auto;\n}\n\n#contanerDragFrom\n{\n    width:80%; \n    float: left;\n}\n\n#grouplist li\n{\n    margin: 10px 0;\n    cursor: pointer;\n}\n\n#grouplist li span\n{\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 80%;\n    display: inline-block;\n}\n\n.disabled\n{\n    opacity: 0.2;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n\n.inputText\n{\n    width:130px;\n}\n\n.block0\n{\n    background-color: #C0392B; \n}\n\n.block1\n{\n    background-color: #2980B9\n}\n\n.block2\n{\n    background-color: #27AE60; \n}\n\n.block3\n{\n    background-color: #8E44AD;\n}\n\nblock\n{\n    display: table;\n    widows: 0;\n}\n\n.blockTypeParent block\n{\n    visibility: collapse;\n}\n"

/***/ }),

/***/ "./src/app/default/default.component.html":
/*!************************************************!*\
  !*** ./src/app/default/default.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>Predefined examples:</span> \n<refresh-button (click)=\"addNew()\" style=\"position:relative; top:7px; margin-left:20px\" [isEnabled]=\"isNotEditMode.bind(this)\" [img]=\"'add_circle'\"></refresh-button>\n<refresh-button (click)=\"edit()\" style=\"position:relative; top:7px; margin-left:10px\" [isEnabled]=\"isEditEnabled.bind(this)\" [img]=\"'border_color'\"></refresh-button>\n\n<refresh-button (click)=\"cancel()\" style=\"position:relative; top:7px; float: right; margin-left:10px\" *ngIf=\"EditMode\" [img]=\"'cancel'\"></refresh-button>\n<refresh-button (click)=\"save()\" style=\"position:relative; top:7px; float: right; margin-left:10px\" [isEnabled]=\"isValid.bind(this)\" *ngIf=\"EditMode\" [img]=\"'save'\"></refresh-button>\n<refresh-button (click)=\"preview(content)\" [isEnabled]=\"isValid.bind(this)\"s style=\"position:relative; top:7px; float: right; margin-left:10px\" *ngIf=\"SelectedProgram\" [text]=\"'Preview processes'\" [img]=\"'remove_red_eye'\"></refresh-button>\n<refresh-button (click)=\"run()\" style=\"position:relative; top:7px; float: right\" *ngIf=\"SelectedProgram && !EditMode\" [text]=\"'Run'\" [img]=\"'play_circle_filled'\"></refresh-button>\n<br style=\"clear: both\">\n<ul id=\"grouplist\" style=\"margin-top:15px\" [ngClass]=\"{'disabled': EditMode}\">\n  <li [ngClass]=\"{'active': SelectedProgram == program}\" (click)=\"listClick($event, program)\" *ngFor=\"let program of Programs\">\n    <span>{{program.Name}}</span> <refresh-button style=\"float:right; margin-top:-5px;\" (click)=\"delete(program)\" [img]=\"'delete'\"></refresh-button>\n  </li>\n</ul>\n\n<div id=\"content\" #toScroll>\n  <div *ngIf=\"SelectedProgram\" style=\"padding-top:20px\">\n    <span style=\"position: relative; top:-20px\">\n      <span>Name: </span><span *ngIf=\"!EditMode\" class=\"inputText\">{{SelectedProgram.Name}}</span><input class=\"inputText\" style=\"z-index: 1000\" *ngIf=\"EditMode\" [(ngModel)]=\"SelectedProgram.Name\" type=\"text\">\n    </span>\n    <br><br>\n    <div style=\"margin-top:20px\">\n      <div *ngFor=\"let process of SelectedProgram.Processes\" [ngStyle]=\"{'top': !EditMode ? '5px' : '-60px'}\" style=\"position: relative; display: table-cell; min-width:300px; height: 60vh;\">\n        <span>Process name: </span><span *ngIf=\"!EditMode\" class=\"inputText\">{{process.Name}}</span><input class=\"inputText\" *ngIf=\"EditMode\" [(ngModel)]=\"process.Name\" type=\"text\">\n        <refresh-button (click)=\"deleteProcess(process)\" style=\"float: right; position:relative; top:-2px\" *ngIf=\"EditMode\" [img]=\"'delete'\"></refresh-button>\n        <br><br>\n        <div (drop)=\"dropped($event, process)\" *ngIf=\"EditMode\" ngxDroppable class=\"dropTarget\" [model]=\"process.Blocks\" dropZone=\"blocks\" style=\"min-height: 300px\">\n            <block ngxDraggable [model]=\"block\" *ngFor=\"let block of process.Blocks; let ind = index\" [array]=\"process.Blocks\" (arrayChange)=\"process.Blocks=$event\" [edit]=\"EditMode\" [val]=\"block\" [index]=\"ind\" [length]=\"process.Blocks.length\"></block>\n          </div>\n          <div *ngIf=\"!EditMode\">\n            <block *ngFor=\"let block of process.Blocks; let ind = index\" [array]=\"process.Blocks\" (arrayChange)=\"process.Blocks=$event\" [edit]=\"EditMode\" [val]=\"block\" [index]=\"ind\" [length]=\"process.Blocks.length\"></block>\n          </div>\n      </div>\n      <refresh-button (click)=\"addNewProcess()\" style=\"display: table-cell; width: 10vw; height: 10vw; position: relative; top:150px\" [size]=\"'80'\" *ngIf=\"EditMode\" [img]=\"'add_circle'\"></refresh-button>\n    </div>\n  </div>\n</div>\n<div id=\"contanerDragFrom\" *ngIf=\"EditMode\" [model]=\"BlockInstances\" ngxDroppable [copy]=\"true\" style=\"margin-top:10px\"> \n  <div *ngFor=\"let block of BlockInstances\" class=\"blockTypeParent\" style=\"display: inline-block; width: 15%; margin:0 4%\" ngxDraggable [model]=\"block\" [dropZones]=\"['blocks']\">\n    <block [val]=\"block\" index=\"0\" length=\"1\"></block>\n    <div [class]=\"'block'+block.Type+' blockType'\" style=\"padding: 10px 15px; border-radius: 10px; width:100%; float: left; text-align: center; margin: 0 2.5%\">\n        <span *ngIf=\"block.Type==0\">Semaphore</span>\n        <span *ngIf=\"block.Type==1\">Shared variable</span>\n        <span *ngIf=\"block.Type==2\">Block of commands</span>\n        <span *ngIf=\"block.Type==3\">Loop</span>\n    </div>\n  </div>\n</div>\n\n<div style=\"clear:both; position: relative; top:-20px\">\n  <refresh-button (click)=\"Import()\" text=\"Import\" style=\"position:relative; top:7px;\" [isEnabled]=\"isNotEditMode.bind(this)\" [img]=\"'cloud_upload'\"></refresh-button>\n  <refresh-button (click)=\"Export()\" text=\"Export examples\" style=\"position:relative; top:7px; margin-left:20px\" [isEnabled]=\"isNotEditMode.bind(this)\" [img]=\"'cloud_download'\"></refresh-button>\n</div>\n\n<br style=\"clear: both;\">\n<span style=\"position: relative; top:-20px\" *ngIf=\"EditMode\">Current mode: Edit</span>\n<span style=\"position: relative; top:-20px\" *ngIf=\"!EditMode\">Current mode: Normal</span>\n\n<input #fileDialog type=\"file\" accept=\".json\" (change)=\"readFromFile()\" hidden/>\n"

/***/ }),

/***/ "./src/app/default/default.component.ts":
/*!**********************************************!*\
  !*** ./src/app/default/default.component.ts ***!
  \**********************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_ProgramModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/ProgramModel */ "./src/app/Models/ProgramModel.ts");
/* harmony import */ var _Models_BlockModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/BlockModel */ "./src/app/Models/BlockModel.ts");
/* harmony import */ var _Models_SemaphorBlockModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/SemaphorBlockModel */ "./src/app/Models/SemaphorBlockModel.ts");
/* harmony import */ var _Models_VariableBlockModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/VariableBlockModel */ "./src/app/Models/VariableBlockModel.ts");
/* harmony import */ var _Models_LoopBlockModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/LoopBlockModel */ "./src/app/Models/LoopBlockModel.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Models_ProcessBlocksModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Models/ProcessBlocksModel */ "./src/app/Models/ProcessBlocksModel.ts");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Helper */ "./src/app/Helper.ts");
/* harmony import */ var _preview_dialog_preview_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../preview-dialog/preview-dialog.component */ "./src/app/preview-dialog/preview-dialog.component.ts");
/* harmony import */ var dom_autoscroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dom-autoscroller */ "./node_modules/dom-autoscroller/dist/bundle.js");
/* harmony import */ var dom_autoscroller__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dom_autoscroller__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_localstorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-localstorage */ "./node_modules/ngx-localstorage/fesm5/ngx-localstorage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DefaultComponent = /** @class */ (function () {
    function DefaultComponent(dialog, localStorage, router) {
        this.dialog = dialog;
        this.localStorage = localStorage;
        this.router = router;
        this.Programs = [];
        this.EditMode = false;
        this.AddMode = false;
        this.BlockInstances = [
            new _Models_SemaphorBlockModel__WEBPACK_IMPORTED_MODULE_3__["SemaphorBlockModel"](),
            new _Models_VariableBlockModel__WEBPACK_IMPORTED_MODULE_4__["VariableBlockModel"](),
            new _Models_BlockModel__WEBPACK_IMPORTED_MODULE_2__["BlockModel"](),
            new _Models_LoopBlockModel__WEBPACK_IMPORTED_MODULE_5__["LoopBlockModel"]()
        ];
        var json = this.localStorage.get("PREVIOUS_PROGRAMS");
        if (json) {
            this.Programs = _Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].DeserializePrograms(JSON.parse(json));
        }
    }
    DefaultComponent.prototype.ngAfterViewInit = function () {
        dom_autoscroller__WEBPACK_IMPORTED_MODULE_10__([
            this.toScroll.nativeElement
        ], {
            margin: 50,
            maxSpeed: 20,
            autoScroll: function () {
                return this.down;
            }
        });
    };
    DefaultComponent.prototype.listClick = function (event, newValue) {
        this.SelectedProgram = newValue;
    };
    DefaultComponent.prototype.isNotEditMode = function () {
        return !this.EditMode;
    };
    DefaultComponent.prototype.isEditEnabled = function () {
        return !this.EditMode && this.SelectedProgram != null;
    };
    DefaultComponent.prototype.isEditMode = function () {
        return this.EditMode;
    };
    DefaultComponent.prototype.dropped = function (event, process) {
        if (!process.Blocks) {
            process.Blocks = [_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].DeserializeSpecific(event.value)];
        }
        else {
            var ind = process.Blocks.indexOf(event.value);
            process.Blocks[ind] = _Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].DeserializeSpecific(event.value);
        }
    };
    DefaultComponent.prototype.delete = function (program) {
        this.removeAt(this.Programs, this.Programs.indexOf(program));
    };
    DefaultComponent.prototype.deleteProcess = function (process) {
        this.removeAt(this.SelectedProgram.Processes, this.SelectedProgram.Processes.indexOf(process));
    };
    DefaultComponent.prototype.removeAt = function (array, index) {
        array.splice(index, 1);
    };
    DefaultComponent.prototype.edit = function () {
        this.EditMode = true;
        this.backup = this.SelectedProgram;
        this.SelectedProgram = this.backup.Clone();
    };
    DefaultComponent.prototype.addNew = function () {
        this.EditMode = true;
        this.AddMode = true;
        this.SelectedProgram = new _Models_ProgramModel__WEBPACK_IMPORTED_MODULE_1__["ProgramModel"]();
    };
    DefaultComponent.prototype.cancel = function () {
        if (this.AddMode) {
            this.SelectedProgram = null;
        }
        else {
            this.SelectedProgram = this.backup;
        }
        this.EditMode = false;
        this.AddMode = false;
    };
    DefaultComponent.prototype.save = function () {
        if (this.AddMode) {
            this.Programs.push(this.SelectedProgram);
        }
        else {
            var ind = this.Programs.indexOf(this.backup);
            this.Programs[ind] = this.SelectedProgram;
        }
        this.EditMode = false;
        this.AddMode = false;
    };
    DefaultComponent.prototype.isValid = function () {
        return this.SelectedProgram.IsValid();
    };
    DefaultComponent.prototype.addNewProcess = function () {
        if (this.SelectedProgram.Processes == null) {
            this.SelectedProgram.Processes = [];
        }
        this.SelectedProgram.Processes.push(new _Models_ProcessBlocksModel__WEBPACK_IMPORTED_MODULE_7__["ProcessBlocksModel"]());
    };
    DefaultComponent.prototype.preview = function () {
        var executableProgram = _Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].Convert(this.SelectedProgram);
        this.dialog.open(_preview_dialog_preview_dialog_component__WEBPACK_IMPORTED_MODULE_9__["PreviewDialogComponent"], {
            width: (Math.min(executableProgram.ProcessCount() * 250, 1000) + 50) + 'px',
            data: executableProgram
        });
    };
    DefaultComponent.prototype.run = function () {
        this.localStorage.set("SETTINGS", JSON.stringify(this.SelectedProgram));
        this.localStorage.set("PREVIOUS_PROGRAMS", JSON.stringify(this.Programs));
        this.router.navigate(['/settings']);
    };
    DefaultComponent.prototype.Import = function () {
        this.File.nativeElement.click();
    };
    DefaultComponent.prototype.readFromFile = function () {
        var _this = this;
        if (this.File.nativeElement.files && this.File.nativeElement.files[0]) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                _this.File.nativeElement.value = "";
                var text = reader_1.result.toString();
                _this.Programs = _Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].DeserializePrograms(JSON.parse(text));
                _this.SelectedProgram = null;
            };
            reader_1.readAsText(this.File.nativeElement.files[0]);
        }
    };
    DefaultComponent.prototype.download = function (filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    DefaultComponent.prototype.Export = function () {
        var current = new Date(Date.now());
        var date = current.getFullYear() + "-" + current.getDate() + "-" + current.getMonth() + "-" + current.getHours() + "-" + current.getMonth() + "-" + current.getSeconds();
        var name = "programs" + date + ".json";
        this.download(name, JSON.stringify(this.Programs));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("toScroll"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DefaultComponent.prototype, "toScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("fileDialog"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DefaultComponent.prototype, "File", void 0);
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.css */ "./src/app/default/default.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], ngx_localstorage__WEBPACK_IMPORTED_MODULE_12__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/execution-settings/execution-settings.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/execution-settings/execution-settings.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/execution-settings/execution-settings.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/execution-settings/execution-settings.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\n  <mat-expansion-panel-header (click)=\"toggle()\">\n    <mat-panel-title>\n      <mat-icon style=\"position: relative; top:-3px; margin-right: 10px;\">{{Icon  ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</mat-icon>\n      Preview\n    </mat-panel-title>\n  </mat-expansion-panel-header>\n  <div style=\"display: flex;justify-content: center;align-items: center;\">\n    <div style=\"height:200px; margin:auto; display: inline-block;\">\n      <preview [processes]=\"ExecutableProgram.Processes\"></preview>\n    </div>\n  </div>\n</mat-expansion-panel>\n\n<settings #settings [program]=\"Program\" [settings]=\"Settings\"></settings>\n\n<br style=\"clear: both\">\n<refresh-button (click)=\"run()\" style=\"position:relative; top:50px; width: 100px; margin-left: calc(50% - 75px)\" [text]=\"'Simulate'\" [img]=\"'play_circle_filled'\"></refresh-button>\n\n<ngx-spinner\nbdColor = \"rgba(51, 51, 51, 0.8)\"\nsize = \"large\"\ncolor = \"#fff\"\ntype = \"timer\"\n></ngx-spinner>"

/***/ }),

/***/ "./src/app/execution-settings/execution-settings.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/execution-settings/execution-settings.component.ts ***!
  \********************************************************************/
/*! exports provided: ExecutionSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutionSettingsComponent", function() { return ExecutionSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_ExecutionSettingsModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/ExecutionSettingsModel */ "./src/app/Models/ExecutionSettingsModel.ts");
/* harmony import */ var _Models_ExecutableProgramModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/ExecutableProgramModel */ "./src/app/Models/ExecutableProgramModel.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _Models_ProgramModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/ProgramModel */ "./src/app/Models/ProgramModel.ts");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Helper */ "./src/app/Helper.ts");
/* harmony import */ var _Models_ProcessCommandsModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Models/ProcessCommandsModel */ "./src/app/Models/ProcessCommandsModel.ts");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api-request.service */ "./src/app/api-request.service.ts");
/* harmony import */ var ngx_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-localstorage */ "./node_modules/ngx-localstorage/fesm5/ngx-localstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ExecutionSettingsComponent = /** @class */ (function () {
    function ExecutionSettingsComponent(apiService, localStorage, router, spinner) {
        this.apiService = apiService;
        this.localStorage = localStorage;
        this.router = router;
        this.spinner = spinner;
        this.Icon = true;
        this.Settings = new _Models_ExecutionSettingsModel__WEBPACK_IMPORTED_MODULE_1__["ExecutionSettingsModel"]();
        var data = localStorage.get("SETTINGS");
        if (data) {
            this.Program = _Models_ProgramModel__WEBPACK_IMPORTED_MODULE_4__["ProgramModel"].Deserialize(JSON.parse(data));
            this.ExecutableProgram = _Helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].Convert(this.Program);
            data = localStorage.get("SETTINGS_DATA");
            localStorage.remove("SETTINGS_DATA");
            if (data) {
                this.Settings = JSON.parse(data);
                ;
            }
        }
        else {
            this.router.navigate(['/']);
        }
    }
    ExecutionSettingsComponent.prototype.toggle = function () {
        this.Icon = !this.Icon;
    };
    ExecutionSettingsComponent.prototype.DuplicateProcesses = function () {
        var _this = this;
        var program = new _Models_ExecutableProgramModel__WEBPACK_IMPORTED_MODULE_2__["ExecutableProgramModel"]();
        program.Name = this.ExecutableProgram.Name;
        this.SettingsRef.Processes.forEach(function (pcm) {
            var cmdModel = _this.ExecutableProgram.Processes.find(function (x) { return x.Name == pcm.Name; });
            for (var i = 0; i < pcm.Value; i++) {
                var commands = _this.Duplicate(cmdModel);
                if (pcm.Value > 1) {
                    commands.Name += " - " + i;
                }
                program.Add(commands);
            }
        });
        return program;
    };
    ExecutionSettingsComponent.prototype.Duplicate = function (commands) {
        var pcm = new _Models_ProcessCommandsModel__WEBPACK_IMPORTED_MODULE_6__["ProcessCommandsModel"]();
        pcm.Name = commands.Name;
        commands.Commands.forEach(function (command) {
            pcm.Add(command.Clone());
        });
        return pcm;
    };
    ExecutionSettingsComponent.prototype.run = function () {
        var _this = this;
        this.spinner.show();
        this.SimulationExecProgram = this.DuplicateProcesses();
        if (this.Settings) {
            this.localStorage.set("SETTINGS_DATA_FOR_REGENERATE", JSON.stringify(this.Settings));
        }
        this.apiService.simulate({ Program: this.SimulationExecProgram, Settings: this.Settings }).subscribe(function (data) {
            _this.Logs = _Helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].DeserializeLogs(data);
            _this.localStorage.set("SIMULATION", JSON.stringify({
                Program: _this.SimulationExecProgram,
                Logs: _this.Logs,
                Variables: _this.Settings.Variables,
                Semaphores: _this.Settings.Semaphores
            }));
            _this.localStorage.set("SETTINGS_DATA", JSON.stringify(_this.Settings));
            _this.spinner.hide();
            _this.router.navigate(["/simulation"]);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("settings"),
        __metadata("design:type", _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"])
    ], ExecutionSettingsComponent.prototype, "SettingsRef", void 0);
    ExecutionSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-execution-settings',
            template: __webpack_require__(/*! ./execution-settings.component.html */ "./src/app/execution-settings/execution-settings.component.html"),
            styles: [__webpack_require__(/*! ./execution-settings.component.css */ "./src/app/execution-settings/execution-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_api_request_service__WEBPACK_IMPORTED_MODULE_7__["ApiRequestService"], ngx_localstorage__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]])
    ], ExecutionSettingsComponent);
    return ExecutionSettingsComponent;
}());



/***/ }),

/***/ "./src/app/preview-dialog/preview-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/preview-dialog/preview-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/preview-dialog/preview-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/preview-dialog/preview-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialog-title>Preview</h2>\n  <hr>\n  <mat-dialog-content>\n    <div style=\"max-height: 700px\">\n      <preview [processes]=\"ExecutableProgram.Processes\"></preview>\n    </div>\n  </mat-dialog-content>\n  <hr>\n  <mat-dialog-actions>\n    <button style=\"float: right;\" mat-raised-button (click)=\"onCloseCancel()\">Close</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/preview-dialog/preview-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/preview-dialog/preview-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: PreviewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewDialogComponent", function() { return PreviewDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Models_ExecutableProgramModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/ExecutableProgramModel */ "./src/app/Models/ExecutableProgramModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PreviewDialogComponent = /** @class */ (function () {
    function PreviewDialogComponent(thisDialogRef, ExecutableProgram) {
        this.thisDialogRef = thisDialogRef;
        this.ExecutableProgram = ExecutableProgram;
    }
    PreviewDialogComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    PreviewDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview-dialog',
            template: __webpack_require__(/*! ./preview-dialog.component.html */ "./src/app/preview-dialog/preview-dialog.component.html"),
            styles: [__webpack_require__(/*! ./preview-dialog.component.css */ "./src/app/preview-dialog/preview-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _Models_ExecutableProgramModel__WEBPACK_IMPORTED_MODULE_2__["ExecutableProgramModel"]])
    ], PreviewDialogComponent);
    return PreviewDialogComponent;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".command\n{\n    width: 90%;\n    margin-left: 5%;\n    border-radius: 10px;\n    padding: 5px 10px;\n}\n\n.command0, .command1\n{\n    background-color: #C0392B\n}\n\n.command2, .command3, .command4, .command5\n{\n    background-color: #2980B9\n}\n\n.command6\n{\n    background-color: #27AE60; \n}\n\n.commandBlur\n{\n    background-color: #AAAAAA;\n}"

/***/ }),

/***/ "./src/app/preview/preview.component.html":
/*!************************************************!*\
  !*** ./src/app/preview/preview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; overflow: auto; height: -webkit-fill-available;\">\n    <div class=\"process\" *ngFor=\"let process of Processes; let ind = index\" style=\"display: table-cell; width: 235px; max-width: 235px; min-width: 235px; position: relative; left: -10px\">\n        &nbsp;&nbsp;&nbsp;&nbsp;Name: {{process.Name}}\n        <br><br>\n        <div *ngFor=\"let command of process.Commands\" class=\"command\" [ngClass]=\"{ 'command0': (!isSimulation && command.Type==0) || (isSimulation && command.DisplayColor && processStatus[ind]), 'command1': !isSimulation && command.Type==1, 'command2': !isSimulation && command.Type==2, 'command3': !isSimulation && command.Type==3, 'command4': !isSimulation && command.Type==4, 'command5': !isSimulation && command.Type==5, 'command6': (!isSimulation && command.Type==6) || (isSimulation && command.DisplayColor && !processStatus[ind]), 'commandBlur': isSimulation && !command.DisplayColor}\">\n            {{getText(command)}}\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helper */ "./src/app/Helper.ts");
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scroll-into-view */ "./node_modules/scroll-into-view/scrollIntoView.js");
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scroll_into_view__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreviewComponent = /** @class */ (function () {
    function PreviewComponent() {
        this.isSimulation = false;
    }
    PreviewComponent.prototype.getText = function (command) {
        return _Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].GetText(command);
    };
    PreviewComponent.prototype.FocusCommand = function (processNo, commandNo, undo, callback) {
        var commands = document.getElementsByClassName("process")[processNo].getElementsByClassName("command");
        if (commands.length > commandNo) {
            scroll_into_view__WEBPACK_IMPORTED_MODULE_2__(commands[commandNo], { time: 600 }, callback);
        }
        else if (undo && commands.length == commandNo) {
            callback();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("processes"),
        __metadata("design:type", Array)
    ], PreviewComponent.prototype, "Processes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("simulation"),
        __metadata("design:type", Boolean)
    ], PreviewComponent.prototype, "isSimulation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("processStatus"),
        __metadata("design:type", Array)
    ], PreviewComponent.prototype, "processStatus", void 0);
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/refresh-button/refresh-button.component.css":
/*!*************************************************************!*\
  !*** ./src/app/refresh-button/refresh-button.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/refresh-button/refresh-button.component.html":
/*!**************************************************************!*\
  !*** ./src/app/refresh-button/refresh-button.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span style=\"cursor: pointer;\">\n    <mat-icon #imgBtn style=\"cursor: pointer;\">{{Img}}</mat-icon>   \n    <span #text *ngIf=\"Text\" style=\"cursor: pointer; position:relative; top:-5px; margin-left: 10px\">{{Text}}</span>\n</span>"

/***/ }),

/***/ "./src/app/refresh-button/refresh-button.component.ts":
/*!************************************************************!*\
  !*** ./src/app/refresh-button/refresh-button.component.ts ***!
  \************************************************************/
/*! exports provided: RefreshButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshButtonComponent", function() { return RefreshButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RefreshButtonComponent = /** @class */ (function () {
    function RefreshButtonComponent(Element, renderer) {
        this.Element = Element;
        this.renderer = renderer;
        this.Enabled = true;
        this.RefreshInterval = 100;
    }
    RefreshButtonComponent.prototype.ngOnInit = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.IsEnabled)) {
            setInterval(this.Check.bind(this), this.RefreshInterval);
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.Size)) {
            this.renderer.setElementStyle(this.Button.nativeElement, "font-size", this.Size + "px");
        }
    };
    RefreshButtonComponent.prototype.Check = function () {
        try {
            var newStatus = this.IsEnabled();
            if (newStatus != this.Enabled) {
                this.Enabled = newStatus;
                if (newStatus) {
                    this.renderer.setElementStyle(this.Element.nativeElement, "pointer-events", "inherit");
                    this.renderer.setElementStyle(this.Button.nativeElement, "opacity", "1");
                    this.renderer.setElementStyle(this.Button.nativeElement, "cursor", "pointer");
                    if (this.Txt != null) {
                        this.renderer.setElementStyle(this.Txt.nativeElement, "opacity", "1");
                        this.renderer.setElementStyle(this.Txt.nativeElement, "cursor", "pointer");
                    }
                }
                else {
                    this.renderer.setElementStyle(this.Element.nativeElement, "pointer-events", "none");
                    this.renderer.setElementStyle(this.Button.nativeElement, "opacity", "0.2");
                    this.renderer.setElementStyle(this.Button.nativeElement, "cursor", "not-allowed");
                    if (this.Txt != null) {
                        this.renderer.setElementStyle(this.Txt.nativeElement, "opacity", "0.2");
                        this.renderer.setElementStyle(this.Txt.nativeElement, "cursor", "not-allowed");
                    }
                }
            }
        }
        catch (Err) { }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("isEnabled"),
        __metadata("design:type", Object)
    ], RefreshButtonComponent.prototype, "IsEnabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("img"),
        __metadata("design:type", String)
    ], RefreshButtonComponent.prototype, "Img", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("text"),
        __metadata("design:type", String)
    ], RefreshButtonComponent.prototype, "Text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("size"),
        __metadata("design:type", String)
    ], RefreshButtonComponent.prototype, "Size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("imgBtn", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RefreshButtonComponent.prototype, "Button", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("text", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RefreshButtonComponent.prototype, "Txt", void 0);
    RefreshButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'refresh-button',
            template: __webpack_require__(/*! ./refresh-button.component.html */ "./src/app/refresh-button/refresh-button.component.html"),
            styles: [__webpack_require__(/*! ./refresh-button.component.css */ "./src/app/refresh-button/refresh-button.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], RefreshButtonComponent);
    return RefreshButtonComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #DDDDDD; padding-top: 10px; margin-bottom: 15px\">\n  <div style=\"width: 25%; margin-left: 12.5%; float: left\">\n    Threads:<br>\n    <div *ngFor=\"let process of Processes\" style=\"padding:5px 0\">\n      <span style=\"width: calc(80% - 70px); display: inline-block\">{{process.Name}}</span> <input min=\"1\" (change)=\"threadCountChanged()\" [max]=\"process.Value + 8 - CurrentMax\"  type=\"number\" [(ngModel)]=\"process.Value\" style=\"width:50px; margin-left: 10px\">\n    </div>\n  </div>\n  <div style=\"width: 25%; float: left\">\n    Semaphores:<br>\n    <div *ngFor=\"let sem of Settings.Semaphores\" style=\"padding:5px 0\">\n      <span style=\"width: calc(80% - 70px); display: inline-block\">{{sem.Name}}</span> <input min=\"0\"  type=\"number\" [(ngModel)]=\"sem.Value\" style=\"width:50px; margin-left: 10px\">\n    </div>\n  </div>\n  <div style=\"width: 25%; float: left\">\n    Variables:<br>\n    <div *ngFor=\"let variable of Settings.Variables\" style=\"padding:5px 0\">\n      <span style=\"width: calc(80% - 70px); display: inline-block\">{{variable.Name}}</span> <input type=\"number\" [(ngModel)]=\"variable.Value\" style=\"width:50px; margin-left: 10px\">\n    </div>\n  </div> \n  <br style=\"clear: both\"> \n</div>\n\n<input type=\"radio\" [checked]=\"!Settings.DispatcherEnabled\" (change)=\"dispacherChanged()\"> Auto dispatcher\n<input type=\"radio\" [checked]=\"Settings.DispatcherEnabled\" (change)=\"dispacherChanged()\" style=\"margin-left: 10px;\"> Controlled dispatcher\n\n<div *ngIf=\"Settings.DispatcherEnabled\" style=\"padding-top: 10px; white-space: nowrap\">  \n  <smooth-dnd-container style=\"display: inline-block; width:32%; position: relative; top:-12px\" [orientation]=\"'horizontal'\" groupName=\"1\" behaviour=\"copy\" [getChildPayload]=\"getSource.bind(this)\">            \n    <smooth-dnd-draggable *ngFor=\"let num of ThreadNumbers\">\n      <div class=\"draggable-item-horizontal copy\" style=\"border:1px solid black; background-color: #DDDDDD; padding: 5px; display: inline-block\">\n        {{num}}\n      </div>\n    </smooth-dnd-draggable>\n  </smooth-dnd-container>\n\n  <div style=\"width:33%; display: inline-block\">\n    <input type=\"text\" [(ngModel)]=\"Text\" style=\"width: 100%\"><br>\n    <refresh-button (click)=\"inputScenario()\" [img]=\"'arrow_downward'\" style=\"margin-left: calc(40% - 12px)\"></refresh-button>\n    <refresh-button (click)=\"outputScenario()\" [img]=\"'arrow_upward'\" style=\"margin-left: calc(20% - 12px)\"></refresh-button>\n  </div>\n\n  <div style=\"width:32%; display: inline-block\">\n    <refresh-button (click)=\"importFromFile()\" [text]=\"'Import'\" [img]=\"'get_app'\" style=\"margin-left: calc(20% - 12px); position: relative; top:-12px; left: 30%\"></refresh-button>\n  </div>\n\n  <smooth-dnd-container (drop)=\"onDrop($event)\" [getChildPayload]=\"getTarget.bind(this)\" groupName=\"1\" style=\"background: #DDDDDD; height: 47px; overflow-x: auto; position: relative; top:15px; white-space: nowrap; display: block\" [orientation]=\"'horizontal'\">            \n    <smooth-dnd-draggable *ngFor=\"let num of Settings.Dispatcher; let ind = index\">\n      <div [contextMenu]=\"basicMenu\" [contextMenuSubject]=\"ind\" class=\"draggable-item-horizontal\" style=\"border:1px solid black; background-color: #DDDDDD; padding: 5px; display: inline-block\">\n        {{num}}\n      </div>\n    </smooth-dnd-draggable>\n  </smooth-dnd-container>\n</div>\n\n<input #fileDialog type=\"file\" accept=\".disp\" (change)=\"readFromFile()\" hidden/>\n<context-menu #basicMenu>\n  <ng-template contextMenuItem (execute)=\"deleteFromMenu($event.item)\">\n    Delete\n  </ng-template>\n</context-menu>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_ExecutionSettingsModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/ExecutionSettingsModel */ "./src/app/Models/ExecutionSettingsModel.ts");
/* harmony import */ var _Models_ProgramModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/ProgramModel */ "./src/app/Models/ProgramModel.ts");
/* harmony import */ var _Models_InitialValueModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/InitialValueModel */ "./src/app/Models/InitialValueModel.ts");
/* harmony import */ var _Models_ProcessCountModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/ProcessCountModel */ "./src/app/Models/ProcessCountModel.ts");
/* harmony import */ var _Enums_BlockType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Enums/BlockType */ "./src/app/Enums/BlockType.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Settings.Variables = [];
        this.Settings.Semaphores = [];
        this.Processes = [];
        this.CurrentMax = this.Program.ProcessCount();
        this.InitThreadNumbers();
        var _loop_1 = function (process) {
            var pcm = new _Models_ProcessCountModel__WEBPACK_IMPORTED_MODULE_4__["ProcessCountModel"]();
            pcm.Name = this_1.Program.Processes[process].Name;
            pcm.Value = 1;
            this_1.Processes.push(pcm);
            var _loop_2 = function (block) {
                var ivm = void 0;
                switch (this_1.Program.Processes[process].Blocks[block].Type) {
                    case _Enums_BlockType__WEBPACK_IMPORTED_MODULE_5__["BlockType"].SEMAPHOR:
                        if (this_1.Settings.Semaphores.find(function (x) { return x.Name == _this.Program.Processes[process].Blocks[block].SemaphorName; }) == null) {
                            ivm = new _Models_InitialValueModel__WEBPACK_IMPORTED_MODULE_3__["InitialValueModel"]();
                            ivm.Value = 1;
                            ivm.Name = this_1.Program.Processes[process].Blocks[block].SemaphorName;
                            this_1.Settings.Semaphores.push(ivm);
                        }
                        break;
                    case _Enums_BlockType__WEBPACK_IMPORTED_MODULE_5__["BlockType"].SHARED_VARIABLE:
                        if (this_1.Settings.Variables.find(function (x) { return x.Name == _this.Program.Processes[process].Blocks[block].VariableName; }) == null) {
                            ivm = new _Models_InitialValueModel__WEBPACK_IMPORTED_MODULE_3__["InitialValueModel"]();
                            ivm.Value = 0;
                            ivm.Name = this_1.Program.Processes[process].Blocks[block].VariableName;
                            this_1.Settings.Variables.push(ivm);
                        }
                        break;
                }
            };
            for (var block = 0; block < this_1.Program.Processes[process].Blocks.length; block++) {
                _loop_2(block);
            }
        };
        var this_1 = this;
        for (var process = 0; process < this.Program.ProcessCount(); process++) {
            _loop_1(process);
        }
    };
    SettingsComponent.prototype.removeAt = function (array, index) {
        array.splice(index, 1);
    };
    SettingsComponent.prototype.insertAt = function (array, index, item) {
        array.splice(index, 0, item);
    };
    SettingsComponent.prototype.dispacherChanged = function () {
        this.Settings.DispatcherEnabled = !this.Settings.DispatcherEnabled;
        var tmp = this.Settings;
        this.Settings = null;
        this.Settings = tmp;
    };
    SettingsComponent.prototype.threadCountChanged = function () {
        var sum = 0;
        this.Processes.forEach(function (pcm) { return sum += pcm.Value; });
        this.CurrentMax = sum;
        this.InitThreadNumbers();
    };
    SettingsComponent.prototype.onDrop = function (dropResult, move) {
        if (dropResult.droppedElement.className.indexOf("copy") == -1) {
            this.removeAt(this.Settings.Dispatcher, dropResult.removedIndex);
        }
        this.insertAt(this.Settings.Dispatcher, dropResult.addedIndex, dropResult.payload);
    };
    SettingsComponent.prototype.InitThreadNumbers = function () {
        var _this = this;
        var tmp = [];
        for (var i = 1; i <= this.CurrentMax; i++) {
            tmp.push(i);
        }
        this.ThreadNumbers = tmp;
        if (!this.Settings.Dispatcher) {
            this.Settings.Dispatcher = [];
        }
        this.Settings.Dispatcher = this.Settings.Dispatcher.filter(function (num) { return num <= _this.CurrentMax; });
    };
    SettingsComponent.prototype.getSource = function (ind) {
        return this.ThreadNumbers[ind];
    };
    SettingsComponent.prototype.getTarget = function (ind) {
        return this.Settings.Dispatcher[ind];
    };
    SettingsComponent.prototype.parseScenario = function (scenario) {
        if (scenario == undefined) {
            return;
        }
        var tmp = [];
        for (var i = 0; i < scenario.length; i++) {
            var num = +scenario.charAt(i);
            if (num == undefined || this.isCharacter(num.toString())) {
                alert("Parsing failed. Text should only contain numbers");
                return;
            }
            else if (num < 1 || num > this.CurrentMax) {
                alert("Numbers must not be less then 0 or greater than current maximum number of processes");
                return;
            }
            tmp.push(num);
        }
        this.Settings.Dispatcher = tmp;
    };
    SettingsComponent.prototype.isCharacter = function (c) {
        return c.toLowerCase() != c.toUpperCase();
    };
    SettingsComponent.prototype.inputScenario = function () {
        this.parseScenario(this.Text);
    };
    SettingsComponent.prototype.outputScenario = function () {
        var _this = this;
        this.Text = "";
        this.Settings.Dispatcher.forEach(function (x) { return _this.Text += x; });
    };
    SettingsComponent.prototype.importFromFile = function () {
        this.File.nativeElement.click();
    };
    SettingsComponent.prototype.readFromFile = function () {
        var _this = this;
        if (this.File.nativeElement.files && this.File.nativeElement.files[0]) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                _this.File.nativeElement.value = "";
                var text = reader_1.result.toString();
                _this.parseScenario(text);
            };
            reader_1.readAsText(this.File.nativeElement.files[0]);
        }
    };
    SettingsComponent.prototype.deleteFromMenu = function (index) {
        this.removeAt(this.Settings.Dispatcher, index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("program"),
        __metadata("design:type", _Models_ProgramModel__WEBPACK_IMPORTED_MODULE_2__["ProgramModel"])
    ], SettingsComponent.prototype, "Program", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("settings"),
        __metadata("design:type", _Models_ExecutionSettingsModel__WEBPACK_IMPORTED_MODULE_1__["ExecutionSettingsModel"])
    ], SettingsComponent.prototype, "Settings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("fileDialog"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsComponent.prototype, "File", void 0);
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/simulation/simulation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/simulation/simulation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/simulation/simulation.component.html":
/*!******************************************************!*\
  !*** ./src/app/simulation/simulation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; height: 5%;\">\n    <refresh-button [isEnabled]=\"StartAutoDisplayCmd_CanExecute.bind(this)\" (click)=\"StartAutoDisplayCmd_Execute()\" style=\"position:relative; top:7px; margin-left: 5px;\" [text]=\"'Autorun'\" [img]=\"'play_circle_filled'\"></refresh-button>\n    <refresh-button [isEnabled]=\"PauseAutoDisplayCmd_CanExecute.bind(this)\" (click)=\"PauseAutoDisplayCmd_Execute()\" style=\"position:relative; top:7px; margin-left: 20px;\" [text]=\"'Pause'\" [img]=\"'pause_circle_filled'\"></refresh-button>\n    <refresh-button [isEnabled]=\"PreviousLogCmd_CanExecute.bind(this)\" (click)=\"PreviousLogCmd_Execute()\" style=\"position:relative; top:7px; margin-left: 20px;\" [text]=\"'Previous'\" [img]=\"'skip_previous'\"></refresh-button>\n    <refresh-button [isEnabled]=\"NextLogCmd_CanExecute.bind(this)\" (click)=\"NextLogCmd_Execute()\" style=\"position:relative; top:7px; margin-left: 20px;\" [text]=\"'Next'\" [img]=\"'skip_next'\"></refresh-button>\n    <refresh-button [isEnabled]=\"ResetSimulationCmd_CanExecute.bind(this)\" (click)=\"ResetSimulationCmd_Execute()\" style=\"position:relative; top:7px; margin-left: 20px;\" [text]=\"'Reset'\" [img]=\"'settings_backup_restore'\"></refresh-button>\n    <refresh-button (click)=\"NewSimulationCmd_Execute()\" style=\"position:relative; top:7px; margin-left: 20px;\" [text]=\"'Generate new scenario'\" [img]=\"'autorenew'\"></refresh-button>\n    <refresh-button (click)=\"ExportCmd_Execute()\" style=\"position:relative; top:7px; margin-left: 20px;\" [text]=\"'Export execution scenario'\" [img]=\"'get_app'\"></refresh-button>\n</div>\n\n<div style=\"height: 60vh; margin-top:5px\">\n    <div style=\"width: 60%; max-width: 60%; overflow: auto; float: left; height: 100%; padding: 10px; display: flex;justify-content: center;align-items: center;\">\n        <div style=\"height:98%; margin:auto; display: inline-block; width: 100%\">\n            <preview #preview simulation=\"true\" [processes]=\"ExecutableProgram.Processes\" [processStatus]=\"IsSuspended\"></preview>\n        </div>\n    </div>\n\n    <div style=\"width:30%; float: left; height: 100%; padding-top:30px; padding-left: 30px\">\n        Variables:<br><br>\n        <div *ngFor=\"let value of VariableValues\">\n            <span style=\"width:130px; display: inline-block\">{{value.Name}}</span>{{value.Value}}\n        </div>\n        <br><br><br>\n        Semaphores:<br><br>\n        <div *ngFor=\"let value of SemaphoreValues\">\n            <span style=\"width:130px; display: inline-block\">{{value.Name}}</span>{{value.Value}}\n        </div>\n    </div>\n</div>\n\n<div style=\"width:100%; max-height: 27vh; clear:both; overflow: auto; margin-top: 50px\">\n    <table mat-table [dataSource]=\"LogData\" style=\"width: 99%; margin-left: 5px; box-shadow: none;\" class=\"mat-elevation-z8\">\n\n      <ng-container matColumnDef=\"process\">\n        <th mat-header-cell *matHeaderCellDef>Process</th>\n        <td mat-cell *matCellDef=\"let element\" style=\"width:10%; border: none\"> {{element.Process}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef>Description</th>\n        <td mat-cell *matCellDef=\"let element\" style=\"width:30%; border: none\"> {{element.Description}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"states\">\n        <th mat-header-cell *matHeaderCellDef>Variable states</th>\n        <td mat-cell *matCellDef=\"let element\" style=\"width:60%; border: none\"> {{element.States}} </td>\n      </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" style=\"height: 28px\"></tr>\n        <tr class=\"row\" mat-row *matRowDef=\"let row; columns: displayedColumns;\" style=\"height: 22px\"></tr>\n  </table>\n</div>\n\n<ngx-spinner\nbdColor = \"rgba(51, 51, 51, 0.8)\"\nsize = \"large\"\ncolor = \"#fff\"\ntype = \"timer\"\n></ngx-spinner>"

/***/ }),

/***/ "./src/app/simulation/simulation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/simulation/simulation.component.ts ***!
  \****************************************************/
/*! exports provided: SimulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationComponent", function() { return SimulationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_ExecutableProgramModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/ExecutableProgramModel */ "./src/app/Models/ExecutableProgramModel.ts");
/* harmony import */ var ngx_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-localstorage */ "./node_modules/ngx-localstorage/fesm5/ngx-localstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Helper */ "./src/app/Helper.ts");
/* harmony import */ var _Models_PrintedLogModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/PrintedLogModel */ "./src/app/Models/PrintedLogModel.ts");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api-request.service */ "./src/app/api-request.service.ts");
/* harmony import */ var _Models_LogModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Models/LogModel */ "./src/app/Models/LogModel.ts");
/* harmony import */ var _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Enums/LogType */ "./src/app/Enums/LogType.ts");
/* harmony import */ var _Models_SemaphoreLogModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Models/SemaphoreLogModel */ "./src/app/Models/SemaphoreLogModel.ts");
/* harmony import */ var _Models_InitialValueModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Models/InitialValueModel */ "./src/app/Models/InitialValueModel.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! scroll-into-view */ "./node_modules/scroll-into-view/scrollIntoView.js");
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(scroll_into_view__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var SimulationComponent = /** @class */ (function () {
    function SimulationComponent(localStorage, router, apiService, spinner) {
        this.localStorage = localStorage;
        this.router = router;
        this.apiService = apiService;
        this.spinner = spinner;
        this.displayedColumns = ['process', 'description', 'states'];
        this.TICK = 1500;
        var data = localStorage.get("SIMULATION");
        if (data) {
            var dataObj = JSON.parse(data);
            this.ExecutableProgram = _Models_ExecutableProgramModel__WEBPACK_IMPORTED_MODULE_1__["ExecutableProgramModel"].Deserialize(dataObj.Program);
            this.Logs = _Helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].DeserializeLogs(dataObj.Logs);
            this.variables = dataObj.Variables;
            this.semaphores = dataObj.Semaphores;
            this.processPositions = [];
            this.IsSuspended = [];
            this.LogOutput = [];
            this.previousValues = {};
            this.Initialize();
        }
        else {
            router.navigate(["/"]);
        }
    }
    SimulationComponent.prototype.NewSimulationCmd_Execute = function () {
        var _this = this;
        if (this.timerIsRunning) {
            this.PauseAutoDisplayCmd_Execute();
        }
        this.spinner.show();
        this.NewSimulation = true;
        var settingsData = this.localStorage.get("SETTINGS_DATA_FOR_REGENERATE");
        var settings = JSON.parse(settingsData);
        this.apiService.simulate({ Program: this.ExecutableProgram, Settings: settings }).subscribe(function (data) {
            _this.Logs = _Helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].DeserializeLogs(data);
            _this.localStorage.set("SIMULATION", JSON.stringify({
                Program: _this.ExecutableProgram,
                Logs: _this.Logs
            }));
            _this.ResetSimulationCmd_Execute();
            _this.spinner.hide();
        });
    };
    SimulationComponent.prototype.download = function (filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    SimulationComponent.prototype.ExportCmd_Execute = function () {
        var current = new Date(Date.now());
        var date = current.getFullYear() + "-" + current.getDate() + "-" + current.getMonth() + "-" + current.getHours() + "-" + current.getMonth() + "-" + current.getSeconds();
        var name = "scenario-" + this.ExecutableProgram.Name + "-" + date + ".disp";
        var content = "";
        this.Logs.forEach(function (x) {
            if (x instanceof _Models_LogModel__WEBPACK_IMPORTED_MODULE_7__["LogModel"]) {
                content += (+x.Process) + 1;
            }
        });
        this.download(name, content);
    };
    SimulationComponent.prototype.GenerateDeadlockLog = function () {
        var printLog = new _Models_PrintedLogModel__WEBPACK_IMPORTED_MODULE_5__["PrintedLogModel"]();
        printLog.Description = "Deadlock has been detected";
        printLog.States = this.GetStates();
        this.ShowLog(printLog);
    };
    SimulationComponent.prototype.ShowLog = function (printLog) {
        this.LogOutput.push(printLog);
    };
    SimulationComponent.prototype.GenerateLogOutput = function (logModel) {
        var printLog = new _Models_PrintedLogModel__WEBPACK_IMPORTED_MODULE_5__["PrintedLogModel"]();
        printLog.Process = ((+logModel.Process) + 1).toString();
        if (logModel.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].DISPATCHER_SKIP) {
            printLog.Description = "----------";
        }
        else if (logModel.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].DEADLOCK || logModel.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].ALL_SUSPENDED) {
            printLog.Description = "Deadlock has been detected";
        }
        else if (logModel.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].AWAKE_PROCESS) {
            printLog.Description = "Process has been deblocked";
        }
        else if (logModel instanceof _Models_SemaphoreLogModel__WEBPACK_IMPORTED_MODULE_9__["SemaphoreLogModel"]) {
            var semLog = logModel;
            switch (semLog.Type) {
                case _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].ENTER_REGION:
                    printLog.Description = "###Enter critical region " + semLog.Semaphore + "###";
                    break;
                case _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].EXIT_REGION:
                    printLog.Description = "###Exit critical region " + semLog.Semaphore + "###";
                    break;
                case _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].SUSPENDED:
                    printLog.Description = "###Blocked on " + semLog.Semaphore + "###";
                    break;
            }
        }
        else {
            printLog.Description = _Helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].GetText(logModel.Command);
        }
        printLog.States = this.GetStates();
        this.ShowLog(printLog);
    };
    SimulationComponent.prototype.GetStates = function () {
        var text = "";
        if (this.VariableValues.length > 0) {
            var first_1 = true;
            text = "Variables: ";
            this.VariableValues.forEach(function (ivm) {
                if (!first_1) {
                    text += "; ";
                }
                text += ivm.Name + "=" + ivm.Value;
                first_1 = false;
            });
            text += ";        ";
        }
        if (this.SemaphoreValues.length > 0) {
            var first_2 = true;
            text += "Semaphores: ";
            this.SemaphoreValues.forEach(function (ivm) {
                if (!first_2) {
                    text += "; ";
                }
                text += ivm.Name + "=" + ivm.Value;
                first_2 = false;
            });
        }
        return text;
    };
    SimulationComponent.prototype.AddLog = function (log) {
        if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].DEADLOCK || log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].ALL_SUSPENDED) {
            this.GenerateDeadlockLog();
        }
        else {
            this.GenerateLogOutput(log);
        }
        this.LogData = new _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](this.LogOutput);
    };
    SimulationComponent.prototype.PreviousLogCmd_Execute = function () {
        if (this.CurrentLog < this.Logs.length) {
            this.UndoCommand(this.Logs[this.CurrentLog]);
        }
        this.CurrentLog--;
    };
    SimulationComponent.prototype.PreviousLogCmd_CanExecute = function () {
        return !this.timerIsRunning && this.CurrentLog > -1;
    };
    SimulationComponent.prototype.NextLogCmd_Execute = function () {
        this.CurrentLog++;
        if (this.CurrentLog < this.Logs.length) {
            this.ExecuteCommand(this.Logs[this.CurrentLog]);
        }
    };
    SimulationComponent.prototype.NextLogCmd_CanExecute = function () {
        return !this.timerIsRunning && this.CurrentLog < this.Logs.length - 1;
    };
    SimulationComponent.prototype.ResetSimulationCmd_Execute = function () {
        this.Initialize();
    };
    SimulationComponent.prototype.ResetSimulationCmd_CanExecute = function () {
        return !this.timerIsRunning && this.CurrentLog != -1;
    };
    SimulationComponent.prototype.PauseAutoDisplayCmd_Execute = function () {
        clearInterval(this.timer);
        this.timerIsRunning = false;
    };
    SimulationComponent.prototype.PauseAutoDisplayCmd_CanExecute = function () {
        return this.timerIsRunning;
    };
    SimulationComponent.prototype.StartAutoDisplayCmd_Execute = function () {
        this.timerIsRunning = true;
        this.timer = setInterval(this.Timer_Elapsed.bind(this), this.TICK);
    };
    SimulationComponent.prototype.StartAutoDisplayCmd_CanExecute = function () {
        return !this.timerIsRunning && this.CurrentLog < this.Logs.length - 1;
    };
    SimulationComponent.prototype.Timer_Elapsed = function () {
        this.CurrentLog++;
        if (this.CurrentLog < this.Logs.length) {
            this.ExecuteCommand(this.Logs[this.CurrentLog]);
        }
        else {
            clearInterval(this.timer);
            this.timerIsRunning = false;
        }
    };
    SimulationComponent.prototype.CloneList = function (listToClone) {
        var list = [];
        listToClone.forEach(function (ivm) {
            var tmp = new _Models_InitialValueModel__WEBPACK_IMPORTED_MODULE_10__["InitialValueModel"]();
            tmp.Name = ivm.Name;
            tmp.Value = ivm.Value;
            list.push(tmp);
        });
        return list;
    };
    SimulationComponent.prototype.Initialize = function () {
        var _this = this;
        this.CurrentLog = -1;
        this.VariableValues = this.CloneList(this.variables);
        this.SemaphoreValues = this.CloneList(this.semaphores);
        this.IsSuspended = [];
        this.processPositions = [];
        for (var i = 0; i < this.ExecutableProgram.ProcessCount(); i++) {
            this.IsSuspended.push(false);
            this.processPositions.push(0);
            this.DisplayColor(i, 0);
        }
        this.LogOutput = [];
        this.LogData = new _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](this.LogOutput);
        this.previousValues = {};
        this.VariableValues.forEach(function (ivm) {
            _this.previousValues[ivm.Name] = [];
        });
    };
    SimulationComponent.prototype.DisplayColor = function (processNo, commandNo) {
        this.ExecutableProgram.Processes[processNo].Commands.forEach(function (x) { return x.DisplayColor = false; });
        if (commandNo >= 0 && commandNo < this.ExecutableProgram.Processes[processNo].CommandCount()) {
            this.ExecutableProgram.Processes[processNo].Commands[commandNo].DisplayColor = true;
        }
    };
    SimulationComponent.prototype.Focus = function (process, undo, callback) {
        this.preview.FocusCommand(process, this.processPositions[process], undo, callback);
    };
    SimulationComponent.prototype.ExecuteCommand = function (log) {
        var _this = this;
        var logModel;
        if (log instanceof _Models_LogModel__WEBPACK_IMPORTED_MODULE_7__["LogModel"]) {
            logModel = log;
        }
        var valuedLog;
        var semaphoreLog;
        if (logModel != null) {
            this.Focus(logModel.Process, false, function () {
                setTimeout(function () {
                    if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].SET_VALUE) {
                        valuedLog = log;
                        var variable = _this.VariableValues.find(function (x) { return x.Name == valuedLog.Variable; });
                        _this.previousValues[valuedLog.Variable].push(variable.Value);
                        variable.Value = valuedLog.Value;
                        _this.AddLog(log);
                    }
                    else if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].ENTER_REGION) {
                        semaphoreLog = log;
                        var semaphore = _this.SemaphoreValues.find(function (x) { return x.Name == semaphoreLog.Semaphore; });
                        semaphore.Value--;
                        _this.AddLog(log);
                    }
                    else if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].EXIT_REGION) {
                        semaphoreLog = log;
                        var semaphore = _this.SemaphoreValues.find(function (x) { return x.Name == semaphoreLog.Semaphore; });
                        semaphore.Value++;
                        _this.AddLog(log);
                    }
                    else if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].SUSPENDED) {
                        semaphoreLog = log;
                        _this.IsSuspended[semaphoreLog.Process] = true;
                        _this.AddLog(log);
                        return;
                    }
                    else if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].AWAKE_PROCESS) {
                        _this.IsSuspended[logModel.Process] = false;
                        _this.AddLog(log);
                        return;
                    }
                    else if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].DEADLOCK || log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].ALL_SUSPENDED) {
                        _this.AddLog(log);
                        return;
                    }
                    if (log.Type != _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].DISPATCHER_SKIP) {
                        _this.processPositions[logModel.Process]++;
                    }
                    _this.DisplayColor(logModel.Process, _this.processPositions[logModel.Process]);
                    _this.refresh();
                }, 300);
            });
        }
    };
    SimulationComponent.prototype.refresh = function () {
        var tmp = this.IsSuspended;
        this.IsSuspended = null;
        this.IsSuspended = tmp;
        var rows = document.getElementsByClassName("row");
        if (rows.length > 0) {
            scroll_into_view__WEBPACK_IMPORTED_MODULE_14__(rows[rows.length - 1], { time: 300 });
        }
    };
    SimulationComponent.prototype.UndoCommand = function (log) {
        var _this = this;
        if (!log) {
            return;
        }
        var logModel;
        if (log instanceof _Models_LogModel__WEBPACK_IMPORTED_MODULE_7__["LogModel"]) {
            logModel = log;
        }
        var valuedLog;
        var semaphoreLog;
        if (logModel != null) {
            this.Focus(logModel.Process, true, function () {
                setTimeout(function () {
                    if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].SET_VALUE) {
                        valuedLog = log;
                        var variable = _this.VariableValues.find(function (x) { return x.Name == valuedLog.Variable; });
                        variable.Value = _this.previousValues[valuedLog.Variable][_this.previousValues[valuedLog.Variable].length - 1];
                        _this.previousValues[valuedLog.Variable].pop();
                        _this.LogOutput.pop();
                    }
                    else if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].ENTER_REGION) {
                        semaphoreLog = log;
                        var semaphore = _this.SemaphoreValues.find(function (x) { return x.Name == semaphoreLog.Semaphore; });
                        semaphore.Value++;
                        _this.LogOutput.pop();
                    }
                    else if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].SUSPENDED) {
                        semaphoreLog = log;
                        _this.IsSuspended[semaphoreLog.Process] = false;
                        _this.LogOutput.pop();
                        _this.refresh();
                        return;
                    }
                    else if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].AWAKE_PROCESS) {
                        _this.IsSuspended[logModel.Process] = true;
                        _this.LogOutput.pop();
                        _this.refresh();
                        return;
                    }
                    else if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].EXIT_REGION) {
                        semaphoreLog = log;
                        var semaphore = _this.SemaphoreValues.find(function (x) { return x.Name == semaphoreLog.Semaphore; });
                        semaphore.Value--;
                        _this.LogOutput.pop();
                    }
                    else if (log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].DEADLOCK || log.Type == _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].ALL_SUSPENDED) {
                        _this.LogOutput.pop();
                        _this.refresh();
                        return;
                    }
                    if (log.Type != _Enums_LogType__WEBPACK_IMPORTED_MODULE_8__["LogType"].DISPATCHER_SKIP) {
                        _this.processPositions[logModel.Process]--;
                    }
                    _this.DisplayColor(logModel.Process, _this.processPositions[logModel.Process]);
                    _this.LogData = new _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](_this.LogOutput);
                    _this.refresh();
                }, 300);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("preview"),
        __metadata("design:type", _preview_preview_component__WEBPACK_IMPORTED_MODULE_11__["PreviewComponent"])
    ], SimulationComponent.prototype, "preview", void 0);
    SimulationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simulation',
            template: __webpack_require__(/*! ./simulation.component.html */ "./src/app/simulation/simulation.component.html"),
            styles: [__webpack_require__(/*! ./simulation.component.css */ "./src/app/simulation/simulation.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_localstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_request_service__WEBPACK_IMPORTED_MODULE_6__["ApiRequestService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"]])
    ], SimulationComponent);
    return SimulationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\ThreadingSimulator\GUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map