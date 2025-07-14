// Test data
const blogData = [
  {
    id: 1,
    title: "Skies and Shells",
    content: `
      <p>This is a deep-dive into customizing Linux shells and window managers using modern tools.</p>
      <p>We explore <strong>Nix</strong>, <em>Home Manager</em>, and how to create a minimal, beautiful setup that is reproducible.</p>
      <ul>
        <li>Why declarative config matters</li>
        <li>Combining QML with GTK</li>
        <li>What makes a dotfile truly portable?</li>
      </ul>
    `,
    date: "2025-07-13",
    type: "blog",
    image: "../assets/wallpaper1.jpg"
  },
  {
    id: 2,
    title: "The Nix Saga",
    content: `
      <p>Nix isn't just a package manager—it's a way to rethink how systems are configured.</p>
      <p>This post unpacks flakes, reproducibility, and why NixOS is a hacker's dream OS.</p>
    `,
    date: "2025-07-10",
    type: "github",
    image: "../assets/wallpaper1.jpg"
  }
];

export default blogData;
