import Image from "next/image";
import Map from '/public/images/city-campus-map.webp'
const FindUs = () => {
    return (
      <div>

        <div className='image-right'>
          <Image src={Map} alt='City Campus Map' layout="intrinsic" width={700} />
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.1202446759708!2d-1.4703501237512737!3d53.376897972437604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48798338bc5a1d13%3A0xad74824d1242efa8!2sCantor%20College!5e0!3m2!1sen!2suk!4v1735510697274!5m2!1sen!2suk"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <h2>Find Us</h2>
        <p>
          Cantor College
        </p>
        <p>
          Main Street
        </p>
        <p>
          Sheffield
        </p>
        <p>
          SC4 2BB
        </p>
        <p>
          Tel: (01321) 2340 235
        </p>
        <p>
          Fax: (01321) 2340 236
        </p>
        <p>
          Email: info@cantorcollege.ac.uk
        </p>

      </div>
    );
  }

  export default FindUs;

export const metadata = {
  title: "Find Us",
  description: "Cantor College - how to find us.", // search engines display in search results below title
};