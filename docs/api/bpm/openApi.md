# **流程大师开放接口文档**
**1. 文档说明**
### **1.1. 阅读对象**
本文档主要描述流程大师开放接口的输出标准。  

本文档为流程大师接入方技术人员提供指引和帮助。
### **1.2. 版本**

|版本|更新时间|更新内容|
| :- | :- | :- |
|v1.0|2023-09-26|初稿|
## **2. 接入指引**
### **2.1. 接入前的相关准备工作**
先在流程大师管理后台，点击生成授权码
## **3. 接口规则**
### **3.1. 协议规则**
- 通过管理后面获取到accessToken
- 在调接口时将accessToken放在Header里面Authorization里面

  **样例：** Authorization = Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI4NzBmYzMzYjZlZTA0NmY0YjBiZDdhZjUwZmEwMzZlMyx3b3JrcGx1cyIsInRlbmFudElkIjoiODcwZmMzM2I2ZWUwNDZmNGIwYmQ3YWY1MGZhMDM2ZTMiLCJpYXQiOjE2OTU3MTI5MTIsImRvbWFpbklkIjoid29ya3BsdXMiLCJ0aW1lc3RhbXAiOjE2OTU3MTI5MTI4NTh9.-9SGTTk32e4qDWDYyVCNKM7ZpnYccFdoRMMWdbrTZJM

### **3.2. 接口请求地址**

#### **3.2.1. 测试环境**
接口地址：
#### **3.2.2. 响应说明**
接口响应HTTP状态码：200成功、400~500响应失败

**正常响应：** 正常响应body既为响应体

**异常响应：**

~~~ json
{
    "code": 4000, //异常码
    "message": "start user is null", //异常说明
}
~~~

#### **3.2.3. 异常码说明**

|**异常码**|**说明**|
| :- | :- |
|4000|参数不正确|
|4010|token未初始或者未找到|
|4011|流程不存在|
|4012|组织不存在|
### **3.3. 业务接口**
#### **3.3.1. 控件类型说明**

|**类型**|**说明**|
| :- | :- |
|text|文本控件|
|money|金额控件|
|description|说明控件|
|selection|下拉单选控件|
|double\_selection|二级下拉控件|
|mobile|手机号控件|
|phone|电话控件|
|email|邮箱控件|
|multi\_selection|多选下拉控件|
|date\_range|日期区间控件|
|date|日期控件|
|number|数值控件|
|textarea|多行文本控件|
|select\_employee|选人控件|
|address|地区控件|
|sub\_form|子表单|
|image|图片(先通过文件上传接口上传文件，获取信息)|
|file|文件(先通过文件上传接口上传文件，获取信息)|
#### **3.3.2. 流程发起请求体示例**
**用户可以通过管理后台页面点击生成请求体**

~~~ json
{
    "components": [
        {
            "componentType": "text",
            "id": "field_1698028228850",
            "name": "单行输入框",
            "value": "单行输入框"
        },
        {
            "componentType": "money",
            "id": "field_1698028251958",
            "name": "金额",
            "value": "100.2"
        },
        {
            "componentType": "description",
            "id": "field_1698028269922",
            "name": "说明文字",
            "value": "说明文字"
        },
        {
            "componentType": "selection",
            "id": "field_1698028300837",
            "name": "下拉单选框",
            "value": "语文"
        },
        {
            "componentType": "double_selection",
            "id": "field_1698028339455",
            "name": "两级下拉框",
            "value": "[\"一级\",\"一级选项一\"]"
        },
        {
            "componentType": "mobile",
            "id": "field_1698028492437",
            "name": "手机",
            "value": "18689446666"
        },
        {
            "componentType": "address",
            "id": "field_1715928122970",
            "name": "地址",
            "value": "广东省,广州市,天河区"
        },
        {
            "componentType": "phone",
            "id": "field_1698028505270",
            "name": "电话",
            "value": "020-62902300"
        },
        {
            "componentType": "email",
            "id": "field_1698028518854",
            "name": "邮箱",
            "value": ht@foreverht.com
        },
        {
            "componentType": "multi_selection",
            "id": "field_1698028536419",
            "name": "下拉多选框",
            "value": "[\"选项一\",\"选项二\"]"
        },
        {
            "componentType": "textarea",
            "id": "field_1698028608587",
            "name": "多行输入框",
            "value": "多行输入框"
        },
        {
            "componentType": "date_range",
            "id": "field_1698028580721",
            "name": "开始时间-结束时间",
            "value": "[\"2023-09-27\",\"2023-09-30\"]"
        },
        {
            "componentType": "number",
            "id": "field_1698028596152",
            "name": "数字",
            "value": "100"
        },
        {
            "componentType": "date",
            "id": "field_1698028568853",
            "name": "日期",
            "value": "2023-09-27"
        },
        {
            "componentType": "file",
            "id": "field_1699604314294",
            "name": "上传文件",
            "value": "[{\"mediaId\":\"cea4ca201327434b8840065a247cad83\",\"name\":\"文件1.xlsx\",\"size\":\"16578\"},{\"mediaId\":\"f2098402deea4c879a6bfd062e1189ae\",\"name\":\"文件2.pdf\",\"size\":\"130365\"}]"
        },
        {
            "componentType": "image",
            "id": "field_1699604304228",
            "name": "上传图片",
            "value": "[{\"mediaId\":\"dccb20a170e04594ba1253e9b43784be\",\"name\":\"9ys.png\"},{\"mediaId\":\"8f0e8da9a4b949aab03c19bbb17d7810\",\"name\":\"230525065159503.jpg\"}]"
        },
        {
            "componentType": "select_employee",
            "id": "field_1699604289417",
            "name": "选择人员",
            "value": "[\"dccb20a170e04594ba1253e9b43784be\",\"8f0e8da9a4b949aab03c19bbb17d7810\"]"
        },
        {
            "componentType": "sub_form",
            "id": "field_1715927850975",
            "name": "子表单",
            "children": [
                [
                    {
                        "componentType": "selection",
                        "id": "field_1715927983091",
                        "name": "下拉单选框",
                        "value": "选项1"
                    },
                    {
                        "componentType": "description",
                        "id": "field_1715928104319",
                        "name": "说明文字",
                        "value": "说明文字"
                    },
                    {
                        "componentType": "file",
                        "id": "field_1715928095086",
                        "name": "上传文件",
                        "value": "[{\"mediaId\":\"cea4ca201327434b8840065a247cad83\",\"name\":\"文件1.xlsx\",\"size\":\"16193\"},{\"mediaId\":\"f2098402deea4c879a6bfd062e1189ae\",\"name\":\"文件2.pdf\",\"size\":\"130365\"}]"
                    },
                    {
                        "componentType": "phone",
                        "id": "field_1715928148320",
                        "name": "电话",
                        "value": "020-62902300"
                    },
                    {
                        "componentType": "select_employee",
                        "id": "field_1715928157455",
                        "name": "选择人员",
                        "value": "[\"14022c636c7844edba507af7cd37aff6\"]"
                    },
                    {
                        "componentType": "email",
                        "id": "field_1715928140720",
                        "name": "邮箱",
                        "value": ht@foreverht.com
                    },
                    {
                        "componentType": "mobile",
                        "id": "field_1715928132988",
                        "name": "手机",
                        "value": "18689446666"
                    },
                    {
                        "componentType": "address",
                        "id": "field_1715928122970",
                        "name": "地址",
                        "value": "广东省,广州市,天河区"
                    },
                    {
                        "componentType": "double_selection",
                        "id": "field_1715928038837",
                        "name": "两级下拉框",
                        "value": "[\"选项一\",\"一级选项一\"]"
                    },
                    {
                        "componentType": "image",
                        "id": "field_1715928086509",
                        "name": "上传图片",
                        "value": "[{\"mediaId\":\"dccb20a170e04594ba1253e9b43784be\",\"name\":\"9ys.png\"},{\"mediaId\":\"8f0e8da9a4b949aab03c19bbb17d7810\",\"name\":\"230525065159503.jpg\"}]"
                    },
                    {
                        "componentType": "multi_selection",
                        "id": "field_1715928015492",
                        "name": "下拉多选框",
                        "value": "[\"选项一\",\"选项二\"]"
                    },
                    {
                        "componentType": "date_range",
                        "id": "field_1715927973272",
                        "name": "开始时间-结束时间",
                        "value": "[\"2023-09-27\",\"2023-09-30\"]"
                    },
                    {
                        "componentType": "date",
                        "id": "field_1715927965007",
                        "name": "日期",
                        "value": "2023-09-27"
                    },
                    {
                        "componentType": "money",
                        "id": "field_1715927957122",
                        "name": "金额",
                        "value": "100.2"
                    },
                    {
                        "componentType": "text",
                        "id": "field_1715927861391",
                        "name": "单行输入框",
                        "value": "单行输入框"
                    },
                    {
                        "componentType": "number",
                        "id": "field_1715927885923",
                        "name": "数字",
                        "value": "100"
                    },
                    {
                        "componentType": "textarea",
                        "id": "field_1715927871473",
                        "name": "多行输入框",
                        "value": "多行输入框"
                    }
                ]
            ]
        }
    ],
    "deptId": null,
    "originatorUserId": null,
    "processDefKey": "Pro_c97372149f384e5c84c8f5fcabd937e2"
}
~~~


#### **3.3.3. 流程发起接口**
**请求方式：POST：**

**path：/open/runtime/process-instances**

**业务请求参数：**

|**字段名**|**类型**|**必填**|**说明**|
| :- | :-: | :-: | :- |
|originatorUserId|String|是|发起人ID|
|deptId|String|是|发起人部门ID|
|processDefKey|String|是|流程定义KEY|
|components|List`<Component>`|是|控件组|

Component

|**字段名**|**类型**|**必填**|**说明**|
| :- | :-: | :-: | :- |
|componentType|String|否|控件类型|
|id|String|是|控件ID|
|name|String|否|控件名称|
|value|String|是|控件值|
|children|List`<Component>`|否|子控件值|

**业务响应参数：**

|**字段名**|**类型**|**必填**|**说明**|
| :- | :-: | :-: | :- |
||String|是|流程实例ID|

#### **3.3.4. 流程文件上传接口(multipart/form-data)**
**请求方式：POST：**

**path：/open/repository/files**

**业务请求参数：**

|**字段名**|**类型**|**必填**|**说明**|
| :- | :-: | :-: | :- |
|file|Stream|是|文件流（multipart/form-data）|

**业务响应参数：**

|**字段名**|**类型**|**必填**|**说明**|
| :- | :-: | :-: | :- |
|mediaId|String|是|媒体ID|
|name|String|是|文件名称|
|size|String|是|文件大小|
|contentType|String|是|文件类型|

#### **3.3.5. 流程文件下载接口**
**请求方式：GET：**

**path：/open/repository/files/{id}**

**业务请求参数：**

|**字段名**|**类型**|**必填**|**说明**|
| :- | :-: | :-: | :- |
|id|String|是|mediaId|

**业务响应参数：**

|**字段名**|**类型**|**必填**|**说明**|
| :- | :-: | :-: | :- |
|mediaId|String|是|媒体ID|
|name|String|是|文件名称|
|bytes|byte[]|是|文件内容|
|size|String|是|文件大小|
|contentType|String|是|文件类型|

