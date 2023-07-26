class PaginationHelper {
	constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        // this.itemCount()
	// items fit within a single page
	}
	itemCount() {
	// returns the number of items within the entire collection
        console.log(this.collection.length)
	}
	pageCount() {
	// returns the number of pages
    let pgCount = Math.ceil(this.collection.length/this.itemsPerPage);
    ( pgCount == 0 ? pgCount=1 : pgCount)
    console.log(pgCount);
    // console.log(Math.ceil(this.collection.length/this.itemsPerPage), this.collection.length, this.itemsPerPage);

        // let res = 0;
        // let flag = true;
        // for (let x in this.collection){
        //     // console.log((Number(x)+1)%this.itemsPerPage);
        //     if ((Number(x)+1)%this.itemsPerPage == 0){
        //         // console.log('Splitting at:',x,' ',this.itemsPerPage);
        //         flag = false;
        //         res += 1;
        //     }
        //     else flag = true;
        //     // console.log(x);
        // }
        // if (flag) res+=1;
        // console.log(this.collection.split('e'));
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
    const startIdx = (pageIndex*this.itemsPerPage);
    const endIdx = (((pageIndex+1)*this.itemsPerPage)-1);
    // console.log(startIdx, endIdx, this.collection[startIdx], this.collection[endIdx])

    if (this.collection[startIdx]){
        if (this.collection[endIdx]){
            console.log(this.itemsPerPage);
        }
        else{
            console.log((this.collection.length)-startIdx);
        }
    }
    else{
        console.log(-1)
    }
    
    
    // console.log((pageIndex*this.itemsPerPage)+1)
    // if (this.collection[pageIndex]){
    //     console.log(1);
    // }
    // else console.log(-1);
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    if (itemIndex == 0) {
        console.log(0);
        return 1
    };
    if (this.collection[itemIndex]){
        let page = 0, temp = this.itemsPerPage-1;
        while(true){
            if (temp>=itemIndex) break;
            page += 1;
            temp += this.itemsPerPage;
        }
        console.log(page)
        // (itemIndex < this.itemsPerPage ? console.log(0) : console.log(itemIndex%this.itemsPerPage))
        // console.log(itemIndex, this.itemsPerPage, itemIndex%this.itemsPerPage);
    }
    else console.log(-1);

	}
}


// var helper = new PaginationHelper(['a','b','c','d','e','f',1,2], 4);
// helper.pageCount(); // should == 2
// helper.itemCount(); // should == 6
// helper.pageItemCount(0); // should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(-1); // should == 1
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1

// const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
// const helper = new PaginationHelper(collection, 10)