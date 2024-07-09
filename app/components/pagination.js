import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Pagination extends Component {
  @tracked isCopied = false;

  @action
  async next() {
    await navigator.clipboard.writeText(this.args.text);
    this.isCopied = true;
  }

  async previous() {
    await navigator.clipboard.writeText(this.args.text);
    this.isCopied = true;
  }
}
