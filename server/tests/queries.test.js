import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import '../controller/user';

chai.use(chaiHttp);
chai.should();
let id;

describe("should be able to send any question ", () => {
  it("should be able to create a query", (done) => {
    chai
      .request(app)
      .post("/api/articles/queries")
      .send({
        name: "Lynda",
        email: "lynda@gmail.com",
        subject: "show",
        message: "enjoy everything ",
      })
      .end((err, res) => {
        id = res.body._id;
        res.should.have.status(200);
        // console.log(res);
        done();
      });
  });
  it("should display all queries", (done) => {
    chai
      .request(app)
      .get("/api/queries")
      .set(
        "token",
        "eyJhbGciOiJIUzI1NiJ9.dW11cmVyd2FseW5kYUBnbWFpbC5jb20.-VkpGP_gOQArIaIo6o5ZCqZAfXWaetZ105KJtMvdxgc"
      )
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
  it("should retrieve one queries", (done) => {
    chai
      .request(app)
      .get("/api/articles/queries/" + id)
      .set(
        "token",
        "eyJhbGciOiJIUzI1NiJ9.dW11cmVyd2FseW5kYUBnbWFpbC5jb20.-VkpGP_gOQArIaIo6o5ZCqZAfXWaetZ105KJtMvdxgc"
      )
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
