import { request } from 'http';
import supertest from  'supertest';
import createServer from '../utils/server';

const app=createServer();


describe('product',()=>{

        describe(' create product route',()=>{
            it('should return bad req if name is missing',async()=>{
                const res=await supertest(app).post('/api/products').send({price:25});
                expect(res.statusCode).toEqual(400);
            });
            it('should return bad req if price is missing',async()=>{
                const res=await supertest(app).post('/api/products').send({name:'orange'});
                expect(res.statusCode).toEqual(400);
            });
            it('should return status code 400 if price and name are missing',async ()=>{
                
                const res=await supertest(app)
                .post('/api/products')
                .send();
                expect(res.statusCode).toEqual(400);
            });

        });

        describe('get product by id',()=>{
            it('should return bad req if productId is not valid', async()=>{
                const res=await supertest(app).get('/api/products/');
                expect(res.statusCode).toEqual(400);
            });
    
        });

        describe('delete product by id', ()=>{
            it('should return bad req if productId is missing',
            async()=>{
                const res=await supertest(app).delete('/api/products/');
                expect(res.statusCode).toEqual(400);
            })
        })

        describe('update prpduct by id',()=>{
            it('should return bad req if productId is missing',
            async ()=>{
                const res=await supertest(app).put('/api/products/');
                expect(res.statusCode).toEqual(400);

            })
        })
        
})

