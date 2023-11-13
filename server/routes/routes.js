const express = require('express');
const router = express.Router();
const userController = require('../controllers/controllers');

router.post('/login', userController.login);

router.post('/verify-code', userController.verify_code);

router.post('/add-member', userController.add__member);

router.get('/staff', userController.get_staff);

router.get('/orders', userController.get_orders);

router.get('/completed-orders', userController.getCompleted_orders);

router.post('/delete-user', userController.delete__member);

router.post('/find-order', userController.find__order);

router.post('/decline-order', (req, res) => userController.decline__order(req, res, req.app.get('socketio')));

router.post('/complete-order', (req, res) => userController.complete__order(req, res, req.app.get('socketio')));


module.exports = router;