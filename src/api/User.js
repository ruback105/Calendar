import React from 'react'

export const loginUser = async ( loginEmail, loginPassword ) => {
  try {
    const response = await fetch(`http://localhost:4000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loginEmail,
        loginPassword,
      }),
    })

    console.log(response)
    return response
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
    return response
  } catch (err) {
    console.error(err)
  }
}

// getUser
export const getUserById = async ({ email }) => {
  return fetch(`/user/:${email}`, {
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
