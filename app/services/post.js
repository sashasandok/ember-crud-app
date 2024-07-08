import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PostService extends Service {
  @tracked list = [];

  fetchPostList = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    this.list = data;
  };
}
