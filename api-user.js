const update = async (params, credentials, user) => {
    try {
    let response = await fetch('/api/users/' + params.userId, {
    method: 'PUT',
    headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + credentials.t
    },
    body: user
    })
    return await response.json()
    } catch(err) {
    console.log(err)
    }}
   
    const follow = async (params, credentials, followId) => {
        try {
        let response = await fetch('/api/users/follow/', {
        method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify({userId:params.userId, followId: followId})
        })
        return await response.json()
        } catch(err) {
        console.log(err)
        }
       }

       const unfollow = async (params, credentials, unfollowId) => {
        try {
        let response = await fetch('/api/users/unfollow/', {
        method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify({userId:params.userId, unfollowId: unfollowId})
        })
        return await response.json()
        } catch(err) {
        console.log(err)
        }
       }
       

       const findPeople = async (params, credentials, signal) => {
        try {
        let response = await fetch('/api/users/findpeople/' + params.userId, {
        method: 'GET',
        signal: signal,
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
        }
        }) 
        return await response.json()
        } catch(err) {
        console.log(err)
        }
       }
       