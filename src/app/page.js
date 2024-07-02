import styles from "./page.module.css";
import Header from "./component/header/header";
import Service from "./component/service/service";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";
import Blog from "./component/blog/blog";
import About from "./component/about/about";
import Main from "./component/main/main";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Service />
      <About/>
      <Blog />
      <Contact />
      <Footer/>
    </div>
  );
}
