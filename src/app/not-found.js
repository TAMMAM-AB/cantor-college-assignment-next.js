import Link from "next/link";
export default function NotFound() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <h2><Link href="/" aria-label="Go to Home Page">Home</Link></h2>
      </div>
    );
  }

export const metadata = {
    title: "Page Not Found",
};