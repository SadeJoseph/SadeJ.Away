
import Image from "next/image";
import Button from "@/components/ui/Button";

const Contact = () => {
    return (
      <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="relative h-[500px] w-full">
        <Image
        src="/assets/contact.jpg"
        fill
        alt="contact img"
        className="object-cover opacity-50"
        />
       <h1
          className="relative flex w-full h-full justify-center items-center text-4xl 
        font-extrabold uppercase text-tertiary "
        >
        Contact
        </h1>
     </div>
      <div className="p-10 leading-8 text-lg mt-10 relative m-auto
      rounded-lg text-center">
        <form className="flex flex-col w-full gap-5">
          <div className="flex gap-5 max-sm:flex-col">
            <input 
            type="text" 
            placeholder="Name"
            className="px-1 py-3 border-gray-300 w-full
            rounded-md text-gray-900 shadow-sm ring-1
             ring-gray-300 placeholder:text-gray-400
             focus:ring-2
              focus:ring-tertiary
             outline-none"/>
              <input 
            type="email" 
            placeholder="Email"
            className="px-1 py-3 border-gray-300 w-full
            rounded-md text-gray-900 shadow-sm ring-1
             ring-gray-300 placeholder:text-gray-400
             focus:ring-2
              focus:ring-tertiary
             outline-none"/>
          </div>
          <div className="flex gap-5 max-sm:flex-col">
            <input 
            type="text" 
            placeholder="Subject"
            className="px-1 py-3 border-gray-300 w-full
            rounded-md text-gray-900 shadow-sm ring-1
             ring-gray-300 placeholder:text-gray-400
             focus:ring-2
              focus:ring-tertiary
             outline-none"/>
              <input 
            type="tel" 
            placeholder="Phone"
            className="px-1 py-3 border-gray-300 w-full
            rounded-md text-gray-900 shadow-sm ring-1
             ring-gray-300 placeholder:text-gray-400
             focus:ring-2
              focus:ring-tertiary
             outline-none"/>
          </div>
          <textarea
          name="message"
          placeholder="Message"
          rows={8}
          className="px-1 py-3 border-gray-300 w-full
            rounded-md text-gray-900 shadow-sm ring-1
             ring-gray-300 placeholder:text-gray-400
             focus:ring-2
              focus:ring-tertiary
             outline-none"/>
             <div className="flex justify-center">
              <Button
              text="Submit"
              />

             </div>
        </form>
      


      </div>
      </div>
    
      

      
    ) 
  };
  
  export default Contact;