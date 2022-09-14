import mongoose, { Schema, Document, model } from "mongoose";
import bcrypt from "bcryptjs";

export interface IForm extends Document {
  institution: string;     // 领域？ [高校、研究机构 /  企业  /  投资机构] 
  participation: string;   // 参会形式 [online、offline] 
  num: Number;             // 人数？？？
  employedInstitution: string;  // 就职单位
  position: string;        // 职务
  contacts: string;        // 手机号或邮箱
}

const FormSchema: Schema = new Schema(
  {
    institution: { 
      type: String, 
      // enum : ['NEW','STATUS'],
    },
    participation: { type: String, },
    num: { type: Number},
    employedInstitution: { type: String, },
    position: { type: String, },
    contacts: { type: String, },    // 手机号或邮箱
  },
  { collection: "forms", timestamps: true }
);


const Form = model<IForm>("User", FormSchema);
export default Form;