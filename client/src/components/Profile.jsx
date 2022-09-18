import React, {useState, useEffect} from "react";
import { useQuery } from "react-query";
import { ReactReduxContext } from 'react-redux';
import httpClient from "../api/http-common";
import store from '../store';



const Profile = () => {

  
  const [postResult, setPostResult] = useState({'status':null, 'res':null});

  const token = store.getState().auth?.token

  // refetch 重命名为 getOneWord手动 拾取
  const { data, status, getForm } = useQuery(
    ['query-form-info', token],
    async () => {
      return await httpClient.get(`/form`)
    },
    {
      onSuccess: (res) => { 
        setPostResult({status: 'success',res: res?.data}) 
        console.log('res',res)
      },
      onError: (err) => { setPostResult({status: 'error', res: err.response?.data || err});},
      refetchOnWindowFocus: true,
      enabled: true
      // enabled: false  // 禁用查询自动运行
      // 监听 本地 localStorage 事件
    } 
  );

  if(status === "loading") {
    return  <p>Loading...</p>
  }

  return data ? (      
    <section className="antialiased bg-gray-100 text-gray-600 h-auto px-4 pt-10" x-data="app">
    <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
            <div className="font-semibold text-gray-800">报名表单 </div>
        </header>

        <div className="overflow-x-auto p-3">
            <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th></th>
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Quantity</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Total</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>

            <tbody className="text-sm divide-y divide-gray-100">
            
              {/* <!-- record 1 --> */}

               { postResult?.res?.map( item => {
                    return (
                      <tr key={item._id}>
                        <td className="p-2">
                        <input type="checkbox" className="w-5 h-5" value="id-1"
                        click="toggleCheckbox($el, 2890.66)" />
                    </td>
                    <td className="p-2">
                        <div className="font-medium text-gray-800">
                        {item?.name}
                        </div>
                    </td>
                    <td className="p-2">
                        {item?.contacts}
                    </td>
                    <td className="p-2">
                        <div className="text-left font-medium text-green-500">
                        RM 2,890.66
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center">
                        <button>
                            <svg className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                            </path>
                            </svg>
                        </button>
                        </div>
                    </td>
                    </tr>
                    )
                })}

            </tbody>
            </table>
        </div>


        <div className="flex justify-end font-bold space-x-4 text-base border-t border-gray-100 px-5 py-4">
            <div>Develop By @Demian https://github.com/Sodaoo</div>
        </div>

        </div>
    </div>
    </section> 
    ):null

};

export default Profile;
