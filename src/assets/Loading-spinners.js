import { Oval, RotatingLines } from "react-loader-spinner";

export const ovalSpinner = <Oval
    height={30}
    width={30}
    color="#ffffff"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#993399"
    strokeWidth={10}
    strokeWidthSecondary={10}
/>

export const rotatingLines = <RotatingLines
    strokeColor="#993399"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
/>