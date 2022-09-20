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
                  <div className="font-semibold text-left">姓名</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">联系方式</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">机构类型</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">就职单位</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">职位</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">参会方式</div>
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
                    <td className="p-2"> {item?.contacts} </td>
                    <td className="p-2"> {item?.institution} </td>
                    <td className="p-2"> {item?.employedInstitution} </td>
                    <td className="p-2"> {item?.position} </td>
                    <td className="p-2"> {item?.participation} </td>
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
