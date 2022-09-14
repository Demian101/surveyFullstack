import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import apiClient from "../api/http-common";
import Select from 'react-select';
import InfoShow from './InfoShow'

const ReactQuery = () => {
  // Base part
  const [word_, setWord_] = useState("");
  const [rootOrAffix_, setRootOrAffix_] = useState("");
  const [label_, setLabel_] = useState([""]);
  const [selectValue, setSelectValue] = useState(false);
  const [waitSplit, setWaitSplit ] = useState([]);
  
  const [definition_, setDefinition_] = useState("");
  const [example_, setExample_] = useState("");
  const [soundmark_, setSoundmark_] = useState("");

  const [ex1En, setEx1En] = useState("");
  const [ex1Zh, setEx1Zh] = useState("");
  const [ex2En, setEx2En] = useState("");
  const [ex2Zh, setEx2Zh] = useState("");
  const [ex3En, setEx3En] = useState("");
  const [ex3Zh, setEx3Zh] = useState("");

  const options = [
    { value: true, label: 'isInRankList', },
    { value: false, label: 'NotInRankList' },
  ];

  // Extension part
  const [wordExt, setWordExt] = useState("")
  const [derivaWord, setDerivaWord] = useState("")
  const [synonWord, setSynonWord] = useState("")
  const [confusion, setConfuseWord] = useState("")
  
  // const [postResult, setPostResult] = useState(null);
  const [postResult, setPostResult] = useState({'status':null, 'res':null});

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  // 将 mutate 解构赋值给 postTutorial
  const { isLoading: isPostingTutorial, mutate: postWord } = useMutation(
    async () => {
      /*  源代码中是这样的， 失败了，提示我 Missing "data" payload in the request body：
      title: postTitle,
      description: postDescription,  */

      /* strapi fake backend 成功代码 ： 
      data: {      // strapi 需要用 data 再包一层，成功了
        title: postTitle,
        description: postDescription,
      } */
      const rdn = Math.random();
      return await apiClient.post(`/word`,  {
        /* 测试 Node Express 接口代码： */
        word: word_,
        rootOrAffix: rootOrAffix_,
        soundmark: soundmark_,
        definition: definition_,
        label: label_,
        isInRankList: selectValue,
        cognition: -1 , // rdn,
        ex1: { ex1En: ex1En.trim(), ex1Zh: ex1Zh.trim()},
        ex2: { ex2En: ex2En.trim(), ex2Zh: ex2Zh.trim()},
        ex3: { ex3En: ex3En.trim(), ex3Zh: ex3Zh.trim()},
      })},
    {
      onSuccess: (res) => { setPostResult({status: 'success',res: res}) },
      onError: (err) => { setPostResult({status: 'error', res: err.response?.data || err});},
    }
  );

  // Get Extra info like derivation, 
  const { isLoading: isGetingWordInfo, refetch: getExtraInfo } = useQuery(
    "query-word-extra-info",
    async () => {
      console.log('wordExt', wordExt)
      return await apiClient.get(`/word/info/${wordExt}`)
    },
    { 
      onSuccess: (res) => { setPostResult({status: 'success',res: res}) },
      onError: (err) => { setPostResult({status: 'error', res: err.response?.data || err});},
      refetchOnWindowFocus: false,
      enabled: false  // 禁用查询自动运行
    } 
  );


  // refetch 重命名为 getOneWord手动 拾取
  const { isLoading: isGetingOneWord, refetch: getOneWord } = useQuery(
    "query-word-id",
    async () => {
      console.log('wordExt', wordExt)
      return await apiClient.get(`/word/data/${wordExt}`)
    }, 
    {
      onSuccess: (res) => { setPostResult({status: 'success',res: res}) },
      onError: (err) => { setPostResult({status: 'error', res: err.response?.data || err});},
      refetchOnWindowFocus: false,
      enabled: false  // 禁用查询自动运行
    } 
  );

  console.log('wordExt: ', wordExt)
  const { isLoading: isPostingExtension, mutate: putWordExt } = useMutation(
    async () => {
      console.log('putWordExt 内部看', wordExt);    // 设置 wordExt 的 id
      return await apiClient.put(`/word/data/${wordExt}`, {
        'fType': 'extension',  // 函数类型，让后端去做处理吧。。
        word: wordExt,
        derivation: derivaWord,
        synonym: synonWord,
        confusion: confusion,
      })},
    {
      onSuccess: (res) => { setPostResult({status: 'success',res: res}) },
      onError: (err) => { setPostResult({status: 'error', res: err.response?.data || err});},
    },
    {  enabled: !!wordExt, }, // 直到`wordExt`存在，查询才会被执行
    );

    const { isLoading: isEditing, mutate: editWord } = useMutation(
      async () => {
        return await apiClient.put(`/word/${wordExt}`, {
          'fType': 'update',    // 函数类型，让后端去做处理吧
          word: word_,
          rootOrAffix: rootOrAffix_,
          label: label_,
          soundmark: soundmark_,
          definition: definition_,
          example: example_
  
          // confusion: [{}],
        })},
      {
        onSuccess: (res) => { setPostResult({status: 'success',res: res}) },
        onError: (err) => { setPostResult({status: 'error', res: err.response?.data || err});},  
      },
      { enabled: !!wordExt, },  // 直到`wordExt`存在，查询才会被执行
      );
  

  useEffect(() => {
    if (isPostingTutorial || isPostingExtension ) 
      setPostResult({status:'pending',res:"posting..."});
  }, [isPostingTutorial, isPostingExtension]);


  const applyFunc = (func, e) => {
    try { func(); } 
    catch (err) { setPostResult(fortmatResponse(err)); }
  }

  const clearPostOutput = () => {
    setPostResult(null);
  };

  const handleWaitSplit = (str) => {
    setWaitSplit(str)
    const tempArr = str.split(" ").filter(i => i != "")
    const [word_, soundmark_] = tempArr
    const definition_ = tempArr.slice(2, ).join(" ")
    setWord_(word_)
    setSoundmark_(soundmark_)
    setDefinition_(definition_)
    console.log('word_,soundmark_,definition_', word_,soundmark_,definition_)
  }
  return (
    <div id="app" className="container">
      <div className="card">
        <div className="text-xl">React Query Axios POST - </div>
        <div className="card-body">

          <div className="">
            <input className='bg-slate-200'
              type="text"
              value={waitSplit}
              onChange={(e) => handleWaitSplit(e.target.value)}
              placeholder="write a line ... "
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              value={word_}
              onChange={(e) => setWord_(e.target.value)}
              placeholder="write word ... "
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              value={rootOrAffix_}
              onChange={(e) => setRootOrAffix_(e.target.value)}
              placeholder="write rootOrAffix_ ... "
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={label_}
              onChange={(e) => setLabel_( e.target.value.split(",").map(i => i.trim()) ) }
              className="form-control"
              placeholder="write label_ ..."
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={soundmark_}
              onChange={(e) => setSoundmark_(e.target.value)}
              className="form-control"
              placeholder="write soundmark ..."
            />
          </div>
          <div>
            <input type="text"
              value={definition_}
              onChange={(e) => setDefinition_(e.target.value)}
              placeholder="write definition ..."
            />
          </div>

          {/* 六重例句 */}
          <div> 
            <input type="text" value={ex1En} onChange={(e) => setEx1En(e.target.value)}
              placeholder="example1 en ..." /> 
          </div>
          <div> 
            <input type="text" value={ex1Zh} onChange={(e) => setEx1Zh(e.target.value)}
              placeholder="example1 zh ..." /> 
          </div>

          <div> 
            <input type="text" value={ex2En} onChange={(e) => setEx2En(e.target.value)}
              placeholder="example2 en ..." /> 
          </div>
          <div> 
            <input type="text" value={ex2Zh} onChange={(e) => setEx2Zh(e.target.value)}
              placeholder="example2 zh ..." /> 
          </div>
          <div> 
            <input type="text" value={ex3En} onChange={(e) => setEx3En(e.target.value)}
              placeholder="example3 en ..." /> 
          </div>
          <div> 
            <input type="text" value={ex3Zh} onChange={(e) => setEx3Zh(e.target.value)}
              placeholder="example3 zh ..." /> 
          </div>


          <Select 
            options={options} 
            defaultValue={options[1]}
            onChange={(e) => setSelectValue(e.value)} />

          <button className="border-2 rounded-md bg-slate-300 m-2" onClick={(e) => applyFunc(postWord)}>
            Post Data
          </button>
          <button
            className="border-2 rounded-md bg-slate-300 m-2"
            onClick={clearPostOutput}
          >
            Clear
          </button>


          {/* 前端 展现 Post 的结果 response 信息 */}
          <InfoShow {...postResult}  />
          {/* {postResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{postResult}</pre>
            </div>
          )} */}
        </div>
        <hr />







        <hr /> 
        <div className="text-xl "> Extension POST - </div>
          <div>
            <input
              type="text"
              value={wordExt}
              onChange={(e) => setWordExt(e.target.value) }
              placeholder="write wordExt ... "
            />
          </div> 
          <div>
            <input
              type="text"
              value={derivaWord}
              onChange={(e) => setDerivaWord(e.target.value)}
              placeholder="write derivaWord ... "
            />
          </div> 
          <div>
            <input
              type="text"
              value={synonWord}
              onChange={(e) => setSynonWord(e.target.value)}
              placeholder="write synonWord ... "
            />
          </div> 
          <div>
            <input
              type="text"
              value={confusion}
              onChange={(e) => setConfuseWord(e.target.value)}
              placeholder="write confusion Word ... "
            />
          </div> 

          <button className="border-2 rounded-md bg-slate-300 m-2" onClick={(e) => applyFunc(putWordExt)}>
            Put Data（Ext
          </button>

          <hr />
          <hr />
          
          <button className="border-2 rounded-md bg-slate-300 m-2" onClick={(e) => applyFunc(getExtraInfo)}>
            Get All Data
          </button>

      </div>
    </div>
  );
}
export default ReactQuery;