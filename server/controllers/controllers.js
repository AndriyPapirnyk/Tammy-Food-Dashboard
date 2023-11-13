const User = require('../models/UserModel');
const Order = require('../models/OrdersModel');
const twilio = require('twilio');

//

const accountSid = 'ACe942f2185519ca446f1cb3c94b38f2ba';
const authToken = 'd91623149ef19c940d28d5d84d608eec';
const client = twilio(accountSid, authToken);

const fromNumber = '+17622364275'; 

const code = Math.floor(1000 + Math.random() * 9000);



exports.login = async (req, res) => {
  try {
    const data = req.body.inputValues;
    console.log(data.login);

    console.log(code);


    const user = await User.findOne({ login: data.login });

    console.log(user)

    
if(user) {
  if (user.password === data.password) {
    console.log('User Found - Phone Number:', user.telephone);
    res.status(201).json(user.status);

    //

    client.messages
    .create({
      body: `Your verification code is: ${code}`,
      from: fromNumber,
      to: user.telephone,
    })
    .then((message) => console.log(`Message sent with SID: ${message.sid}`))
    .catch((error) => console.error(`Error sending message: ${error.message}`));

    //
  } else {
    console.log('User not found...');
    res.status(404).json({ error: 'User not found' });
  }
} else {
  res.status(404).json({ error: 'User not found' });
  console.log('test')
}
    

    

  } catch (error) {
    res.status(500).json({ error: 'Login failed...' });
  }
};

exports.verify_code = async(req, res) => {
  try{
    const data = req.body.code;
    console.log(data)

    code === parseInt(data) ? res.status(201).json('Login success') : res.status(500).json({error: 'Login failed...'})

  } catch(error) {
    res.status(500).json({ error: 'Login failed...' });
  }
}

exports.get_staff = async(req, res) => {
  try{
    const staff = await User.find();
    console.log(staff)
    res.json(staff);
  } catch(error) {
    console.log(error)
  }
}

exports.get_orders = async(req, res) => {
  try{
    const orders = await Order.find({status : 'Actual'});
    console.log(orders);

    res.json(orders);
  } catch(error) {
    console.log(error)
  }
}

exports.getCompleted_orders = async(req, res) => {
  try{
    const orders = await Order.find({status : 'Completed'});
    console.log(orders);

    res.json(orders);
  } catch(error) {
    console.log(error)
  }
}

exports.add__member = async(req, res) => {
  try{
    console.log(req.body);

    const newMember = new User(req.body);

    newMember.save()
    .then((user) => {
      console.log('User saved successfully:', user);
      res.status(201).json('Process success')
    })
    .catch((error) => {
      console.error('Error saving user:', error);
      res.status(500).json({ error: 'Process failed...' });
    });
  
  } catch(error) {
    res.status(500).json({ error: 'Process failed...' });
  }
}



exports.delete__member = async(req, res) => {
  try{
    const userId = req.body.userId; 
    console.log(userId)

    User.deleteOne({ _id: userId })
    .then((user) => {
      console.log('User deleted successfully:', user);
      res.status(201).json('Process success')
    })
    .catch((error) => {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Process failed...' });
    });
  
  } catch(error) {
    res.status(500).json({ error: 'Process failed...' });
  }
}


exports.find__order = async(req, res) => {
  try{
    const orderId = req.body.orderId; 
    console.log(orderId)

    Order.findOne({ _id: orderId })
    .then((order) => {
      // console.log('Order found successfully:', order);
      res.status(201).json(order);
    })
    .catch((error) => {
      console.error('Error finding order:', error);
      res.status(500).json({ error: 'Process failed...' });
    });
  
  } catch(error) {
    res.status(500).json({ error: 'Process failed...' });
  }
}

exports.decline__order = async(req, res, io) => {
  try{
    const orderId = req.body.orderId; 
    console.log(orderId)

    Order.deleteOne({ _id: orderId })
    .then((order) => {
      // console.log('Order deleted successfully:', order);
      io.emit('orderUpdate', { orderId, status: 'Declined' });
      res.status(201).json('Deleted');
    })
    .catch((error) => {
      console.error('Error deleting order:', error);
      res.status(500).json({ error: 'Process failed...' });
    });

  
  } catch(error) {
    res.status(500).json({ error: 'Process failed...' });
  }
}

exports.complete__order = async (req, res, io) => {
  try {
    const orderId = req.body.orderId;

    console.log('Received orderId:', orderId); 

    const order = await Order.findOneAndUpdate(
      { _id: orderId },
      { $set: { status: 'Completed' } },
      { new: true }
    );

    if (!order) {
      console.log('Order not found:', orderId); 
      return res.status(404).json({ error: 'Order not found' });
    }

    io.emit('orderUpdate', { orderId, status: 'Completed' });
    console.log('Order updated successfully:', order); 
    res.status(201).json('Successfully changed!');
  } catch (error) {
    console.error('Error changing order:', error);
    res.status(500).json({ error: 'Process failed...' });
  }
};







