
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import User from './screens/User';
import Post from './screens/Post';
import Detail from './screens/Detail';

const AppNavigator = createStackNavigator({
  Users: {
    screen: User
  },
  Posts: {
    screen: Post
  },
  Detail: {
    screen: Detail
  }
}, {
  initialRouteName:'Users'
});

export default createAppContainer(AppNavigator);
