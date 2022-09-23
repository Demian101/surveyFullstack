import { NextFunction, Request, Response } from "express";
import { ElementFlags } from "typescript";
import Form,{ IForm } from "../models/Form";

const postInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.name || !req.body.email){
      res.status(500).json( {"Message": "Pls write name or email!"} )
    }
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
      } = req.body;

    console.log('postInfo - req.body: ' , req.body)

    const form_: IForm = new Form({ 
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
    });
    const savedForm = await form_.save();
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


export {
  postInfo,
  getInfo,
  deleteForm,
};
