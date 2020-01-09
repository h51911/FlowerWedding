const Core = require('@alicloud/pop-core');

// n位随机数，输出res为字符串
function randNum(n) {
    let res = '';
    for (let i = 0; i < n; i++) {
        res += String(parseInt(Math.random() * 10));
    }
    return res;
};
let sendCode = randNum(6);

// 发送验证码
async function sms(phone, code) {
    var client = new Core({
        accessKeyId: 'LTAI4Fr9cAuw6PVfxFdx6rS3',
        accessKeySecret: 'QUk5ppCb7MWU3juuLJDlqfj83vAzeU',
        endpoint: 'https://dysmsapi.aliyuncs.com',
        apiVersion: '2017-05-25'
    });

    var params = {
        "RegionId": "cn-hangzhou",
        "PhoneNumbers": phone, //要发送的用户手机号
        "SignName": "花嫁", //APP名称
        "TemplateCode": "SMS_180945790", //短信模板ID
        "TemplateParam": `{'code':${code}}`
    }

    var requestOption = {
        method: 'POST'
    };

    try {
        let result = await client.request('SendSms', params, requestOption);
        return result;
    } catch (err) {
        return err;
    }
}

module.exports = {
    sendCode,
    sms
};