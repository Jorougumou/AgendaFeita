import Image from "next/image";
import ContaFoto from '../assets/iconconta.jpg'
import ConfigFoto from '../assets/config_icon.png'
import MenuFoto from '../assets/Menu_icon.png'
import TodooFoto from '../assets/Todooicon.png'

export default function Header() {
    

    return (
        <div className="bg-orange-300 w-full h-20 flex justify-around relative">
            <div className='w-[20%] flex justify-center gap-5 items-center'>
                <Image className='rounded-full' src={TodooFoto} alt="icone site" width={70} height={70}></Image>
                <h2 className='bg-orange-400 rounded-full w-20 text-xl h-10 text-white flex justify-center items-center '>Todooo</h2>
            </div>

            <div className='w-[60%]'>

            </div>

            <div className='w-[20% flex items-center justify-center gap-6'>
                <a href=""><Image className='rounded-full' alt="foto_conta" src={ContaFoto}  width={40} height={40}></Image></a>
                <button className="rounded-full w-[40px] h-[40px] hover:bg-orange-400"><Image src={MenuFoto} alt="Menu" width={60} height={60}></Image></button>
            </div>
        </div>
    );
}