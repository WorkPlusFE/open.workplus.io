# 日程

::: tip 对接前须知
1. 以下接口只能以应用身份([应用token](/api/getStart))调用，否则会报参数错误；
2. 应用在自己的业务系统中维护日程副本，用于在接口调用中对指定参数的赋值；
3. 应用只能操作以自己身份建的日程，不能操作以用户身份或其它应用身份创建的日程；
:::

## 创建日程

**请求地址：**

```plain
POST /v1/apps/schedules?access_token={access_token}
```

**请求参数：**

|参数名|数据类型|是否必填|说明|
|:----|:----|:----|:----|
|summary|String|Y|日程标题|
|description|String|N|日程备注|
|location|String|N|日程地点|
|repeat_type|String|Y|日程重复类型：none - 不重复；daily - 每天重复；weekly - 每周重复；monthly - 每月重复； yearly - 每年重复； workday - 工作日重复|
|full_time|Boolean|Y|是否全天日程，为true时忽略上送的begin_time和end_time的时分，此时日程开始时间的时分为00:00，结束日时间的时分为23:59|
|begin_time|Long|Y|日程开始时间戳|
|end_time|Long|Y|日程结束时间戳|
|reminder|Object|Y|日程提醒，参考ScheduleReminder参数说明|
|owner|String|Y|日程组织者用户名|
|attendees|List[String]|N|日程参与者用户名|
|attachments|List[Object]|N|日程附件，参考Attachment参数说明|
|attendee_notice|Boolean|N|是否通知参与人，默认为true|
|repeat_end_date|Long|N|日程重复结束时间戳，为空则为永不结束|
|jump_url|String|N|跳转链接|
|source|String|Y|数据源，声明日程数据来源，双方协商一个固定值|

ScheduleReminder参数说明：

|参数名|数据类型|是否必填|说明|
|:----|:----|:----|:----|
|remind|Boolean|Y|是否提醒|
|remind_before_seconds|Int|Y|日程开始前多少秒提醒|


Attachment参数说明：

|参数名|数据类型|是否必填|说明|
|:----|:----|:----|:----|
|media_id|String|Y|媒体id|
|name|String|Y|文件名|
|file_type|String|Y|日程重复类型：none - 不重复；daily - 每天重复；weekly - 每周重复；monthly - 每月重复； yearly - 每年重复； workday - 工作日重复文件类型|
|size|Long|Y|文件大小|
|thumbnail|String|N|文件缩略图媒体id|


**请求示例：**

```json
{
	"description": "test",
    "owner": "user",
	"attendees": [],
	"repeat_type": "monthly",
	"end_time": 1695281400000,
	"location": "GuangZhou",
	"summary": "test01",
	"begin_time": 1695277800000,
	"attachments": [],
	"full_time": false,
	"reminder": {
		"remind": true,
		"remind_before_seconds": 900
	},
    "attendee_notice": true,
    "source": "123"
}
```

**响应参数：**

|参数名|数据类型|是否必填|说明|
|:----|:----|:----|:----|
|id<br>|String<br>|Y<br>|用户日程id|
|schedule_id<br>|String<br>|Y<br>|日程id<br>|
|excludes|List[Object]|N|日程排除日期，参考DatePeriod参数说明|

DatePeriod参数说明：

|参数名|数据类型|是否必填|说明|
|:----|:----|:----|:----|
|begin_date|Int|Y|媒体id开始日期，yyyyMMdd|
|end_date|Int|Y|结束日期，yyyyMMdd|


**响应示例：**

```json
{
	"status": 0,
	"message": "ok",
	"result": {
		"id": "3c05626a7b62448fa1ada34311aa8583",
		"calendar_id": "a27f6fda81694699af15b6358044ef18",
		"schedule_id": "d6658e8c279d4123bc04c5dfa6294f54",
		"schedule_role": "owner",
		"owner": {
			"domain_id": "workplus",
			"user_id": "a27f6fda81694699af15b6358044ef18",
			"username": "user",
			"name": "user"
		},
		"creator": {
			"domain_id": "workplus",
			"user_id": "a27f6fda81694699af15b6358044ef18",
			"name": "app"
		},
		"domain_id": "workplus",
		"user_id": "a27f6fda81694699af15b6358044ef18",
		"username": "test",
		"name": "test",
		"status": "all_accepted",
		"accepted_date": -1,
		"full_time": false,
		"summary": "test",
		"description": "test01",
		"location": "GuangZhou",
		"repeat_type": "monthly",
		"begin_time": 1200,
		"end_time": 1300,
		"span_days": 0,
		"begin_date": 20230921,
		"end_date": 20331231,
		"excludes": [],
		"reminder": {
			"remind": true,
			"remind_before_seconds": 900
		},
		"attachments": [],
		"attendees": [],
		"disabled": false,
		"create_time": 1695268299868,
		"modify_time": 1695268299868
	}
}
```

## 修改日程信息

**请求地址：**

```plain
POST /v1/apps/schedules/{schedule_id}?access_token={access_token}
```

**请求参数：**

|参数名|数据类型|是否必填|说明|
|:----|:----|:----|:----|
|ops|String|Y|操作类型，固定为update|
|summary|String|Y|日程标题|
|description|String|N|日程备注|
|location|String|N|日程地点|
|repeat_type|String|Y|日程重复类型：none - 不重复；daily - 每天重复；weekly - 每周重复；monthly - 每月重复； yearly - 每年重复； workday - 工作日重复|
|full_time|Boolean|Y|是否全天日程，为true时忽略上送的begin_time和end_time的时分，此时日程开始时间的时分为00:00，结束日时间的时分为23:59|
|begin_time|Long|Y|日程开始时间戳|
|end_time|Long|Y|日程结束时间戳|
|reminder|Object|Y|日程提醒，参考ScheduleReminder参数说明|
|attendees|List[String]|N|日程参与者用户名|
|attachments|List[Object]|N|日程附件，参考Attachment参数说明|
|attendee_notice|Boolean|N|是否通知参与人，默认为true|
|repeat_end_date|Long|N|日程重复结束时间戳，为空则为永不结束|
|jump_url|String|N|跳转链接|
|update_today_only|Boolean|N|是否只修改当天日程，默认为false|
|excludes|List[Object]|N|日程排除日期，参考DatePeriod参数说明|
|schedule_date|Long|Y|修改日程的日期|

**请求示例：**

```json
{
    "ops": "update",
	"description": "test",
	"attendees": [],
	"repeat_type": "monthly",
	"end_time": 1695281400000,
	"location": "GuangZhou",
	"summary": "test01",
	"begin_time": 1695277800000,
	"attachments": [],
	"full_time": false,
	"reminder": {
		"remind": true,
		"remind_before_seconds": 900
	},
    "attendee_notice": true,
    "schedule_date": 1695277800000
}
```

**响应示例：**

```json
{
    "status":0,
    "message":"ok",
    "result":[
        {
            "id":"3c05626a7b62448fa1ada34311aa8583",
            "calendar_id":"a27f6fda81694699af15b6358044ef18",
            "schedule_id":"d6658e8c279d4123bc04c5dfa6294f54",
            "schedule_role":"owner",
            "owner":{
                "domain_id":"workplus",
                "user_id":"a27f6fda81694699af15b6358044ef18",
                "username":"user",
                "name":"user"
            },
            "creator":{
                "domain_id":"workplus",
                "user_id":"a27f6fda81694699af15b6358044ef18",
                "name":"app"
            },
            "domain_id":"workplus",
            "user_id":"a27f6fda81694699af15b6358044ef18",
            "username":"test",
            "name":"test",
            "status":"all_accepted",
            "accepted_date":-1,
            "full_time":false,
            "summary":"test",
            "description":"test01",
            "location":"GuangZhou",
            "repeat_type":"monthly",
            "begin_time":1200,
            "end_time":1300,
            "span_days":0,
            "begin_date":20230921,
            "end_date":20331231,
            "excludes":[],
            "reminder":{
                "remind":true,
                "remind_before_seconds":900
            },
            "attachments":[],
            "attendees":[],
            "disabled":false,
            "create_time":1695268299868,
            "modify_time":1695268299868
        }
    ]
}
```


## 删除日程

**请求地址：**

```plain
POST /v1/apps/schedules/{schedule_id}?access_token={access_token}
```

**请求参数：**

|参数名|数据类型|是否必填|说明|
|:----|:----|:----|:----|
|ops|String|Y|操作类型，固定为delete<br>|

**请求示例：**

```json
{
    "ops": "delete"
}
```


