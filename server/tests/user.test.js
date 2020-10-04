import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import '../controller/user';


chai.use(chaiHttp);
chai.should();

describe("user authentication test", () => {

  it("should be able to login ", (done) => {
    chai
      .request(app)
      .post("/api/signin")
      .send({
        email: "umurerwalynda@gmail.com",
        password: "135790",
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      }) 
      });
  });
 
