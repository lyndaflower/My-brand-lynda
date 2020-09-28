import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

chai.use(chaiHttp);
chai.should();

describe("articles test", () => {
  it("should create article", (done) => {
    chai
      .request(app)
      .post("/api/article")
      .set(
        "token",
        "eyJhbGciOiJIUzI1NiJ9.dW11cmVyd2FseW5kYUBnbWFpbC5jb20.-VkpGP_gOQArIaIo6o5ZCqZAfXWaetZ105KJtMvdxgc"
      )
      .send({
        title: "title",
        description: "description",
        body: "body",
        imageUrl: "imageUrl",
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
  it('should get all create articles', (done) => {
    chai
      .request(app)
      .get('/api/article')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("should be able to send question or message",(done)=>{
    chai.request(app)
    .post('/api/articles/queries')
    .send({ name : "lynda",
    email : "umurerwa@gmail.com",
    subject :"feedback on project",
    message : "progress"})
  .end((err,res)=>{
    res.should.have.status(200);
    done()
  })
})
  // it('should get onearticle', (done) => {
  //       chai
  //       .request(app)
  //       .get("/article/:id")
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         done(); 
  //     }).catch((err) => {
  //       console.log(err);
  // })
  // it("should update an article", (done) => {
  //   const id = 3;
  //   chai
  //     .request(app)
  //     .patch(`/api/articles/${id}`)
  //     .set(
  //       "token",
  //       "eyJhbGciOiJIUzI1NiJ9.dW11cmVyd2FseW5kYUBnbWFpbC5jb20.-VkpGP_gOQArIaIo6o5ZCqZAfXWaetZ105KJtMvdxgc"
  //     )
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       done()
  //     });
  // });
  // it("should delete an article", () => {
  //   chai
  //     .request(app)
  //     .delete("/api/articles/:id")
  //     .set(
  //       "token",
  //       "eyJhbGciOiJIUzI1NiJ9.dW11cmVyd2FseW5kYUBnbWFpbC5jb20.-VkpGP_gOQArIaIo6o5ZCqZAfXWaetZ105KJtMvdxgc"
  //     )
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //     });
  // });
});
