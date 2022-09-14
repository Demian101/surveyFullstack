"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var FormSchema = new mongoose_1.Schema({
    institution: {
        type: String,
        // enum : ['NEW','STATUS'],
    },
    participation: { type: String, },
    num: { type: Number },
    employedInstitution: { type: String, },
    position: { type: String, },
    contacts: { type: String, }, // 手机号或邮箱
}, { collection: "forms", timestamps: true });
var Form = (0, mongoose_1.model)("User", FormSchema);
exports.default = Form;
