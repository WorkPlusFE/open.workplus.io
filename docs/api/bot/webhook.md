# Webhook机器人

```plain
POST: webhook机器人地址
```
webhook机器人地址创建机器人里由系统生成

![webhook](/webhook/webhook.png)

## 调用频率限制

由于消息发送太频繁会严重影响群的使用体验，因此自定义机器人发送消息的频率限制如下：

每个机器人每分钟最多发送20条消息到群里，如果超过20条，会限流10分钟。



## 发送消息

格式如下：

```json
// application/json
{
    "type": "rich_text",
    "user_ids":
    [
        "87c67a711e5843bbbd53ba3266fc2fba",
        "4fd9a6919b59407eb34b391c05a0e0fa",
        "e5aeec56d8814d7e91ac8f447925b3df",
        "b2668ab78bdc4cf59f9d11ea9cd1362c"
    ],
   "usernames":
    [
        "username1",
        "username2"
    ],
    "body":
    {
        "content": "{\"content\":[[{\"width\":420,\"media_id\":\"http://172.16.1.23/rich/images/notify.png\",\"tag\":\"img\",\"height\":280}],[{\"style\":{\"color\":\"black\",\"bold\":true},\"tag\":\"text\",\"text\":\"黄赐飞\"},{\"tag\":\"text\",\"text\":\"的\"},{\"style\":{\"color\":\"black\",\"bold\":true},\"tag\":\"text\",\"text\":\"《测试机器人》\"},{\"tag\":\"text\",\"text\":\"待办，已处理成功\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"发起时间\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"2024-01-12 17:42:32\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"单行输入框\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"给一个默认值吧\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"多行输入框\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"数字\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"5\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"金额\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"20 元\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"日期\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"2024-01-12\"}]],\"title\":\"审批完成\"}",
        "summary": "审批完成",
        "format": "rich_text"
    },
    "actions":
    [
        [
            {
                "name": "查看详情",
                "values":
                {},
                "url":
                {
                    "pc": "http://172.16.1.23/pc/#!/detail?id=270092&taskId=&type=Normal&referer=robot&ticket={{ticket}}&userId={{userId}}&orgCode={{orgCode}}&domainId={{domainId}}",
                    "android": "http://172.16.1.23/mobile/detail.html?id=270092&taskId=&type=Normal&operationType=Approved&referer=robot",
                    "ios": "http://172.16.1.23/mobile/detail.html?id=270092&taskId=&type=Normal&operationType=Approved&referer=robot"
                },
                "type": "button"
            },
            {
                "name": "列表",
                "values":
                {},
                "url":
                {
                    "pc": "http://172.16.1.23/pc/#!/IM?&imType=Approved&ticket={{ticket}}&userId={{userId}}&orgCode={{orgCode}}&domainId={{domainId}}",
                    "android": "http://172.16.1.23/mobile/index_IM.html?&imType=Approved",
                    "ios": "http://172.16.1.23/mobile/index_IM.html?&imType=Approved"
                },
                "type": "button"
            }
        ]
    ],
    "action_acl":
    {
        "visible":
        [
            "b2668ab78bdc4cf59f9d11ea9cd1362c"
        ],
        "invisible":
        [
            "87c67a711e5843bbbd53ba3266fc2fba",
            "4fd9a6919b59407eb34b391c05a0e0fa",
            "e5aeec56d8814d7e91ac8f447925b3df"
        ],
        "allows":
        [
            "b2668ab78bdc4cf59f9d11ea9cd1362c"
        ],
        "denies":
        [
            "87c67a711e5843bbbd53ba3266fc2fba",
            "4fd9a6919b59407eb34b391c05a0e0fa",
            "e5aeec56d8814d7e91ac8f447925b3df"
        ],
        "deny_alert": "你不能操作别人的消息"
    }
}
```


### **参数说明**

|字段|类型|是否必填|说明|
|:----|:----|:----|:----|
|type|String|Y|消息类型text/image/voice/video/file/template/rich_text|
|body|String|Y|消息体，参考[body 参数说明](/api/bot/response#body参数说明)|
|usernames|Array|N|如果有值，则会发给会话的指定成员，  群聊：会发给指定成员  频道：会发给指定成员如果没值，则发给会话所有人|
|user_ids|Array|N|如果有值，则会发给会话的指定成员，  群聊：会发给指定成员  频道：会发给指定成员如果没值，则发给会话所有人|
|actions|Json|N|消息按钮第一层数据代表的多少行按钮[目前最多5个]，第二层数据代表一行有多少个按钮[目前最多5个]参考[消息按钮说明 - action参数说明](/api/bot/response#按钮actions)|
|action_acl|Json|N|按钮访问控制 参考[消息按钮说明 - action_acl参数说明](/api/bot/response#按钮访问控制action-acl)|



## 自定义机器人安全设置

为了确保自定义机器人使用过程的安全性，我们提供三种保护措施来保障你的自定义机器人安全运行。这些措施包括：设置自定义关键词、加签（使用签名加密）和 IP 地址（段）。通过这些方法，可以有效保护你的机器人不受恶意攻击


### 自定义关键词

最多可以设置10个关键词，消息中至少包含其中1个关键词才可以发送成功。

例如添加了一个自定义关键词：监控报警，则这个机器人所发送的消息，必须包含监控报警这个词，才能发送成功。


### 加签

加签的方式是机器人与开发者双向进行安全认证，以此来验证安全性。具体加签计算步骤如下：

1. 将时间戳 timestamp 和密钥 secret 当做签名字符串，使用HmacSHA256算法计算签名，然后进行Base64 encode，最后再把签名参数再进行urlEncode，得到最终的签名（需要使用UTF-8字符集）。

签名计算示例代码（Java）

```plain
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.codec.binary.Base64;
import java.net.URLEncoder;

public class Test{
    public static void main(String[] args) throws Exception{
        Long timestamp = System.currentTimeMillis();
        String secret = "this is secret";

        String stringToSign = timestamp + "\n" + secret;
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(new SecretKeySpec(secret.getBytes("UTF-8"), "HmacSHA256"));
        byte[] signData = mac.doFinal(stringToSign.getBytes("UTF-8"));
        String sign = URLEncoder.encode(new String(Base64.encodeBase64(signData)),"UTF-8");
        System.out.println(sign);
    }

}
```
1. 拿到开发服务内当前系统 timestamp 和加密 sign 签名值，将 timestamp 和 sign 拼接到 URL 中。

```plain
POST: webhook机器人地址?timestamp=XXX&sign=XXX
```
|字段|类型|是否必填|说明|
|:----|:----|:----|:----|
|timestamp|Long|有加签安全设置时必填|开发者计算 sign 签名值时使用到的时间戳，60秒类有效。|
|sign|String|有加签安全设置时必填|步骤一获取的签名值。|


### IP地址（段）

设定后，只有来自IP地址范围内的请求才会被正常处理。支持两种设置方式：IP地址和IP地址段，暂不支持IPv6地址白名单，格式如下：

|格式|说明|
|:----|:----|
|1.1.1.1|开发者的出口公网IP地址（非局域网地址）|
|1.1.1.0/24|用 CIDR 表示的一个网段|


