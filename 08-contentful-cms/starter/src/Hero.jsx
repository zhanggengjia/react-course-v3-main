import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur amet? Quo dolorem animi, mollitia omnis nostrum, vel voluptatibus, fugit possimus officiis quod ut voluptatum pariatur facilis laborum quae illo repellendus beatae facere numquam eos dignissimos vitae delectus quas amet. Dicta, unde error magni repudiandae deserunt quae aut accusamus dolore.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browswer" className='img' />
        </div>
      </div>
    </section>
  )
}

export default Hero