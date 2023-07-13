import productsMock from "../mocks/productsMocks"


const getProductsService = () => {

    return new Promise((resolve, reject) => {

      if( productsMock ) {
        setTimeout(() => {
            resolve(productsMock)
        }, 2000)
      } else {
        reject('No hay productos')
      }

    })

}

export default getProductsService