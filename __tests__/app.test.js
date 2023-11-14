const app = require("../app.js")
const request = require("supertest")
const db = require("../db/connection")
const data = require("../db/data/test-data/index.js")
const seed = require("../db/seeds/seed.js")



beforeEach(() => {
    return seed(data)
})
afterAll(() => {
    db.end()
})


describe('GET /api/shows', () => {
    test('should return a status code of 200 and shows array', () => {
        return request(app)
        .get("/api/shows")
        .expect(200)
        .then(({ body }) => {  
           console.log(body)
            })   
        })  
    })

    describe('GET /api/shows/:show_id', () => {
        test('should return a status code of 200 and show array', () => {
            return request(app)
            .get("/api/shows/83")
            .expect(200)
            .then(({ body }) => {  
               console.log(body)
                })   
            })  
        })

describe('GET /api/results', () => {
        test('should return a status code of 200 and results array', () => {
            return request(app)
            .get("/api/results")
            .expect(200)
            .then(({ body }) => {  
               console.log(body)
                })  
    });
    
});

// describe('404 Invalid api path', () => {
//     test('should return a status code of 404 if path is invalid', () => {
//         return request(app)
//         .get("/api/invalidApi")
//         .expect(404)
//         .then(({ body }) => {  
//             expect(body.message).toBe("invalid path")
            
//         })
//     })
// })

// describe('GET /api', () => {
//     test('should return a status code of 200 and api details ', () => {
//         return request(app)
//         .get("/api")
//         .expect(200)
//         .then(({ body }) => {
//             expect(body.endpoints).toEqual(endpoints)
//         })
//     })
// })


// describe('GET /api/users', () => {
//     test.skip('should return a status code of 200 and topics array', () => {
//         return request(app)
//         .get("/api/topics")
//         .expect(200)
//         .then(({ body }) => {  
//            console.log(body)
//             })   
//         })  
//     })

describe('GET /api/users', () => {
    test.skip('should return all users', () => {
        return request(app)
        .get("/api/users")
        .expect(200)
        .then(({ body }) => {  
           console.log(body)
            })   
        })  
    })
describe('GET /api/chars', ()=>{
    test.skip('should return all chars', ()=>{
        return request(app)
        .get("/api/characters")
        .expect(200)
        .then(({body})=>{
            console.log(body)
        })
    })
})

describe ('GET /api/characters/:show_id/:num', ()=>{
    test.only('should return 5', ()=>{
        return request(app)
        .get("/api/characters/83/5")
        .expect(200)
        .then(({body})=>{
            console.log(body)
        })
    })
})



// describe('GET /api/articles/:article_id', () => {

//     test('should return a status code of 200 and an article object with correct properties', () => {
//         return request(app)
//         .get("/api/articles/1")
//         .expect(200)
//         .then(({ body }) => {         
//             expect(typeof body.article.author).toBe("string")
//             expect(typeof body.article.title).toBe("string")
//             expect(typeof body.article.article_id).toBe("number")
//             expect(typeof body.article.body).toBe("string")
//             expect(typeof body.article.topic).toBe("string")
//             expect(typeof body.article.created_at).toBe("string")
//             expect(typeof body.article.votes).toBe("number")
//             expect(typeof body.article.article_img_url).toBe("string")
        
//         })
//     })

//     test('should return a status code of 400 and message if article_id is invalid', () => {
//         return request(app)
//         .get("/api/articles/notValid")
//         .expect(400)
//         .then(({ body }) => {        
//             expect(body.message).toBe("invalid article id")
        
//         })
//     })

//     test('should return a status code of 404 and message if article_id is not found', () => {
//         return request(app)
//         .get("/api/articles/9999")
//         .expect(404)
//         .then(({ body }) => {        
//             expect(body.message).toBe("article id not found")
        
//         })
//     })
// })

// describe('GET /api/articles', () => {
//     test('should return a status code of 200 and array of articles ordered by created_at', () => {
//         return request(app)
//         .get("/api/articles")
//         .expect(200)
//         .then(({ body }) => {  
//             expect(body.articles).toBeSortedBy('created_at', { descending: true })
//             expect(body.articles).toHaveLength(13)
//             body.articles.forEach((article) => {       
//             expect(typeof article.author).toBe("string")
//             expect(typeof article.title).toBe("string")
//             expect(typeof article.article_id).toBe("number")
//             expect(typeof article.topic).toBe("string")
//             expect(typeof article.created_at).toBe("string")
//             expect(typeof article.votes).toBe("number")
//             expect(typeof article.article_img_url).toBe("string")
//             expect(typeof article.comment_count).toBe("string")

//             })  
//         })
//     })
// })

// describe('GET /api/articles/:article_id/comments', () => {
//     test('should return a status code of 200 and an array of comments for an article', () => {
//         return request(app)
//         .get("/api/articles/1/comments")
//         .expect(200)
//         .then(({ body }) => { 
//             expect(body).toHaveLength(11)
//             expect(body).toBeSortedBy('created_at', { descending: true })
//             body.forEach((comment) => {
//             expect(typeof comment.comment_id).toBe("number")
//             expect(typeof comment.votes).toBe("number")
//             expect(typeof comment.created_at).toBe("string")
//             expect(typeof comment.author).toBe("string")
//             expect(typeof comment.body).toBe("string")
//             expect(typeof comment.article_id).toBe("number")
//             })  
//         })
//     })

//     test('should return a status code of 404 and message if article_id is not found', () => {
//         return request(app)
//         .get("/api/articles/9999/comments")
//         .expect(404)
//         .then(({ body }) => {       
//             expect(body.message).toBe("article id not found")
        
//         })
//     })

//     test('should return a status code of 400 and message if article_id is invalid', () => {
//         return request(app)
//         .get("/api/articles/notValid/comments")
//         .expect(400)
//         .then(({ body }) => {        
//             expect(body.message).toBe("invalid article id")
        
//         })
//     })

//     test('should return a status code of 200 and message if no comments are found', () => {
//         return request(app)
//         .get("/api/articles/13/comments")
//         .expect(200)
//         .then(({ body }) => {        
//             expect(body.message).toBe("no comments found for this article")
        
//         })
//     })
// })

// describe('POST /api/articles/:article_id/comments', () => {
//     test('should return a status code of 201 and newly posted comment', () => {
//         const newComment = { username: "rogersop", body: "Wow, this really is fantastic!" }
//         return request(app)
//         .post("/api/articles/13/comments")
//         .send(newComment)
//         .expect(201)
//         .then(({body}) => {
//             expect(body.comment).toMatchObject({
//                 author: "rogersop",
//                 body: expect.any(String),
//                 article_id: 13,
//                 comment_id: 19,
//                 created_at: expect.any(String),
//                 votes: 0
//             })
//         })
//     })

//     test('should return a status code of 404 and message if article_id is not found', () => {
//         const newComment = { username: "rogersop", body: "Wow, this really is fantastic!" }
//         return request(app)
//         .post("/api/articles/9999/comments")
//         .send(newComment)
//         .expect(404) 
//     })
//     test('should return a status code of 400 and message if article_id is invalid', () => {
//         const newComment = { username: "rogersop", body: "Wow, this really is fantastic!" }
//         return request(app)
//         .post("/api/articles/notValid/comments")
//         .send(newComment)
//         .expect(400)
//     })
//     test('should return a status code of 404 and message if username is not found', () => {
//         const newComment = { username: "notUser", body: "Wow, this really is fantastic!" }
//         return request(app)
//         .post("/api/articles/1/comments")
//         .send(newComment)
//         .expect(404)
//         .then(({body}) => {
//             expect(body.message).toBe("username not found")
//         })
//     })
//     test('should return a status code of 400 and message if comment is invalid', () => {
//         const newComment = { username: "rogersop", body: 6 }
//         return request(app)
//         .post("/api/articles/1/comments")
//         .send(newComment)
//         .expect(400)
//     })
// }) 

// describe('PATCH /api/articles/:article_id', () => {
//     test('should return a status code of 200 and the updated article', () => {
//         const newUpdate = { inc_votes: 33 }
//         return request(app)
//         .patch("/api/articles/13")
//         .send(newUpdate)
//         .expect(201)
//         .then(({body}) => {
//             expect(body.article).toMatchObject({
//                 author: expect.any(String),
//                 title: expect.any(String),
//                 body: expect.any(String),
//                 article_id: 13,
//                 topic: expect.any(String),
//                 created_at: expect.any(String),
//                 votes: 33
//             })
//         }) 
//     })  

//     test('should return a status code of 404 and message if article_id is not found', () => {
//         const newUpdate = { inc_votes: 33 }
//         return request(app)
//         .patch("/api/articles/9999")
//         .send(newUpdate)
//         .expect(404)
//     })

//     test('should return a status code of 400 and message if article_id is invalid', () => {
//         const newUpdate = { inc_votes: 33 }
//         return request(app)
//         .patch("/api/articles/notValid")
//         .send(newUpdate)
//         .expect(400)
//     })

//     test('should return a status code of 400 and message if inc_votes is invalid', () => {
//         const newUpdate = { inc_votes: "notValid" }
//         return request(app)
//         .patch("/api/articles/13")
//         .send(newUpdate)
//         .expect(400)
//     });


// })

// describe('DELETE /api/comments/:comment_id', () => {
//     test('should return a status code of 204 and no content', () => {
//         return request(app)
//         .delete("/api/comments/1")
//         .send()
//         .expect(204)
//     });
    
//     test('should return a status code of 404 and message if comment_id is not found', () => {
//         return request(app)
//         .delete("/api/comments/9999")
//         .send()
//         .expect(404)
//     });

//     test('should return a status code of 400 and message if comment_id is invalid', () => {
//         return request(app)
//         .delete("/api/comments/notValid")
//         .send()
//         .expect(400)
//     });
// }); 