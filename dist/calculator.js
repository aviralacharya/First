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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🧮 Welcome to Smart Calculator");
        const operation = (yield askQuestion("Choose operation (add / subtract / multiply / divide): ")).toLowerCase();
        if (!["add", "subtract", "multiply", "divide"].includes(operation)) {
            console.log(" Invalid operation.");
            rl.close();
            return;
        }
        const count = parseInt(yield askQuestion("How many numbers? "));
        if (isNaN(count) || count < 2) {
            console.log(" You must enter at least 2 numbers.");
            rl.close();
            return;
        }
        const numbers = [];
        for (let i = 0; i < count; i++) {
            const num = parseFloat(yield askQuestion(`Enter number ${i + 1}: `));
            if (isNaN(num)) {
                console.log(" Invalid number.");
                rl.close();
                return;
            }
            numbers.push(num);
        }
        let result = 0;
        switch (operation) {
            case "add":
                result = numbers.reduce((a, b) => a + b);
                break;
            case "subtract":
                result = numbers.reduce((a, b) => a - b);
                break;
            case "multiply":
                result = numbers.reduce((a, b) => a * b);
                break;
            case "divide":
                result = numbers.reduce((a, b) => a / b);
                break;
        }
        console.log(`Result: ${result}`);
        rl.close();
    });
}
main();
//# sourceMappingURL=calculator.js.map