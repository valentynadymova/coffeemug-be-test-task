import {object,number,string,TypeOf} from "zod";


const payload={
    body:object({
        name:string({
            required_error:"Name is required"
        }).max(100,
             "Name should have maximum 100 characters"),
        price:number({
            required_error:"Price is requiered"
        }),
    })

}

const params={
    params:object({
        productId:string({
            required_error:"productId is required"
        })
    })
}

export const createProductSchema=object({
    ...payload,
})

export const updateProductSchema=object({
    ...params,
    ...payload
})

export const deleteProductSchema=object({
    ...params
})

export const getProductSchema=object({
    ...params
})


export type CreateProductInput=TypeOf<typeof createProductSchema>
export type UpdateProductInput=TypeOf<typeof updateProductSchema>
export type GetProductInput=TypeOf<typeof getProductSchema>
export type DeleteProductInput=TypeOf<typeof deleteProductSchema>