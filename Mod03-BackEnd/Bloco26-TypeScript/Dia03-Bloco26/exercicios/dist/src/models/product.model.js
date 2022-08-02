"use strict";
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
// testar se funciona sem o public
// testar com o this._connection
class ProductModel {
    constructor(connection) {
        this.connection = connection;
    }
    ;
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM TypeScriptExpress.Products';
            const [rows] = yield this.connection.execute(query);
            return rows;
        });
    }
    ;
}
exports.default = ProductModel;
;
