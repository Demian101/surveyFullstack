// https://www.tonyvu.co/posts/react-hook-form-tailwind-css
import React, {useState} from "react";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import apiClient from "../api/http-common";
import Modal from './Modal';

const From = () => {
  const [showModal, setShowModal] = useState(false);
  const [postResult, setPostResult] = useState({'status':null, 'res':null});
  const { register, errors, handleSubmit } = useForm();
  const [data, setData] = useState();

  const onSubmit = async (data) => {    
    setData(data);
    setShowModal(true)
    console.log('setData',data)
  };

  useEffect(()=>{
    if(data) { 
      const token = localStorage.getItem("submittedFlag");
      if(token){
        alert("您已提交过 ~ ")
      }
      else{
        localStorage.setItem("submittedFlag", 'submitted');
        console.log('Post —— postWord ', data)
        postWord();
        alert("提交成功 ~ ")
      }      
    }
  },[data]);

  const { isLoading: isPostingTutorial, mutate: postWord } = useMutation(
    async () => {
      return await apiClient.post(`/form`, data    
    )},
    {
      onSuccess: (res) => { setPostResult({status: 'success',res: res}) },
      onError: (err) => { setPostResult({status: 'error', res: err.response?.data || err});},
    }
  );
  
  const applyFunc = (func, e) => {
    try { 
      alert('报名成功！')
      func(); 
    } 
    catch (err) { 
      console.log('err', err)
     }
  }

  return (
    <>
      {/* <h1 className='text-center text-4xl font-semibold mt-10'>Post a job</h1> */}
      <h1 className="pt-20 text-center text-3xl font-medium">2022 国际化学合成生物学</h1>
      <h1 className="text-center text-2xl font-medium">前沿科技论坛（杭州）</h1>
      
     <form
        className='max-w-xl m-auto py-10 mt-10 px-12 border'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="mb-3 text-gray-500">报名表单填写：</p>
        <label className='text-gray-600 font-medium'>*姓名、称呼：</label>

        <input
          className='border-solid border-gray-300 border py-1 mt-1 px-4 w-full rounded text-gray-700'
          name=''
          placeholder=''
          autoFocus
          {...register("name", {'required': "Please enter a your name.",})}
        />
        {errors?.name && (
          <div className='mb-3 text-normal text-red-500'>
            {errors?.name.message}
          </div>
        )}

        {/* Radios 单选 - 机构类型 */}
        <label className='text-gray-600 font-medium block mt-4'>机构类型：</label>
        <div> <label className='ml-4 inline-block'>
        <input
            className='mt-4 mr-1'
            value='高校、研究机构'
            type='radio'
            {...register("institution")}
          />
          高校、研究机构
        </label></div>

        <div><label className='ml-4 inline-block'>
          <input className='mt-4 mr-1' type='radio'
            value='企业' />
          企业
        </label></div>

        <div><label className='ml-4 inline-block'>
          <input className='mt-4 mr-1' type='radio'
            value='投资机构'/>
          投资机构
        </label></div>
        {errors?.institution && (
          <div className='mb-3 text-normal text-red-500 '>
            {errors?.institution.message}
          </div>
        )}



        <label className='text-gray-600 font-medium block mt-4'>就职单位名称：</label>
        <input
          className='border-solid border-gray-300 border py-1 mt-1 px-4  w-full rounded text-gray-700'
          type='text'
          placeholder=''
          {...register("employedInstitution")}
        />
        {errors?.employedInstitution && (
          <div className='mb-3 text-normal text-red-500 '>
            {errors?.employedInstitution.message}
          </div>
        )}

      <label className='text-gray-600 font-medium block mt-4'>职务：</label>
        <input
          className='border-solid border-gray-300 border py-1 mt-1 px-4  w-full rounded text-gray-700'
          type='text'
          placeholder=''
          {...register("position")}
        />
        {errors?.position && (
          <div className='mb-3 text-normal text-red-500 '>
            {errors?.position.message}
          </div>
        )}

      <label className='text-gray-600 font-medium block mt-4'>*联系方式：</label>
        <input
          className='border-solid border-gray-300 border py-1 mt-1 px-4  w-full rounded text-gray-700'
          type='text'
          placeholder='Email、手机号'
          {...register("contacts", { required: "Please enter your contacts",})}
        />
        {errors?.contacts && (
          <div className='mb-3 text-normal text-red-500 '>
            {errors?.contacts.message}
          </div>
        )}

        {/* Radios 单选 - 参与形式 */}
        <label className='text-gray-600 font-medium block mt-4'>参会形式：</label>
        <div> <label className='ml-4 inline-block'>
        <input
            className='mt-4 mr-1'
            value='线上'
            type='radio'
            {...register("participation")}
          />
          线上
        </label></div>

        <div><label className='ml-4 inline-block'>
          <input className='mt-4 mr-1' type='radio'
            value='线下' />
          线下
        </label></div>
        {errors?.participation && (
          <div className='mb-3 text-normal text-red-500 '>
            {errors?.participation.message}
          </div>
        )}

        {/* <label className='text-gray-600 font-medium block mt-4'>
          Description
        </label>
        <textarea
          className='border-solid border-gray-300 border py-20 px-4 w-full rounded text-gray-700'
          rows={5}
          cols={5}
          {...register("description",{
            required: "Please enter a job description",
          })}
        />
        {errors?.description && (
          <div className='mb-3 text-normal text-red-500 '>
            {errors?.description.message}
          </div>
        )} */}

        {/* <label className='text-gray-600 font-medium block mt-4'>
          Link to apply for this job
        </label>
        <input
          className='border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700'
          type='text'
          placeholder='https://www.customerengjobs.com'
          {...register("link", {
            required: "Please enter a link",
          })}
        />
        {errors?.link && (
          <div className='mb-3 text-normal text-red-500 '>
            {errors?.link?.message}
          </div>
        )}

        <label className='text-gray-600 font-medium block mt-4'> Email </label>
        <input className='border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700' 
          type="email" 
          {...register("email", {
            required: "Please enter a link",
          })}
        />
        {errors?.email && (
          <div className='mb-3 text-normal text-red-500 '>
            {errors?.email?.message}
          </div>
        )} */}

      
        <button
          className='mt-4 w-full rounded-md bg-black px-20  py-2 text-white border font-semibold text-md'
          type='submit'
        > 提交
        </button>
      </form>
      
      {/* <Modal showModal={showModal} /> */}
    </>
  );
};

export default From;
