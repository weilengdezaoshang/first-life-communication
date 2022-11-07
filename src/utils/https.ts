import axios from 'axios';
import qs from 'qs';
interface IOptions {
  url: string,
  data: object,
  success: (data: object) => void,
  error: (err:Error) => void
}

class Http {
  axiosPost (options:IOptions) {
    axios({
      url: options.url,
      method: 'POST',
      data: qs.stringify(options.data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      options.success(res.data)
    }).catch((err) => {
      options.error(err)
    })
  }
}

export {
  Http
}

// const useAxios = () => {
//   function axiosPost (props:IOptions) {
//     axios({
//       url: props.url,
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       data: qs.stringify(props.data)
//     }).then((res:object) => props.success(res))
//     .catch((err:Error) => props.error(err))
//   }
//   return {
//     axiosPost
//   }
// }

// export default useAxios;