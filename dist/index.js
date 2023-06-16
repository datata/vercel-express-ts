"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.get('/', (__req, res) => {
    return res.send('Welcome to my app');
});
app.get('/healthy', (__req, res) => {
    return res.send('Healthy');
});
app.get('/products', (__req, res) => {
    return res.send('All Products');
});
app.listen(PORT, () => {
    console.log("Server running on port:" + PORT);
});
