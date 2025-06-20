import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>
      
    <div className="text-center text-2xl pt-1à border-t">
      <Title text1={'CONTACT'} text2={'US'}/>
    </div>

    <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
      <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
      <div className="flex flex-col justify-center items-start gap-6">
        <p className="font-semibold text-xl text-gray-600">Our Store</p>
        <p className="text-gray-500">350 ELKHMIASSE RUE 5667 N70EL KOELA AIT MELLOUL AGADIR</p>
        <p className="text-gray-500">Tel:+212640298482 <br />Email : Isameboumanjel@gmail.com</p>
        <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
        <p className="text-gray-500">Learn more about our teams an job opening.</p>
        <button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
      </div>
    </div>
    <NewsletterBox/>

    </div>
  )
}

export default Contact
