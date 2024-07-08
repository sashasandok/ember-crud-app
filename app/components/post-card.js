import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostCard extends Component {
  @tracked isCopied = false;

  @action
  async copyToClipboard() {
    await navigator.clipboard.writeText(this.args.text);
    this.isCopied = true;
  }
}
