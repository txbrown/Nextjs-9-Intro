const blogPosts = new Map();

blogPosts.set(
  'my-blog-post',
  `Ullamco adipisicing nostrud esse ex fugiat magna consequat. Commodo anim excepteur irure proident proident est culpa quis aliquip. Culpa in eu occaecat pariatur elit sit ea nulla mollit sit proident ipsum aute dolore. Ipsum cupidatat occaecat dolor ad Lorem officia nisi. Aliqua in esse nulla veniam in qui nisi qui duis in anim aute adipisicing nulla. Officia est nulla qui aliqua.

Labore in irure aute excepteur aliqua Lorem commodo labore minim amet sit ex deserunt in. Irure officia occaecat et nisi esse esse in amet. Consectetur cupidatat sunt reprehenderit sint incididunt nisi tempor. Veniam deserunt magna ea tempor irure ut consectetur.

Exercitation consectetur minim dolor excepteur quis proident incididunt. Id nisi commodo velit Lorem eu ipsum qui. Et ea elit minim consectetur non quis`
);

blogPosts.set(
  'another-blog-post',
  `Ullamco adipisicing nostrud esse ex fugiat magna consequat. Commodo anim excepteur irure proident proident est culpa quis aliquip. Culpa in eu occaecat pariatur elit sit ea nulla mollit sit proident ipsum aute dolore. Ipsum cupidatat occaecat dolor ad Lorem officia nisi. Aliqua in esse nulla veniam in qui nisi qui duis in anim aute adipisicing nulla. Officia est nulla qui aliqua.
  
  Labore in irure aute excepteur aliqua Lorem commodo labore minim amet sit ex deserunt in. Irure officia occaecat et nisi esse esse in amet. Consectetur cupidatat sunt reprehenderit sint incididunt nisi tempor. Veniam deserunt magna ea tempor irure ut consectetur.
  
  Exercitation consectetur minim dolor excepteur quis proident incididunt. Id nisi commodo velit Lorem eu ipsum qui. Et ea elit minim consectetur non quis`
);

export default function handle(req, res) {
  const content = blogPosts.get(req.query.pid);

  if (!content) return res.status(404).json({ message: 'Not found' });
  res.json({ content });
}
