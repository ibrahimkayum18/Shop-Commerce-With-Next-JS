import axios from 'axios'

export const imageUpload = async img => {
  const formData = new FormData()
  formData.append('image', img)
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=5acd4ff64c547e48977ae449a9bd665c`,
    formData
  )
  return data
}