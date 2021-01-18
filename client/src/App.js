import './App.css';
import {Admin,Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import PostShow from './components/PostShow'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow}/>
    </Admin>
  );
}

export default App;
