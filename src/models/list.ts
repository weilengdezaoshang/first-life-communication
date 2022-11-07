import config from '@/utils/config';
import { Http } from "@/utils/https";


class ListModel extends Http {
  getListDate (cityId:string, field:string) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_LIST_DATAS,
        data: {
          cityId,
          field
        },
        success (data:object) {
          resolve({
            data,
            status: 0
          });
        },
        error (error:Error) {
          reject({
            error,
            status: -1
          })
        }
      })
    })
  }
}

export default { ListModel };