import MainServices from "../components/Home/MainServices";
import SubServices from "../components/Home/SubServices";

export const ServicesPage = () => {
    return (
        <>
            <h1 className='text-2xl font-bold mb-2'>Services</h1>
            <p className='mb-4 '>Lorem ipsum dolor sit amet</p>
            <MainServices/>
            <SubServices/>
        </>
    )
}