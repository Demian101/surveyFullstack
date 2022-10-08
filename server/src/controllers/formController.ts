import { NextFunction, Request, Response } from "express";
import { ElementFlags } from "typescript";
import Form,{ IForm } from "../models/Form";
import { appendFileSync } from 'node:fs';

//写入文件，会完全替换之前 JSON 文件中的内容
const writeData = (form: any) => {
  const datapath = "/home/soda/data.json"
  try {
    const data = JSON.stringify(form);
    appendFileSync(datapath, data, 'utf8');
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    /* Handle the error */
  }
}

const postInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.name || !req.body.email){
      res.status(500).json( {"Message": "Pls write name or email!"} )
    }
    console.log('req.ip : ', req.ip)
    const {
      name,
      employedInstitution,
      position,
      email,
      tel,
      institution,
      participation,  
      num,
      isNeedHotel,
      roomNum,
      checkInDate,
      note,
      } = req.body;

    console.log('postInfo - req.body: ' , req.body)

    const formData = { 
      name,
      employedInstitution,
      position,
      email,
      tel,
      institution,
      participation,  
      num,
      isNeedHotel,
      roomNum,
      checkInDate: checkInDate.toString(),
      note,
    }
    const form_: IForm = new Form(formData);
    const savedForm = await form_.save();

    writeData(formData);
    res.json(savedForm)
  }
  catch(err){
    console.log("error: ------- ", err);
    // res.status(500).json( {message: "Something went wrong"} )
  }
};

const getInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('Controller getInfo...');
    const forms = await Form.find()
      .sort({ createdAt: -1 })
      
    res.json(forms);
  } catch(err){
    //  console.log("error: ------- ", err);
    res.status(500).json( {message: "Something went wrong"} )
  }
};


const deleteForm = async (req: Request, res: Response) => {
  const formId: string = req.params.id;
  console.log('req.params.id')
  const form = await Form.findOne({ _id: formId });
  try{
    if(form){
      const deleteFormById = await Form.findByIdAndDelete(formId);
      res.status(200).json({ message: "Form deleted successfully" });
    }
  }
  catch(err) {
    // console.log(err)
    res.status(500).send({ message: "Something goes wrong" });
  }
};

const modifyNote = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const { text } = req.body;
  console.log('modifyNote - req.params.id', req.params.id)
  try{
    const form = await Form.findOne({_id: id});
    if(form){
      const modiFormById = await Form.findByIdAndUpdate(id, {note: text});
      if(modiFormById){
        res.status(200).json(modiFormById);
      } else{res.status(500).send({ message: "Something goes wrong" });}
    }
  }
  catch(err) {
    console.log(err)
    // res.status(500).send({ message: "Something goes wrong" });
  }
};

export {
  postInfo,
  getInfo,
  deleteForm,
  modifyNote,
};
