
export interface HatInterf {
    id: string,
    imgSrc: string,
    title: string,
    price: number,
    currency: string,
    description: string,
}

export interface StoreInterf {
    favouriteProducts: [string],
    itemsInCart: [string],
    isLoggedIn: boolean
    }