// Single source of truth for blog post metadata.
// Add new posts at the TOP of the array (newest first).
// `slug` must match the filename in blog/posts/<slug>.html.

window.POSTS = [
  {
    slug: "my-first-post",
    date: "May 11, 2026",
    image: "assets/images/network-topology.svg",
    imageAlt: "An illustrative network connecting accelerator nodes",
    title: "The Attack of Switchless Topology for LLM Serving",
    excerpt: "An example research note on communication patterns, token throughput, and the cost of datacenter interconnects."
  }
];
