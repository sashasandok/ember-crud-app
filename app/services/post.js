import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PostService extends Service {
  @tracked isLoading = false;
  @tracked list = [];
  @tracked activePage = 1;
  @tracked perPage = 10;
  @tracked pages = 0;
  @tracked totalCount = 0;

  @tracked isPrevButtonDisabled = this.activePage < 2;
  @tracked isNextButtonDisabled =
    this.activePage > 1 && this.activePage >= this.pages;

  fetchPostList = async () => {
    this.isLoading = true;

    const start =
      this.perPage === 10 && this.activePage === 1
        ? 0
        : this.perPage * this.activePage - 1;
    const limit = this.perPage;

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/?_start=${start}&_limit=${limit}`,
    );
    const data = await res.json();

    this.list = data;

    this.isLoading = false;
  };

  next = () => {
    this.activePage = this.activePage + 1;
    this.isNextButtonDisabled = this.pages > 1 && this.activePage >= this.pages;
    this.isPrevButtonDisabled = this.activePage < 2;

    this.fetchPostList();
  };

  prev = () => {
    this.activePage = this.activePage - 1;
    this.isNextButtonDisabled =
      this.pages > 1 && this.activePage >= this.pagination.pages;
    this.isPrevButtonDisabled = this.activePage < 2;

    this.fetchPostList();
  };
}
