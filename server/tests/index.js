import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import {admin} from '../controller/user';


chai.use(chaiHttp);
chai.should();

describe('Sample tests', () => {
    it('should get to home route', (done) => {
        chai.request(app).get('/')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        })
    })
});
