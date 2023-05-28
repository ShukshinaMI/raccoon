import { makeAutoObservable } from "mobx";

export enum SearchType {
  Tag = "tag",
  Name = "name",
}

function AppStore(searchString: string, searchType: SearchType) {
  return makeAutoObservable({
    searchString,
    searchType,

    setSearchString(searchString: string): void {
      this.searchString = searchString;
    },

    setSearchType(searchType: SearchType): void {
      this.searchType = searchType;
    },
  });
}

const appStore = AppStore("", SearchType.Name);

export default appStore;
