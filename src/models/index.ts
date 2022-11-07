import config from "@/utils/config";
import { Http } from '@/utils/https';


class IndexModel extends Http {
  getHomeDatas (cityId:string) {
    return new Promise ((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_HOME_DATAS,
        data: {
          cityId
        },
        success (data:object) {
          resolve ({
            data,
            status: 0
          });
        },
        error (err:Error) {
          resolve ({
            err,
            status: -1
          })
        }
      })
    })
  }
}

export default { IndexModel }