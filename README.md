不好解决的遗留问题: 

```js
1. WordById.derivation 中的 ID 重复 : 
WordById.derivation:  [
  new ObjectId("630a1f5ea480451e641a5fa8"),
  new ObjectId("630a1f5ea480451e641a5fa8"),
]
```



```React
// 组件层级

<Main />       // Fetch Data
  <WordPreview />   // 显示 wordCurrent  的信息+ 控制内容

```



单词样本：

```bash
# 第一个主词：
illustrate  /'ɪləstreɪt/  v. 表明；说明；证明
-ill  ....
label1,label2
illustrate his point. 
说明他的论点
illustrate all the changes/illustrate date
解释变化/解释数据
[isInRankList]

# 第二个主词：
illustration  /ˌɪlə'streɪʃn/  n. 例证; 说明
[isSlave]

# 近反义词
interpretation  /ɪnˌtɜːrprɪ'teɪʃn/ n. 解释, 说明, 阐明
interpret  /in'tə:prit/  vi. 解释；翻译
> She interpret his silence as arrogance. 她把他的沉默解释为傲慢。
> It is difficult for many people to accept the interpretation.
> 很多人难以接受这个解释。


Extension POST -

illustrate
衍生：illustration
近反义词：interpret,interpretation
```



分 Master Slave 的原因 ？ 



待开发:

```
单词句中高亮;
提交成功的弹窗;
每日打卡系统


前端 React-Query:
- 用户注册/登录 ;

后端 API : 
- [post] word Add
```





开发原则: 

1. 样式后期再细调, 前期关注功能 ; 
2. 前端一开始使用 strapi 进行 fake ;



开发日记: 

```
0821 : 确定开发技术栈, 制作前端样板文件
0822 : 
  √ 单词展示页
```







# Preview

<img src="http://imagesoda.oss-cn-beijing.aliyuncs.com/Sodaoo/2022-06-28-144156.png" style="zoom:40%;" />

运行项目：

```bash
yarn
yarn dev
or yarn preview

打包： yarn build
```





### tailwind 讲解 

relative 相对定位 : 

- 如果想让子元素相对于父元素绝对定位 , 使用子绝父相 ; 
- 如果子元素和父元素都是 relative , 那么都是相对于文档流来定位, 互不影响

```react
      <div className="relative w-full h-5 ">
        <img src={big_right_circle} width="256" height="256"
          viewBox="0 0 256 256" className="absolute right-0 -z-10" />
      </div>
这里的 big_right_circle 相对于 div 父元素绝对定位
div 父元素遵循文档流 ,在上一个 div 的下面自然出现 ;
```



  

`grid justify-items-center` : 

上下分别是 无 `justify-items-center`  和 有 `justify-items-center`  的区别 : 

![](http://imagesoda.oss-cn-beijing.aliyuncs.com/Sodaoo/2022-06-29-020406.png)
