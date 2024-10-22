# **流程大师开放接口文档**
**1. 文档说明**
### **1.1. 阅读对象**
本文档主要描述流程大师开放接口的输出标准。  

本文档为流程大师接入方技术人员提供指引和帮助。
### **1.2. 版本**

|版本|更新时间|更新内容|
| :- | :- | :- |
|v1.0|2023-10-26|初稿|

## **2. 接入指引**

### **2.1. 接入前的相关准备工作**
- 先在流程大师管理后台，点击生成授权码
- 在对应的流程设置中设置流程数据推送地址
- 实现对应事件接口

## **3. 接口规则**
### **3.1. 协议规则**

- 从Header里面Authorization里面获取accessToken
- 第三方系统验证accessToken是否合法

  **样例：** Authorization = Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI4NzBmYzMzYjZlZTA0NmY0YjBiZDdhZjUwZmEwMzZlMyx3b3JrcGx1cyIsInRlbmFudElkIjoiODcwZmMzM2I2ZWUwNDZmNGIwYmQ3YWY1MGZhMDM2ZTMiLCJpYXQiOjE2OTU3MTI5MTIsImRvbWFpbklkIjoid29ya3BsdXMiLCJ0aW1lc3RhbXAiOjE2OTU3MTI5MTI4NTh9.-9SGTTk32e4qDWDYyVCNKM7ZpnYccFdoRMMWdbrTZJM

### **3.2. 事件订阅说明**

#### **3.2.1. 响应说明**

响应http 200即可
### **3.3. 事件说明**

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
|date|日期按件|
|number|数值控件|
|textarea|多行文本控件|
|select\_employee|选人控件|
|image|图片|
|file|文件|
|address|地区控件|
|sub\_form|子表单|
#### **3.3.2. 流程审批结束事件**

**请求方式：POST：**

**path：/{baseUrl}/endEvent**

**业务请求参数：**

|**字段名**|**类型**|**必填**|**说明**|
| :- | :-: | :-: | :- |
|type|String|是|事件类型：Complete:流程审批结束|
|processInstanceId|String|是|流程实例ID|
|processDefKey|String|是|流程定义KEY|
|tenantId|String|是|组织ID|
|domainId|String|是|域ID|
|body|ProcessEndBody|是|数据实体|

ProcessEndBody


|**字段名**|**类型**|**必填**|**说明**|
| :- | :-: | :-: | :- |
|startUser|String|是|发起人|
|components|List`<component>`|是|控件及值集合|

Component

|**字段名**|**类型**|**必填**|**说明**|
| :- | :-: | :-: | :- |
|componentType|String|否|控件类型|
|id|String|是|控件ID|
|name|String|否|控件名称|
|value|String|是|控件值|
|children|List`<Component>`|否|子控件值|

**请求示例**

~~~ json
{
    "type": "Complete",
    "processDefKey": "Pro_c97372149f384e5c84c8f5fcabd937e2",
    "processInstanceId": "1005",
    "tenantId": "870fc33b6ee046f4b0bd7af50fa036e3",
    "domainId": "workplus",
    "body": {
        "startUser": "b6089535811243b2b5d10b5b42bd2892",
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
        ]
    }
}
~~~

**业务响应参数：无**



