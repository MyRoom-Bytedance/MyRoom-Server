import env from "../config";

const StsClient = require('@alicloud/sts-sdk');

export class StsService {

  public static async getStsInfo() {

    const sts = new StsClient({
      endpoint: env.END_POINT, // check this from sts console
      accessKeyId: env.ACCESS_KEY_ID, // check this from aliyun console
      accessKeySecret: env.ACCESS_KEY_SECRET, // check this from aliyun console
    });

    const sysInfo = await sts.assumeRole(env.ASSUME_ROLE_ARN, 'SessionTest');

    return sysInfo.Credentials;
  }
}