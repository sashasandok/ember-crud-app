import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class PostController extends Controller {
  @service('post') post;

  constructor(...args) {
    super(...args);
    this.post.fetchPostList();
  }
}
