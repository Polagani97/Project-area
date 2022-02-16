const expect = require("chai").expect;
const request = require("request");

const dbo = require("../db/conn");


describe("get all users", () => {
    const url = "http://localhost:8080/api/users";

    before((done) => {
        dbo.connect(() => {
            const usersCollection = client.db("allUsers").collection("users");
            usersCollection.deleteMany({});
            console.log("collection object created",usersCollection);
            for (let index = 1; index < 11; index++) {
                usersCollection.insertOne({
                    username: 'test' + index,
                    password: 'password' + index,
                    email: 'email@gmail.com' + index,
                    mobile: '9877896541' + index,
                    appliances: [TV]
                })
            }
            setTimeout(() => {
                done();
            }, 1000);
        })
    });

    it("requests return status code 200", (done) => {
        request(url, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("requests body type is equal to array", (done) => {
        request(url, (err, res, body) => {
            body = JSON.parse(body);
            expect(body).to.be.a("array");
            done();
        });
    });

    it("requests body returns exactly 10 comments", (done) => {
        request(url, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.length).to.equal(10);
            done();
        });
    });


    after(() => {
        dbo.connect(() => {
            const usersCollection = client.db("allUsers").collection("users");
            usersCollection.deleteMany({});
            dbo.disconnect();
        })
    });


});

describe("insert users", () => {
    const url = "http://localhost:8080/api/users";

    before((done) => {
        dbo.connect(() => {
            const usersCollection = client.db("allUsers").collection("users");
            usersCollection.deleteMany({});
            console.log("collection object created",usersCollection);
            usersCollection.insertOne({
                username: 'test',
                password: 'password1',
                email: 'email@gmail.com',
                mobile: '9877896541',
                appliances: [TV]
                })
            setTimeout(() => {
                done();
            }, 1000);
        })
    });

    it("requests return status code 200", (done) => {
        request(url, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("requests body type is equal to array", (done) => {
        request(url, (err, res, body) => {
            body = JSON.parse(body);
            expect(body).to.be.a("array");
            done();
        });
    });

    it("requests body returns added username with name test", (done) => {
        request(url, (err, res, body) => {
            body = JSON.parse(body);
            expect(body[0].username).to.equal('test');
            done();
        });
    });

    it("requests body returns added user with password password1", (done) => {
        request(url, (err, res, body) => {
            body = JSON.parse(body);
            expect(body[0].password).to.equal('password1');
            done();
        });
    });

    it("requests body returns added user with email email@gmail.com", (done) => {
        request(url, (err, res, body) => {
            body = JSON.parse(body);
            expect(body[0].email).to.equal('email@gmail.com');
            done();
        });
    });

    it("requests body returns added user with mobile 9877896541", (done) => {
        request(url, (err, res, body) => {
            body = JSON.parse(body);
            expect(body[0].mobile).to.equal('9877896541');
            done();
        });
    });


    after(() => {
        dbo.connect(() => {
            const usersCollection = client.db("allUsers").collection("users");
            usersCollection.deleteMany({});
            dbo.disconnect();
        })
    });


});