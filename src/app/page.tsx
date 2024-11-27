import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card" 
import Link from "next/link";
import Image from "next/image"
export default function Page() {
  return (
    <main className="bg-[#1A1A1A] min-h-screen text-white">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-[#F98585] mb-6">
          Welcome to My Creative Space
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Dive into my latest work, explore my recent blog posts, and connect with me for collaborations or inquiries.
        </p>
        <Button
          variant="outline"
          className="text-[#F98585] border-[#F98585] hover:bg-[#F98585] hover:text-white transition duration-300"
        >
          <Link href="/work">See My Work</Link>
        </Button>
      </section>

      {/* Featured Work Section */}
      <section className="py-12 bg-[#2C2C2C]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#F98585] mb-8">Featured Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#333333] text-white shadow-lg hover:shadow-xl transition duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#F98585]">
                  Project One
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A stunning website built for a local business, optimized for speed and user engagement.
                </p>
                
              </CardContent>
            </Card>

            <Card className="bg-[#333333] text-white shadow-lg hover:shadow-xl transition duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#F98585]">
                  Project Two
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A creative portfolio showcasing my personal work with a minimalistic approach.
                </p>
             
              </CardContent>
            </Card>

            <Card className="bg-[#333333] text-white shadow-lg hover:shadow-xl transition duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#F98585]">
                  Project Three
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A dynamic e-commerce website developed using the latest web technologies.
                </p>
             
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#F98585] mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#333333] text-white shadow-lg hover:shadow-xl transition duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#F98585]">How to Build a Website</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A step-by-step guide to creating a responsive website from scratch.
                </p>
                <Button
                  variant="outline"
                  className="text-[#F98585] border-[#F98585] hover:bg-[#F98585] hover:text-white transition duration-300"
                >
                  <Link href="https://www.wix.com/blog/how-to-build-website-from-scratch-guide">Read Post</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] text-white shadow-lg hover:shadow-xl transition duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#F98585]">UI Design Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Learn about the best practices for designing intuitive and beautiful user interfaces.
                </p>
                <Button
                  variant="outline"
                  className="text-[#F98585] border-[#F98585] hover:bg-[#F98585] hover:text-white transition duration-300"
                >
                  <Link href="/posts/ui-design-principles">Read Post</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] text-white shadow-lg hover:shadow-xl transition duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#F98585]">E-commerce Trends in 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Explore the latest trends in the e-commerce space and how to capitalize on them.
                </p>
                <Button
                  variant="outline"
                  className="text-[#F98585] border-[#F98585] hover:bg-[#F98585] hover:text-white transition duration-300"
                >
                  <Link href="/posts/ecommerce-trends-2024">Read Post</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 bg-[#2C2C2C]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#F98585] mb-8">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            I am a passionate developer with a love for building intuitive user experiences and creating innovative digital solutions. With expertise in front-end technologies, I aim to push boundaries with each project I take on.
          </p>
          <Button
            variant="outline"
            className="text-[#F98585] border-[#F98585] hover:bg-[#F98585] hover:text-white transition duration-300"
          >
            <Link href="/about">Learn More About Me</Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#F98585] mb-8">Contact Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            Have any questions, or want to collaborate? Reach out to me, and lets talk!
          </p>
          <Button
            variant="outline"
            className="text-[#F98585] border-[#F98585] hover:bg-[#F98585] hover:text-white transition duration-300"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
