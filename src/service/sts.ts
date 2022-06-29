const StsClient = require('@alicloud/sts-sdk');

export class StsService {

  public static async getStsInfo() {

    const sts = new StsClient({
      endpoint: 'sts.aliyuncs.com', // check this from sts console
      accessKeyId: 'LTAI5tHkn3vVoLgyC2pAf7DY', // check this from aliyun console
      accessKeySecret: '1otqKsrGsoa5sSce4DnhbhfDTByH4c', // check this from aliyun console
    });

    const sysInfo = await sts.assumeRole(`acs:ram::1927636856429164:role/ramosstest`, 'SessionTest');

    return sysInfo.Credentials;
  }
}