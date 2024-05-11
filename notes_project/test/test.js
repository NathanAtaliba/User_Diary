import request from 'supertest'
import User from '../backend/src/models/userModel.js';
import { expect } from 'chai';

describe('Testes de rotas de user', ()=>{
    let testUserIdFalse = "111111111111";
    let appUrl = 'http://localhost:3000'

    it('Deve criar um novo usuário', async () => {
      const response = await request(appUrl)
        .post('/user/register/')
        .send({
          username: 'novousuario',
          email: 'novo@example.com',
          password: 'novasenha'
        });
      expect(response.status).to.equal(201);
      expect(response.text).to.equal('User created with successfully!');
    });

    it('Não deve autenticar um usuário', async () => {
      const response = await request(appUrl)
        .post('/user/login/')
        .send({ email: 'test@example.com', password: 'testpassword' });
      expect(response.status).to.equal(404);
    });

    it('Deve autenticar um usuário', async () => {
      const response = await request(appUrl)
        .post('/user/login/')
        .send({ email: 'novo@example.com', password: 'novasenha' });
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('username');
    });
  
    it('Não deve excluir um usuário existente', async () => {
      const response = await request(appUrl).delete(`/api/users/${testUserIdFalse}`);
      expect(response.status).to.equal(404);
    });
  
    it('Não deve editar a senha de um usuário existente', async () => {
      const response = await request(appUrl)
        .put(`/api/users/${testUserIdFalse}`)
        .send({ password: 'novasenhaeditada' });
      expect(response.status).to.equal(404);
    });
})


describe('Testes de rotas de notes', ()=>{

})