const guessGifts = (wishlist, presents) => {
    let res = [];
    presents.forEach((pre_elem) => {
        wishlist.forEach((wish_elem) => {
            if (wish_elem.size == pre_elem.size && wish_elem.clatter == pre_elem.clatter && wish_elem.weight == pre_elem.weight){
                if(!(res.includes(wish_elem.name))) res.push(wish_elem.name);
            }
        });
    });
    return res;
}

const wishlist = [
    {name: 'Mini Puzzle', size: 'small', clatter: 'yes', weight: 'light'},
    {name: 'Toy Car', size: 'medium', clatter: 'a bit', weight: 'medium'},
    {name: 'Card Game', size: 'small', clatter: 'no', weight: 'light'}
];
const presents = [
    {size: 'medium', clatter: 'a bit', weight: 'medium'},
    {size: 'medium', clatter: 'a bit', weight: 'medium'},
    {size: 'small', clatter: 'yes', weight: 'light'},
];

console.log(guessGifts(wishlist, presents));