export const setReminder = async (
  reminderTitle,
  reminderContent,
  reminderDate,
  reminderTime,
  reminderTrigger,
  userEmail,
) => {
  try {
    const response = await fetch(`http://localhost:4000/reminder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reminderTitle,
        reminderContent,
        reminderDate,
        reminderTime,
        reminderTrigger,
        userEmail,
      }),
    })
    return response.json()
    // return response
  } catch (err) {
    console.log(err)
  }
}

export const getAllReminders = async (userEmail) => {
  console.log(userEmail)
  try {
    const response = await fetch(
      `http://localhost:4000/reminder/${userEmail}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.status == 200) {
      return response.json()
    }
    // return response
  } catch (err) {
    console.log(err)
  }
}

export const getRemindersByDate = async (userEmail, date) => {
  try {
    const response = await fetch(
      `http://localhost:4000/reminder/${userEmail}/${date}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.status == 200) {
      return response.json()
    }
    // return response
  } catch (err) {
    console.log(err)
  }
}