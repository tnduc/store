import axios from '@/lib/axios'

export const useProduct = () => {
  const unitSearch = async (keyWords: Object) => {
    await axios
      .get('products/units', { params: keyWords })
      .then(response => response.data.data)
  }

  const unitStore = async (data: Object) => {
    await axios
      .post('products/units', data)
  }

  return {
    unitSearch,
    unitStore
  }
}