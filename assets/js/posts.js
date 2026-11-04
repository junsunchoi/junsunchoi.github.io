// Single source of truth for blog post metadata.
// Add new posts at the TOP of the array (newest first).
// `slug` must match the filename in blog/posts/<slug>.html.

window.POSTS = [
  {
    slug: "my-first-post",
    comingSoon: true,
    date: "May 11, 2026",
    image: "assets/images/topology-marketing.svg",
    imageAlt: "Comparison of throughput under SLO and system cost for fat-tree and torus networks",
    title: "A Case for Switchless Topology for LLM Serving",
    excerpt: "Is the huge investment in expensive networking equipment worth it for LLM serving? Can a lower-cost but lower-performance network topology achieve higher cost-effectiveness?"
  }
];
