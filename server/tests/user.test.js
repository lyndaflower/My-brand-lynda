import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

chai.use(chaiHttp);
chai.should();

describe("user authentication test", () => {
  it("should be able to login ", (done) => {
    chai
      .request(app)
      .post("/api/signin")
      .send({
        email: "email",
        password: "135790",
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      }) 
      });
  });
  // it("should be able to comment on article", () => {
  //     chai
  //       .request(app)
  //       .post("/api/articles/:id/comment")
  //       .send({
  //           name:"name",
  //           comment:"comment"
  //       })
  //       .end((err, res) => {
  //         res.should.have.status(201);
  //       });
  //   });
