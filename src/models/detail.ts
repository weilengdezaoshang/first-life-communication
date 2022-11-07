import config from '@/utils/config';
import { Http } from '@/utils/https'


class DetailModel extends Http {
  getDetail(field:string, id:number) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_DETAIL,
        data: {
          field,
          id
        },
        success (data) {
          resolve({
            data,
            status: 0
          });
        },
        error (error) {
          reject({
            reason: error,
            status: -1
          });
        }
      })
    });
  }

}

export default { DetailModel };