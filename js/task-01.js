const totalCategory = document.querySelectorAll('.item');
console.log('Number of categories', totalCategory.length);

const categoryList = document.querySelectorAll('#categories > li ');
const categoryArray = [];
categoryList.forEach(element => {
  console.log(
    `Category: ${element.firstElementChild.textContent}, Elements: ${element.lastElementChild.children.length}`,
  );
});
