const Post = require('./models/post.model');

const loadTestData = async () => {

  const data = [
    {
      id: '21sd42sdsaaf',
      title: 'How do I get funding for my ?',
      content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
      author: 'Magda',
    },
    {
      id: '543fg43gzsd4',
      title: '10 Brilliant Small Bussiness Ideas',
      content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      author: 'Alex',
    },
    {
      id: '147fg43gasj4',
      title: '20 Fabulous Big Trades Ideas',
      content: 'Ah... It will be so difficult. I won\'t give up. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      author: 'James',
    },
    {
      id: '88sd42sdsgaf',
      title: 'How do I rid of my job?',
      content: ' Getting start and keep looking for job is a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
      author: 'Andrea',
    },
    {
      id: '999fg43gla0',
      title: '1  Small Housework chores Ideas',
      content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      author: 'Ann',
    },
    {
      id: '277mg49hasj9',
      title: '3 Big Market Trades',
      content: 'Ah... It will be so difficult. I won\'t give up. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      author: 'John',
    }
  ];

  try {
    let counter = await Post.countDocuments();
    
    if(counter === 0) {
      console.log('No posts. Loading data...');
      await Post.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }

};

module.exports = loadTestData;