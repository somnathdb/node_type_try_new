"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const userServices = new user_service_1.userService();
class userController {
    static async createUser(req, res) {
        let result = await userServices.createUser(req.body);
        res.status(201).json({ message: "User Created", data: result });
    }
}
exports.userController = userController;
