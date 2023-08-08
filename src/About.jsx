import { useState } from 'react'
import './App.css'

function About() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>About Us</h1>
      <p>Welcome to our car dealership, where we have a passion for cars and a rich history in the automotive industry.</p>
      <p>Our love for cars goes back many years, and we are proud to offer you a wide selection of vehicles to choose from. Whether you're looking for a sleek and stylish sedan, a rugged and powerful SUV, or a luxurious and high-performance sports car, we have something for everyone.</p>
      <h2>The History of Cars</h2>
      <p>The history of cars is a fascinating journey that spans over a century. From the early days of horseless carriages to the advanced and technologically sophisticated vehicles of today, cars have revolutionized the way we live, work, and travel.</p>
      <p>It all began with the invention of the first practical automobile in the late 19th century. Since then, automobiles have evolved with groundbreaking innovations such as the assembly line, fuel injection, safety features, and hybrid technology.</p>
      <p>At our dealership, we celebrate this rich history by offering you the latest models from top manufacturers while honoring the heritage and legacy of the automotive industry.</p>
    </main>
  )
}

export default About
