(() => {
  const posts = window.POSTS || [];
  const list = document.getElementById('blog-list');
  if (!list) return;
  if (!posts.length) {
    const message = document.createElement('p');
    message.className = 'no-posts';
    message.textContent = 'Research notes are on their way.';
    list.append(message);
  }
  for (const post of posts) {
    const entry = document.createElement('a');
    entry.href = `posts/${post.slug}.html`;
    entry.className = 'blog-entry';
    if (post.image) {
      const image = document.createElement('img');
      image.src = `../${post.image}`;
      image.alt = post.imageAlt || '';
      image.className = 'blog-entry-image';
      image.width = 320;
      image.height = 220;
      entry.append(image);
    }
    const content = document.createElement('div');
    content.className = 'blog-entry-content';
    const date = document.createElement('span');
    date.className = 'blog-entry-date';
    date.textContent = post.date;
    const title = document.createElement('h2');
    title.className = 'blog-entry-title';
    title.textContent = post.title;
    const excerpt = document.createElement('span');
    excerpt.className = 'blog-entry-excerpt';
    excerpt.textContent = post.excerpt;
    content.append(date, title, excerpt);
    entry.append(content);
    list.append(entry);
  }
})();
