# ToDo-List

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## My process

### Built with

- HTML5
- CSS3
- React
- React Hooks

### What I learned

This project was an introduction in learning React. I learned React syntax, or JSX, React Hooks, specificaly useState, and conditionals, among other things. This was a very new and interesting way to use JavaScript that I never had before, and I'm excited to make more React projects and see what else the language is capable of achieving. 

Code written in this porject that I am proud of:

```JSX
function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
```

This is the code used to create the doubleClick function of deleting an item. I used the useState method of setItems to get the array of all the ToDo list items and return a filtered array of filtered items along with their index number. After this, I returned all of the items in the array except for the index of the one clicked, which was deleted.

```JSX
<div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
```

This code is used for the form of the ToDo list. It was fun using different values and props for elements and exporting and importing code that wasn't originally made in the current document. This is what set JSX apart from standard HTML and JavaScript, and is also what makes it so much fun to work with.

### Continued development

There is so much more to learn in the world of React, and while I do feel that I have a good grip on its implementation, I wish to work on more React projects and better my understanding of it. This way, I can not only gain more experience and comfortability using it, but I can also seamlessly incorporate it and its methods into other projects.

## Author

- Website - [Elyse Chambers](https://www.diaryofelyse.com)
- Frontend Mentor - [Elyseeloo](https://www.frontendmentor.io/profile/Elyseeloo)
- Twitter - [@Elyseeloo\_](https://www.twitter.com/elyseeloo_)
