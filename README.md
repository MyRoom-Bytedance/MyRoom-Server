# MyRoom-Server
MyRoom服务端

新建 `.env` 文件写入以下内容：

```txt
APP_PORT = 8000

MYSQL_HOST = localhost
MYSQL_PROT = 3306
MYSQL_USER = 你的用户名
MYSQL_PWD  = 你的密码
MYSQL_DB   = 你创建的数据库名称

JWT_SECRET = jwt的密钥，随意

END_POINT = sts.aliyuncs.com
ACCESS_KEY_ID = 你的AccessKeyID
ACCESS_KEY_SECRET = 你的AccessKeySecret
ASSUME_ROLE_ARN = 你的AssumeRoleARN

```

```bash
npm install # yarn
npm run dev # yarn dev
```

