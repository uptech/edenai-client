"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.video = exports.translation = exports.text = exports.workflows = exports.ocr = exports.infos = exports.image = exports.audio = exports.batch = void 0;
exports.batch = __importStar(require("./batch"));
exports.audio = __importStar(require("./audio"));
exports.image = __importStar(require("./image"));
exports.infos = __importStar(require("./infos"));
exports.ocr = __importStar(require("./ocr"));
exports.workflows = __importStar(require("./workflows"));
exports.text = __importStar(require("./text"));
exports.translation = __importStar(require("./translation"));
exports.video = __importStar(require("./video"));
__exportStar(require("./batch/client/requests"), exports);
__exportStar(require("./audio/client/requests"), exports);
__exportStar(require("./image/client/requests"), exports);
__exportStar(require("./infos/client/requests"), exports);
__exportStar(require("./ocr/client/requests"), exports);
__exportStar(require("./workflows/client/requests"), exports);
__exportStar(require("./text/client/requests"), exports);
__exportStar(require("./translation/client/requests"), exports);
__exportStar(require("./video/client/requests"), exports);
