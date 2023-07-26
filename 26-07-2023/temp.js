class PaginationHelper {
	constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
      return (this.collection.length);
	}
	pageCount() {
        if (this.collection.length == 0) return 0;
        let pgCount = Math.ceil(this.collection.length/this.itemsPerPage);
        ( pgCount == 0 ? pgCount=1 : pgCount)
        return (pgCount);

	}
	pageItemCount(pageIndex) {
    if (pageIndex < 0) return -1;
    if (this.collection.length == 0) return -1;
    const startIdx = (pageIndex*this.itemsPerPage);
    const endIdx = (((pageIndex+1)*this.itemsPerPage)-1);

    if (this.collection[startIdx]){
        if (this.collection[endIdx]){
            return (this.itemsPerPage);
        }
        else{
            return ((this.collection.length)-startIdx);
        }
    }
    else{
        return (-1);
    }
    
	}
	pageIndex(itemIndex) {
    if (this.collection.length == 0) return -1;
    if (itemIndex == 0) {
        return 0
    };
    if (this.collection[itemIndex]){
        let page = 0, temp = this.itemsPerPage-1;
        while(true){
            if (temp>=itemIndex) break;
            page += 1;
            temp += this.itemsPerPage;
        }
        return (page);

    }
    else return (-1);

	}
}


var helper = new PaginationHelper([1,2,3,4,5,6], 4);
console.log(helper.pageCount()); // should == 2
console.log(helper.itemCount()); // should == 6
console.log(helper.pageItemCount(1)); // should == 4
// console.log(helper.pageItemCount(1)); // last page - should == 2
// console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// console.log(helper.pageIndex(6)); // should == 1 (zero based index)
// console.log(helper.pageIndex(2)); // should == 0
// console.log(helper.pageIndex(-1)); // should == 1
// console.log(helper.pageIndex(20)); // should == -1
// console.log(helper.pageIndex(-10)); // should == -1