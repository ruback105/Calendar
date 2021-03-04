import React from 'react'

export const loginUser = async (loginEmail, loginPassword) => {
  try {
    const response = await fetch(`http://localhost:4000/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loginEmail,
        loginPassword,
      }),
    })

    return response.json()
    // return response
  } catch (err) {
    console.log(err)
  }
}

export const registerUser = async (
  registerEmail,
  registerPassword,
  confirmRegisterPassword,
) => {
  try {
    const response = await fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        registerEmail,
        registerPassword,
        confirmRegisterPassword,
      }),
    })
    return response.json()
  } catch (err) {
    console.error(err)
  }
}

// getUser
export const getUserByEmail = async ( email ) => {
  return fetch(`/user:${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => {
    console.log(data)
    data.json()
  })
}

// getUserName

// setUserName

//
