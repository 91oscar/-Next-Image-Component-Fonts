import Image from "next/image";
import myImage from "@/../public/arepas.jpg";
import style from "../style/home.module.css";


export default function Home() {
  return (
    <div>
      <h1>Next Image Component & Fonts</h1>
      <Image
        className={style.img}
        src={myImage}
        alt="the most beautiful image you have every seen"
        width={1000}
        height={760}
      >
      </Image>

    </div >
  )
}

