import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="title">FlyVelers</h2>

      <p className="text">
        FlyVelers is a dynamic travel platform where explorers,
        adventurers, and dreamers connect to discover new destinations,
        share experiences, and plan unforgettable journeys around the world.
      </p>

      <div className="company">
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/reviews">Reviews</a></li>
        </ul>
      </div>

      <div className="explore">
        <ul>
          <li><a href="/routes">Travel Routes</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/discounts">Discounts</a></li>
        </ul>
      </div>

      <div className="contact">
        <p className="phone">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/>
          </svg>
          +505 1010-1010
        </p>

        <p className="email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M320 128C214 128 128 214 128 320C128 426 214 512 320 512C337.7 512 352 526.3 352 544C352 561.7 337.7 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320L576 352C576 405 533 448 480 448C450.7 448 424.4 434.8 406.8 414.1C384 435.1 353.5 448 320 448C249.3 448 192 390.7 192 320C192 249.3 249.3 192 320 192C347.9 192 373.7 200.9 394.7 216.1C400.4 211.1 407.8 208 416 208C433.7 208 448 222.3 448 240L448 352C448 369.7 462.3 384 480 384C497.7 384 512 369.7 512 352L512 320C512 214 426 128 320 128zM384 320C384 284.7 355.3 256 320 256C284.7 256 256 284.7 256 320C256 355.3 284.7 384 320 384C355.3 384 384 355.3 384 320z"/>
          </svg>
          flyveler@gmail.com
        </p>
      </div>

      <div className="separator"></div>

      <p>©2026 FlyVelers. All rights reserved</p>
    </footer>
  );
}

export default Footer;