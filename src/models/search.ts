import config from '@/utils/config';
import { Http } from '@/utils/https';

class SearchModel extends Http {
  searchAction(keyword:string, cityId:string) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.SEARCH_ACTION,
        data: {
          keyword,
          cityId
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

export default { SearchModel };