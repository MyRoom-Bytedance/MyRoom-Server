import {Context} from "koa";
import {StsService} from "../service/sts";

export default class StsController {
  public static async getStsInfo(ctx: Context) {

    const stsInfo = await StsService.getStsInfo();

    ctx.body = {
      status: 200,
      msg: "success",
      data: stsInfo,
    };
  }
}