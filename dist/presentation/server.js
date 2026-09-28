"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
class Server {
    app = (0, express_1.default)();
    port;
    public_path;
    constructor(options) {
        const { port, public_path = 'public' } = options;
        this.port = port;
        this.public_path = public_path;
    }
    async start() {
        this.app.use(express_1.default.static(this.public_path));
        this.app.get(/.*/, (req, res) => {
            const indexPath = path_1.default.join(__dirname + `../../../${this.public_path}/index.html`);
            res.sendFile(indexPath);
        });
        this.app.listen(this.port, () => {
            console.log(`server running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map