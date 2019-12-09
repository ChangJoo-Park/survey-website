export default function({ $axios, store, redirect }) {
  $axios.onRequest(request => {
    const accessToken = store.state.accessToken
    console.log('[ REQUEST ] ' + request.url)
    if (accessToken) {
      request.headers.common['access_token'] = accessToken
    }

    return request
  })

  $axios.onResponse(response => {
    console.log('[ RESPONSE ] ' + response.status)
    // TODO: If token expires, perform a silent refresh

    return response
  })

  $axios.onError(error => {
    console.error('[ ERROR ]', error)
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      // store.state.sessionStorage.authUser = null
      return redirect('/')
    }

    return error
  })
}
