import { NextFunction, Request, Response } from "express";
import { ElementFlags } from "typescript";
import Form,{ IForm } from "../models/Form";


const postInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.name || !req.body.contacts){
      res.status(500).json( {"Message": "Pls write name or contacts!"} )
    }
    const {
      name,
      employedInstitution,
      position,
      contacts,
      institution,
      participation,  
    } = req.body;

    console.log('postInfo - req.body: ' , req.body)

    const form_: IForm = new Form({ 
      name,
      employedInstitution,
      position,
      contacts,
      institution,
      participation,  
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
     console.log("error: ------- ", err);
    // res.status(500).json( {message: "Something went wrong"} )
  }
};

export {
  postInfo,
  getInfo,
};
