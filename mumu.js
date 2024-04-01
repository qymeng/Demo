/**
 * @url: https://api-pro.mumu.163.com/api/v1/user/info/s
 * @body: json
    {
      "code": 0,
      "msg": "ok",
      "data": {
        "user_id": "aebglnr34uaaadua",
        "nickname": "XXX****XXXX",
        "member_expired_at": 0,
        "member_status": 0,
        "enabled_device_count": 1,
        "current_device_status": 1,
        "current_device": {
          "device_id": "xxxxxxxxxxxx",
          "alias": "XXX’s MacBook Pro",
          "last_binded_at": 1711987410,
          "trial_end_at": 1707494399,
          "trial_status": 2
        }
      }
    }
*/


if ($response.status !== 200) {$done({})};

let obj = JSON.parse($response.body);
let end_at = 2516312087;
if (obj.code === 0 && obj.data) {
    let data = obj.data;
    data.member_expired_at = end_at;
    data.member_status = 1;
    if (data.current_device) {
        let device = data.current_device;
        device.trial_end_at = end_at;
        device.trial_status = 1;
    }
}

$done({ body: JSON.stringify(obj)});
